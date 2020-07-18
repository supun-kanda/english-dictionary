// core modules
import React from 'react'
import { Route, HashRouter } from "react-router-dom";

// containers
import LandingPage from "../../containers/landingPage/LandingPage";
import WordView from "../../containers/wordView/WordView";
import AppBar from "../../containers/App/AppBar";

export default function App() {
  return (
    <HashRouter>
      <AppBar />
      <Route exact path="/" component={LandingPage} />
      <Route path="/word/:id/view" component={WordView} />
    </HashRouter>
  )
}
