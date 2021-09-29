import React from "react";
import './register.css';


export default function Login() {
    return (<div className="register">
        <div className="registerWrapper">
            <div className="registerLeft">
                <h3 className="registerLogo">Social App</h3>
                <span className="registerDesc">Connect with friends and the world around you on Lamasocial</span>
            </div>
            <div className="registerRight">
                <div className="registerBox">
                    <input placeholder="Username" type="text" className="registerInput"/>
                    <input placeholder="Email" type="text" className="registerInput"/>
                    <input placeholder="Password" type="password" className="registerInput"/>
                    <input placeholder="Password Again" type="password" className="registerInput"/>
                    <button className="registerButton">Sign Up</button>

                    <button className="registerLoginButton">Login into Account</button>
                </div>
            </div>
        </div>

    </div>);
}