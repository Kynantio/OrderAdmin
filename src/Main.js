import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";

import Navbar from "./component/Navbar";

import Cart from "./client/Cart";
import Login from "./page/Login";
import Admin from "./page/Admin";
import User from "./page/User";
import Product from "./client/Product";
import Register from "./client/Register";
import Profil from "./page/Profil";
import Orders from "./page/Orders";


class Main extends Component{
    render = () => {
        return(
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route exact path="/">
                    <Navbar />
                    <Product />
                </Route>
                <Route path="/Admin">
                    <Navbar />
                    <Admin />
                </Route>
                <Route path="/User">
                    <Navbar />
                    <User />
                </Route>
                <Route path="/cart">
                    <Navbar />
                    <Cart />
                </Route>
                <Route path="/profil">
                <Navbar />
                <Profil />
                </Route>
                <Route path="/orders">
                <Navbar />
                <Orders />
                </Route>
            </Switch>
        );
    }
}

export default Main;
