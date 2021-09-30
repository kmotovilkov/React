import React, {Component} from "react";
import{Link} from "react-router-dom";
import dataCollector from "../helpers/dataCollector";
import requestHandler from "../helpers/requestHandler";
import "../../styles/submit.css";


class Submit extends Component {
    constructor() {
        super();


        this.dataCollector = (e) => {
            this.setState(dataCollector(e));
        }
        this.createPost = (e) => {
            e.preventDefault();
            requestHandler.createPost(this.state).then(data => {
                console.log(data);
            }).catch(err => console.log(err));

        }
    }

    componentDidMount() {
        this.setState({author: localStorage.getItem('username')});
    }

    render() {
        return (
            <section id="viewSubmit">
                <div className="submitArea">
                    <h1>Submit Link</h1>
                    <p>Please, fill out the form. A thumbnail image is not required.</p>
                </div>
                <div className="submitArea formContainer">
                    <form id="editPostForm" className="submitForm" onSubmit={this.createPost}>
                        <label>Link URL:</label>
                        <input onChange={(e) => {
                            this.dataCollector(e)
                        }} name="url" type="text"/>
                        <label>Link Title:</label>
                        <input onChange={(e) => {
                            this.dataCollector(e)
                        }} name="title" type="text"/>
                        <label>Link Thumbnail Image (optional):</label>
                        <input onChange={(e) => {
                            this.dataCollector(e)
                        }} name="image" type="text"/>
                        <label>Comment (optional):</label>
                        <textarea onChange={(e) => {
                            this.dataCollector(e)
                        }} name="description">No desc</textarea>
                        <input id="btnEditPost" type="submit" value="Edit Post"/>
                    </form>
                </div>
            </section>
        )
    }

}

export default Submit;