// react
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// components & containers
import { AppBar as Bar, TextField, IconButton, Toolbar, Typography, Button } from "@material-ui/core";
import { Portrait } from "@material-ui/icons";
import { Autocomplete } from '@material-ui/lab';

// actions
import { searchSuggest } from "../../actions/search";

class AppBar extends Component {

    componentDidMount() {
        this.props.searchSuggest();
    }

    componentDidUpdate(prevProps) {
        if (this.props.searchSuggestions.shouldUpdate && !prevProps.searchSuggestions.shouldUpdate)
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
                            options={this.props.searchSuggestions.data || []}
                            getOptionLabel={option => option.name || ''}
                            style={{ width: 300 }}
                            renderInput={params => <TextField {...params} label="Search Words" variant="outlined" />}
                            renderOption={option => <Link to={`/word/${option.id}/view`}>{option.name}</Link>}
                        />
                    </Toolbar>
                </Bar>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        searchSuggestions: state.search.searchSuggestions,
    };
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ searchSuggest: searchSuggest }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(AppBar);

