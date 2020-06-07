// react
import React, { Component } from 'react'

// components & containers
import WordView from "../../containers/wordView/WordView";
import { AppBar, IconButton, Toolbar, Typography, Button } from "@material-ui/core";
import { Portrait } from "@material-ui/icons";
export default class App extends Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <Portrait />
            </IconButton>
            <Typography variant="h6">
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <div />
        <WordView />
      </div>
    )
  }
}
