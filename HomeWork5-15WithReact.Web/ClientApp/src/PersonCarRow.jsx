import React from 'react';
import { Link } from 'react-router-dom';



export default function PersonCarRow({ person }) {
    const { firstName, lastName, age, id } = person;
    return (
        <tr>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{age}</td>
            <td>{person.cars.length}</td>
            <td>
                <Link to={`/addcar/${id}`}>
                    <button className="btn btn-primary">Add Car</button>
                </Link>
            </td>
            <td>
                <Link to={`/deletecars/${id}`}>
                    <button style={{ marginLeft: 10 }} className="btn btn-danger">Delete Cars</button>
                </Link>
               
            </td>
        </tr>
    );
}


