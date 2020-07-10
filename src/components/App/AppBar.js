// react
import React, { Component } from 'react'

// components & containers
import { AppBar as Bar, TextField, IconButton, Toolbar, Typography, Button } from "@material-ui/core";
import { Portrait } from "@material-ui/icons";
import { Autocomplete } from '@material-ui/lab';

import { Link } from "react-router-dom";

export default class AppBar extends Component {
    componentDidMount() {
        this.props.searchSuggest();
    }
    render() {
        return (
            <div>
                <Bar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <Portrait />
                        </IconButton>
                        <Link to="/">
                            <Typography variant="h6">Pocket Dictionary</Typography>
                        </Link>
                        <Button color="inherit">Login</Button>
                        <Autocomplete
                            id="combo-box-demo"
                            options={this.props.searchSuggestions || []}
                            getOptionLabel={(option) => option.name || ''}
                            style={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Search Words" variant="outlined" />}
                        />
                    </Toolbar>
                </Bar>
            </div>
        )
    }
}
