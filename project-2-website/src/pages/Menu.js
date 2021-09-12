import React from "react";
import {MenuList} from "../helpers/MenuList";
import '../styles/Menu.css';
import MenuItem from '../components/MenuItem';


function Menu() {
    return (<div className="menu">
            <h1 className="menuTitle">Our Menu</h1>
            <div className="menuList">
                {MenuList.map((props,key) => {
                    return <MenuItem key={key}
                                     image={props.image}
                                     name={props.name}
                                     price={props.price}/>
                })}
            </div>
        </div>

    );
}

export default Menu;