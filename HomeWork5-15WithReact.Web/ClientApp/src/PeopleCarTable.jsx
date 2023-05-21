import React from 'react';
import AddPerson from './AddPerson';
import { Link } from 'react-router-dom';
import { produce } from 'immer';
import axios from 'axios';
import PersonCarRow from './PersonCarRow';


class PeopleCarTable extends React.Component {
    state = {
        people: [],
        person: {
            firstName: '',
            lastName: '',
            age: '',
            cars: [],
        },
          
    }
    refreshPeople = async () => {
        const response = await axios.get('/api/peoplecar/getall');
        const people = response.data;
        this.setState({ people });
    };
    generateTable = () => {
        const { people } = this.state;
        return people.map(p => <PersonCarRow
            key={p.id}
            person={p}
        /> 
            
      )
    }
     
    componentDidMount = () => {
        this.refreshPeople();     
    }

    render() {

        return <div id="root">
           
            <div className='container' style={{ marginTop: '80px' }}>
                <div >
                    <div className='row'>
                        <div className='col-md-10'>
                            <input className='form-control form-control-lg' type='text' placeholder='Search People' />
                        </div>
                        <div className='col-md-2'>
                            <button className='btn btn-dark btn-lg w-100'>Clear</button>
                        </div>
                        <div className='col-md-12' style={{ marginTop: '20px' }}>

                            <Link to='/addperson' className="btn btn-success btn-lg w-100"
 >                                                                                                                       
                                AddPerson
                            </Link>
                        </div>
                    </div>
                </div>

                <table className="table table-hover table-striped table-bordered" style={{ marginTop: '20px' }}>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Car Count</th>
                            <th>Add Car</th>
                            <th>Delete Cars</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.generateTable()}
                    </tbody>
                </table>
            </div>
        </div>

    }
}
export default PeopleCarTable;

