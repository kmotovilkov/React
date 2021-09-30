import React, {Component} from "react";
import dataCollector from "../helpers/dataCollector";
import requestHandler from "../helpers/requestHandler";

class Register extends Component {
    constructor() {
        super();
        this.dataCollector = (e) => {
            this.setState(dataCollector(e));
        }
        this.register = (e) => {
            e.preventDefault();
            requestHandler.register(this.state).then(data => console.log(data));
        }
    }

    render() {
        return (<form id="registerForm" onSubmit={this.register}>
            <h2>Register</h2>
            <label>Username:</label>
            <input onChange={(e) => {
                this.dataCollector(e)
            }} name="username" type="text"/>
            <label>Password:</label>
            <input onChange={(e) => {
                this.dataCollector(e)
            }} name="password" type="password"/>
            <label>Repeat Password:</label>
            <input name="repeatPass" type="password"/>
            <input onChange={(e) => {
                this.dataCollector(e)
            }} id="btnRegister" value="Sign Up" type="submit"/>
        </form>)
    }
}

export default Register;