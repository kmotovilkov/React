import React from "react";
import '../styles/feed.css';
import {Posts} from "../../src/profileData";
import Share from "./Share";
import Post from "./Post";

export default function Feed() {
    return (<div className="feed">
        <div className="feedWrapper">
            <Share/>
            {Posts.map((post) => (
                <Post key={post.id} post={post}/>
            ))}
        </div>
    </div>);
}