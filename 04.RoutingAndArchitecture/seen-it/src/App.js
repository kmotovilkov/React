import React, {Component} from "react";
import {BrowserRouter} from "react-router-dom";
import './App.css';
import Header from "./components/pages/Header";
import Footer from "./components/pages/Footer";
import Home from "./components/auth/Home";
import LoggedIn from "./components/pages/LoggedIn"

class App extends Component {
    constructor() {
        super();
        this.state = {
            token: ''
        }
    }

    componentDidMount() {
        if (localStorage.getItem('token')) {
            this.setState({token: localStorage.getItem('token')});
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    {this.state.token===''?<Home/>:<LoggedIn/>}
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
