import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from "react-redux";


const Home = () => {
    const contacts = useSelector(state => state);

    return (
        <div className="container">
            <div className="col-md-12 my-5 text-center">
                <Link to="/add" className="btn btn-outline-dark">Add Contact</Link>
            </div>
            <div className="col-md-10 mx-auto">

                <table className="table table-hover">
                    <thead className="text-white bg-dark text-center">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {contacts.map((contact, id) => (
                            <tr key={id}>
                                <td>{id + 1}</td>
                                <td>{contact.name}</td>
                                <td>{contact.email}</td>
                                <td>{contact.phone}</td>
                                <td>
                                    <Link to={`edit/${contact.id}`} className="btn btn-small btn-primary me-3">Edit</Link>
                                    <button  className="btn btn-small btn-danger">Delete</button>
                                </td>
                            </tr>
                        )
                    )}
                    </tbody>
                </table>
            </div>

        </div>

    );
};

export default Home;