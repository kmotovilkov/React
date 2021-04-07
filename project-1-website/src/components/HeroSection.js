import React from "react";
import "../App.css";
import {Button} from "./Button";
import "./HeroSection.css";

function HeroSection() {
    return (
        <div className="hero-container">
            <video src="/videos/video-1.mp4" autoPlay loop muted/>
            <h1>AFUELED BY COFFEE</h1>
            <p>Give your employees a high-quality, handcrafted coffee choice to help fuel their workday.</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                    SHOP NOW
                </Button>
                <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                    WATCH VIDEO <i className="far fa-play-circle"/>
                </Button>
            </div>

        </div>
    );

}

export default HeroSection;