import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {useSelector} from "react-redux";

const EditContact = () => {

    const {id} = useParams();

    const contacts = useSelector(state => state);
    const currContact = contacts.find(contact => contact.id === parseInt(id));
    return (
        <div className="container">
            {currContact ? (
                <>
                    <h1 className="display-3 text-center">Edit Student {id}</h1>
                    <div className="row">
                        <div className="col-md-6 shadow mx-auto p-5 ">
                            <form>
                                <div className="form-group">
                                    <input type="text" placeholder="Name" className="form-control mb-2"/>
                                    <input type="email" placeholder="Email" className="form-control mb-2"/>
                                    <input type="number" placeholder="Phone number" className="form-control mb-2"/>
                                    <input type="submit" value="Update Student" className="btn btn-dark mt-2 ms-3"/>
                                    <Link to="/" className="btn btn-danger mt-2 ms-3">Cancel</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            ) : (<h1 className="display-3 text-center">Student contact with id {id} not exists!</h1>
            )}
        </div>
    );
};

export default EditContact;