import React, { Component } from 'react'
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";

// containers
import LandingPage from "../landingPage/LandingPage";
import WordView from "../wordView/WordView";

export default class MainRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route exact path="/" component={LandingPage} />
                <Route path="/word/:id/view" component={WordView} />
            </BrowserRouter>
        )
    }
}
