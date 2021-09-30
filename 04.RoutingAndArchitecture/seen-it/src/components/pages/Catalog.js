import React, {Component} from "react";
import "../../styles/post.css";
import requestHandler from "../helpers/requestHandler";
import Post from "./Post";

class Catalog extends Component {
    constructor() {
        super()

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        requestHandler.pushPosts().then(data => {
            this.setState({posts: data})
        });
    }

    render() {
        return (
            <section id="viewCatalog">
                <div className="posts">
                    {this.state.posts.map(post => {
                            return <Post key={post._id} props={post}/>
                        }
                    )}
                </div>
            </section>
        )
    }
}

export default Catalog;
