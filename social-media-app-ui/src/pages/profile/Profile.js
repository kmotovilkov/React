import React from "react";
import './profile.css';
import {} from "@mui/icons-material";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Feed from "../../components/Feed";
import Rightbar from "../../components/Rightbar";

export default function Profile() {
    return (<div>
        <Navbar/>
        <div className="profile">
            <Sidebar/>
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img src="assets/post/3.jpeg" alt="" className="profileCoverImg"/>
                        <img src="assets/person/1.jpeg" alt="" className="profileUserImg"/>
                    </div>
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">Asd Fdsa</h4>
                    <span className="profileInfoDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </span>
                </div>
                <div className="profileRightBottom">
                    <Feed/>
                    <Rightbar profile/>
                </div>
            </div>
        </div>
    </div>);
}