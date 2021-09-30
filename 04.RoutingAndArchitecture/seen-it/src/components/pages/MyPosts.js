import React from "react";
import "../../styles/post.css";
import Post from "./Post";


export default function MyPosts() {
    return (
        <section id="viewMyPosts">
            <div className="post post-content">
                <h1>Your Posts</h1>
            </div>
            <div className="posts">
                <Post/>
            </div>
        </section>
    )

}
