import React, { Component } from "react";
import dataCollector from "../helpers/dataCollector";
import requestHandler from "../helpers/requestHandler";

class Login extends Component {
    constructor() {
        super();
        this.dataCollector = (e) => {
            this.setState(dataCollector(e));
        }
        this.Login = (e) => {
            e.preventDefault();
            this.setState({ loading: true });
            requestHandler.login(this.state).then(data => {
                localStorage.setItem('token', data._kmd.authtoken);
                localStorage.setItem('username', data.username);
                this.setState({ loading: false, success: true });
            });
        };
    }

    render() {
        return (<form id="loginForm" onSubmit={this.Login}>
            <h2>Sign In</h2>
            <label>Username:</label>
            <input onChange={(e) => {
                this.dataCollector(e);
            }} name="username" type="text" />
            <label>Password:</label>
            <input onChange={(e) => {
                this.dataCollector(e);
            }} name="password" type="password" />
            <input id="btnLogin" value="Sign In" type="submit" />
        </form>);
    }
}

export default Login;