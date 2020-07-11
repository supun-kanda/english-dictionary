import React, { Component } from 'react'
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";

// containers
import LandingPage from "../landingPage/LandingPage";
import WordView from "../wordView/WordView";
import AppBar from "../../components/App/AppBar";

export default class MainRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <AppBar
                    searchSuggest={this.props.searchSuggest}
                    searchSuggestions={this.props.searchSuggestions || {}}
                />
                <Route exact path="/" component={LandingPage} />
                <Route path="/word/:id/view" component={WordView} />
            </BrowserRouter>
        )
    }
}
