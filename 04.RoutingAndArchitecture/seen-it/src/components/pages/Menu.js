import React from "react";
import {Link} from "react-router-dom"
import "../../styles/menu.css";


export default function Menu() {
    return (
        <div id="menu">
            <div className="title">Navigation</div>
            <Link className="nav" to="/catalog">Catalog</Link>
            <Link className="nav" to="/submit">Submit Link</Link>
            <Link className="nav" to="/myposts">My Posts</Link>
        </div>
    )

}





