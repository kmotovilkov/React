import React, { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

const EditContact = () => {
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ phone, setPhone ] = useState("");

    const { id } = useParams();

    const contacts = useSelector(state => state);
    const dispatch = useDispatch();
    const history = useHistory();
    const currContact = contacts.find(contact => contact.id === parseInt(id));

    useEffect(() => {
        if (currContact) {
            setName(currContact.name);
            setEmail(currContact.email);
            setPhone(currContact.phone);
        }
    }, [ currContact ]);


    const handleSubmit = (e) => {
        e.preventDefault();

        const checkContactEmailExists = contacts.filter((contact) =>
        contact.email === email && contact.id !== currContact.id
          ? contact
          : null
      );
      const checkContactPhoneExists = contacts.filter((contact) =>
        contact.phone === phone && contact.id !== currContact.id
          ? contact
          : null
      );
  
      if (!email || !name || !phone) {
        return toast.warning("Please fill in all fields!!");
      }
      if (checkContactEmailExists.length > 0) {
        return toast.error("This email already exists!!");
      }
      if (checkContactPhoneExists.length > 0) {
        return toast.error("This phone number already exists!!");
      }
        const data = {
            id: parseInt(id),
            name,
            email,
            phone
        };

        dispatch({ type: "UPDATE_CONTACT", payload: data });
        // toast.success("Student update successfully");
        history.push("/");
    };



    return (
        <div className="container">
            {currContact ? (
                <>
                    <h1 className="display-3 text-center">Edit Student {id}</h1>
                    <div className="row">
                        <div className="col-md-6 shadow mx-auto p-5 ">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input type="text" placeholder="Name" className="form-control mb-2"
                                        value={name} onChange={e => setName(e.target.value)} />
                                    <input type="email" placeholder="Email" className="form-control mb-2"
                                        value={email} onChange={e => setEmail(e.target.value)} />
                                    <input type="number" placeholder="Phone number" className="form-control mb-2"
                                        value={phone} onChange={e => setPhone(e.target.value)} />
                                    <input type="submit" value="Update Student" className="btn btn-dark mt-2 ms-3" />
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