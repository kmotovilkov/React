import React from "react";
import {Link} from "react-router-dom";
import Background from '../assets/pizza.jpeg';
import '../styles/Home.css';


function Home() {
    return (<div className="home" style={{backgroundImage: `url(${Background})`}}>
            <div className='headerContainer' >
                <h1>Pizzeria</h1>
                <p>Lorem ipsum dolor sit amet</p>
                <Link path="/menu">
                    <button>ORDER NOW</button>
                </Link>
            </div>
        </div>

    );
}

export default Home;