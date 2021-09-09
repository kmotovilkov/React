import React, {Component} from "react";

class SignUpForm extends Component {

    constructor() {
        super()
        this.state = {
            form: {}
        };


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const name = e.target.dataset.name;
        const value = e.target.value;
        const newObj = {};
        newObj[name] = value;
        this.setState({
            form: Object.assign(this.state.form, newObj)
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        fetch('http://localhost:5000/auth/signup', {
            method: 'POST',
            body: JSON.stringify(this.state.form),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(data => data.json()).then(res => console.log(res))
    }

    render() {
        return (<>
                <h1>Sign Up Form</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="inputEmail" className="form-label">Email address</label>
                        <input type="email" onChange={this.handleChange} data-name="email" className="form-control"
                               id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputPassword" className="form-label">Password</label>
                        <input type="password" onChange={this.handleChange} data-name="password"
                               className="form-control"
                               id="inputPassword" placeholder="Enter password"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputUsername" className="form-label">Username</label>
                        <input type="text" onChange={this.handleChange} data-name="name" className="form-control"
                               id="inputUsername" placeholder="Enter username"/>
                    </div>
                    <button type="button" onClick={this.handleSubmit} className="btn btn-primary">Submit</button>
                </form>
            </>
        );
    }
}

export default SignUpForm;