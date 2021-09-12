import React from "react";
import Background from '../assets/pizzaLeft.jpg';
import '../styles/Contact.css';


function Contact() {
    return (<div className="contact">
            <div className="leftSide" style={{backgroundImage: `url(${Background})`}}>

            </div>
            <div className="rightSide">
                <h1>Contact Us</h1>
                <form id="contactForm">
                    <label htmlFor="name">Full name</label>
                    <input name="name" type="text" placeholder="Enter your name..."/>
                    <label htmlFor="email">Email</label>
                    <input name="email" type="text" placeholder="Enter your email..."/>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" required cols="30" rows="10" placeholder="Enter message...">
                    </textarea>
                    <button type="button">Send Message</button>
                </form>
            </div>
        </div>

    );
}

export default Contact;