import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Layout from './Layout';
import PeopleCarTable from './PeopleCarTable';
import AddPerson from './AddPerson'
import { Route } from 'react-router-dom';
import AddCar from './AddCar';
import DeleteCars from './DeleteCars';

class App extends React.Component {

    state = {
        count: 0
    }

    onButtonClick = () => {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
            <Layout>
                <Route exact path='/' component={PeopleCarTable} />
                <Route exact path='/addperson' component={AddPerson} />
                <Route exact path='/addcar/:id' component={AddCar} />
                <Route exact path='/deletecars/:id' component={DeleteCars} />
            </Layout>
        );
    }
};

export default App;