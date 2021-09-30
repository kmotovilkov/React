import React from "react";
import {Switch, Route} from "react-router-dom"
import "../../styles/menu.css";

import Catalog from "./../pages/Catalog";
import Submit from "./../pages/Submit";
import MyPosts from "./../pages/MyPosts";

export default function MainPart() {
    return (
        <Switch>
            <Route exact path="/" component={Catalog}/>
            <Route path="/catalog" component={Catalog}/>
            <Route path="/submit" component={Submit}/>
            <Route path="/myposts" component={MyPosts}/>
        </Switch>
    )

}