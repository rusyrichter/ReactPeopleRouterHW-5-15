import React from 'react';
import axios from 'axios';

class DeleteCars extends React.Component {

    state = {
        carsToDelete: [{ }]
    }
    componentDidMount = async () => {
        const { id } = this.props.match.params;
        const { data } = await axios.get(`/api/peoplecar/getCarsForPerson?id=${id}`);
        this.setState({
            carsToDelete: [...data]
        })
    }
    onCancleClick = () => {
        this.setState({
            carsToDelete: [],
        })
    }
    onDeleteAllClick = async () => {  
        const { id } = this.props.match.params;
        await axios.post('/api/peoplecar/deleteCars', { id });
        this.setState({
            carsToDelete: [],
        })
        this.props.history.push('/');
    }


    render() {

        return (
            <div className="container" style={{ marginTop: '60px' }}>
                <div>
                    <div className="row">
                        <div className="col-md-10">
                            <input type="text" className="form-control form-control-lg" placeholder="Search Cars" value="" />
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-dark btn-lg w-100">Clear</button>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-12">
                            <table className="table table-hover table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>Make</th>
                                        <th>Model</th>
                                        <th>Year</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.carsToDelete.map(c =>
                                        <tr>
                                            <td>{c.make}</td>
                                            <td>{c.model}</td>
                                            <td>{c.year}</td>
                                        </tr>
                                    )}

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <h3>Are you sure you want to delete all of these cars?</h3>
                        </div>
                        <div className="col-md-6">
                            <a href="/">
                                <button onClick={this.onCancleClick} className="btn btn-primary btn-lg w-100">No</button>
                            </a>
                        </div>
                        <div className="col-md-6">
                            <button onClick={this.onDeleteAllClick} className="btn btn-danger btn-lg w-100">Yes</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DeleteCars;