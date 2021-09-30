import React from "react";
import "../../styles/header.css";

const Header = (props) => {
    return (
        <>
            <header>
                <span className="logo">☃</span><span className="header">SeenIt</span>
                <div id="profile"><span>pesho</span>|<a href="#/logout">logout</a></div>
            </header>
        </>
    )
}
export default Header;