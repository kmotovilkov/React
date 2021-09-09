import React, {Component} from "react";

class LoginForm extends Component {

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
        fetch('http://localhost:5000/auth/login', {
            method: 'POST',
            body: JSON.stringify(this.state.form),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(data => data.json())
            .then(res => {
                if (res.success && res.token) {
                    localStorage.setItem('token', res.token)
                    console.log('ASDASDASD')
                }
            }).catch(error => console.log(error));
    }


    render() {
        return (<>
                <h1>Login Form</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="inputEmail" className="form-label">Email address</label>
                        <input type="email" onChange={this.handleChange} data-name="email" className="form-control"
                               id="inputEmaill" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputPassword" className="form-label">Password</label>
                        <input type="password" onChange={this.handleChange} data-name="password"
                               className="form-control"
                               id="inputPassword"/>
                    </div>
                    <button type="button" onClick={this.handleSubmit} className="btn btn-primary">Submit</button>
                </form>
            </>

        );
    }
}

export default LoginForm;