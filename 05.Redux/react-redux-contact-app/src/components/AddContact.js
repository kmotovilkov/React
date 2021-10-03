import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
import {useHistory} from "react-router-dom";

const AddContact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const contacts = useSelector(state => state);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const checkEmail = contacts.find((con) => con.email === email && email);
        const checkPhone = contacts.find((con) => con.phone === parseInt(phone));

        if (!email || !name || !phone) {
            return toast.warning("Please fill in all fields!");
        }

        if (checkEmail) {
            return toast.error("This email already exists");
        }
        if (checkPhone) {
            return toast.error("This phone already exists");
        }
        const data = {
            id: contacts[contacts.length - 1].id + 1,
            name,
            email,
            phone
        }

        dispatch({type: "ADD_CONTACT", payload: data});
        toast.success("Student added successfully");
        history.push("/");
    };
    return (
        <div className="container-fluid">
            <h1 className="display-3 my-5 text-center">Add Student</h1>
            <div className="row">
                <div className="col-md-6 shadow mx-auto p-5 ">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" placeholder="Name" className="form-control mb-2"
                                   value={name} onChange={e => setName(e.target.value)}/>
                            <input type="email" placeholder="Email" className="form-control mb-2"
                                   value={email} onChange={e => setEmail(e.target.value)}/>
                            <input type="number" placeholder="Phone number" className="form-control mb-2"
                                   value={phone} onChange={e => setPhone(e.target.value)}/>
                            <input type="submit" value="Add Student" className="btn btn-block btn-dark mt-2"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default AddContact;