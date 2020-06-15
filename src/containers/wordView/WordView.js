// core & utils
import React, { Component } from 'react'
import { TextField } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { buttonClick } from '../actions/index';


//services
import { request } from "../../services/graphql";

export default class WordView extends Component {
    componentDidMount() {
        this.fetch();
    }
    render() {
        const top100Films = [{ title: 'A' }, { title: 'B' }, { title: 'C' }];
        return (
            <div style={{ padding: '10px' }}>
                <Autocomplete
                    id="combo-box-demo"
                    options={top100Films}
                    getOptionLabel={(option) => option.title}
                    style={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Search Words" variant="outlined" />}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        lastWords: state.lastWords,
    };
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ fetch: fetch }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(WordView);
