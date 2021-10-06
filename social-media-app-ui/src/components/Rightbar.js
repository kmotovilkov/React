import React from "react";
import '../styles/rightbar.css';
import Online from "./Online";
import {Users} from "../profileData";

export default function Rightbar({profile}) {

    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="assets/gift.png" alt=""/>
                    <span className="birthdayText"><b>Jon Doe</b> and <b>3 other friends</b> hav a birthday today</span>
                </div>
                <img className="rightbarAd" src="assets/ad.png" alt=""/>
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map(user => (<Online user={user} key={user.id}/>))}
                </ul>
            </>
        );
    };

    const ProfileRightbar = () => {
        return (<>
                <h4 className="rightbarTitle">User Information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoKey">New York</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoKey">Madrid</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoKey">Single</span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User Friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src="assets/person/7.jpeg" alt="" className="rightbarFollowingImg"/>
                        <span className="rightbarFollowingName">Jon Mone</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/7.jpeg" alt="" className="rightbarFollowingImg"/>
                        <span className="rightbarFollowingName">Jon Mone</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/7.jpeg" alt="" className="rightbarFollowingImg"/>
                        <span className="rightbarFollowingName">Jon Mone</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/7.jpeg" alt="" className="rightbarFollowingImg"/>
                        <span className="rightbarFollowingName">Jon Mone</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/7.jpeg" alt="" className="rightbarFollowingImg"/>
                        <span className="rightbarFollowingName">Jon Mone</span>
                    </div>
                </div>
            </>
        );
    };

    return (<div className="rightbar">
        <div className="rightbarWrapper">
            {profile ? <ProfileRightbar/> : <HomeRightbar/>}
        </div>
    </div>);
}