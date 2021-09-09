import React, {Component} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import LoggedInScreen from "./components/logged-in/LoggedInScreen";

class App extends Component {
    constructor() {
        super();

        let route = '';
        if (localStorage.getItem('token')) {
            route = 'loggedIn';
        }
        this.state = {
            route: route
        }

        this.showComponent = this.showComponent.bind(this);
        this.formSwitch = this.formSwitch.bind(this);
        this.setLoggedIn = this.setLoggedIn.bind(this);
    }

    formSwitch() {
        if (this.state.route === 'login') {
            this.setState({
                route: 'signup'
            });
        } else {
            this.setState({
                route: 'login'
            });
        }
    }

    showComponent() {
        if (this.state.route === 'login') {
            return <LoginForm setLoggedIn={this.setLoggedIn}/>;
        } else if (this.state.route === 'loggedIn') {
            return <LoggedInScreen/>;
        }
        return <SignUpForm/>;
    }

    setLoggedIn() {
        this.setState({route: 'loggedIn'})
    }

    render() {
        return (<div className="App">
                <button onClick={this.formSwitch} className="btn btn-link">Change Form</button>
                {this.showComponent()}
            </div>
        );
    }
}

export default App;


