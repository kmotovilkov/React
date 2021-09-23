import React from "react";
import '../styles/navbar.css';
import {Search, Person,Chat,Notifications} from "@mui/icons-material";

export default function Navbar() {
    return (<div className="navbarContainer">
        <div className="navbarLeft">
            <span className='logo'>Social App</span>
        </div>
        <div className="navbarCenter">
            <div className="searchBar">
                <Search className="searchIcon"/>
                <input type="text" className="searchInput" placeholder='Search for friend, post or video'/>
            </div>
        </div>
        <div className="navbarRight">
            <div className="navbarLnks">
                <span className="navbarLinks">Homepage</span>
                <span className="navbarLinks">Timeline</span>
            </div>
            <div className="navbarIcons">
                <div className="navbarIconItem">
                    <Person/>
                    <span className="navbarIconBadge">1</span>
                </div>        <div className="navbarIconItem">
                    <Chat/>
                    <span className="navbarIconBadge">3</span>
                </div>        <div className="navbarIconItem">
                    <Notifications/>
                    <span className="navbarIconBadge">2</span>
                </div>
            </div>
            <img src="/assets/person/1.jpeg" alt="" className="navbarImg"/>
        </div>
    </div>);
}