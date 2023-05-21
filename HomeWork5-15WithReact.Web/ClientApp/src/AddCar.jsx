import React from 'react'
import axios from 'axios'
import { produce } from 'immer';

class AddCar extends React.Component {

    state = {
        car: {
            make: '',
            model: '',
            year: '',
            personId: '',

        },
        name: ''
    }



    componentDidMount = async () => {
        const { id } = this.props.match.params;
        const { data } = await axios.get(`/api/peoplecar/getPersonById?id=${id}`);
        this.setState({
            name: data.firstName + ' ' + data.lastName,
            car: {
                personId: id
            }
        });

    }
    onTextChange = e => {
        const nextState = produce(this.state, draftState => {
            draftState.car[e.target.name] = e.target.value;         
        });
        this.setState(nextState);
    }

    onSumbit = async () => {
        console.log('hello')
        await axios.post('/api/peoplecar/addcar', this.state.car);
        this.props.history.push('/');
    }
    render() {
        return (

            <div className='row' style={{ marginTop: '200px' }}>
                <div className="col-md-6 offset-md-3 card bg-light p-4">
                    <h2> Add a car for {this.state.name} </h2>
                    <input type="text" className="form-control" value={this.state.car.make} name="make" placeholder="Make" onChange={this.onTextChange} />
                    <br />
                    <input type="text" className="form-control" value={this.state.car.model} name="model" placeholder="Model" onChange={this.onTextChange} />
                    <br />
                    <input type="text" className="form-control" value={this.state.car.year} name="year" placeholder="Year" onChange={this.onTextChange} />
                    <br />
                    <button onClick={this.onSumbit} className="btn btn-primary btn-lg btn-block">Submit</button>
                </div>
            </div>

        )
    }
}
export default AddCar;