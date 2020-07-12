// core modules
import React, { Component } from 'react'
import { BrowserRouter, Route } from "react-router-dom";

// containers
import LandingPage from "../../containers/landingPage/LandingPage";
import WordView from "../../containers/wordView/WordView";
import AppBar from "../../containers/App/AppBar";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <AppBar />
        <Route exact path="/" component={LandingPage} />
        <Route path="/word/:id/view" component={WordView} />
      </BrowserRouter>
    )
  }
}
