// core & utils
import React, { Component } from 'react'
import { TextField } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchSuggest } from '../../actions/search';

class WordView extends Component {
    componentDidMount() {
        this.props.searchSuggest();
    }
    render() {
        return (
            <div style={{ padding: '10px' }}>
                <Autocomplete
                    id="combo-box-demo"
                    options={this.props.searchSuggestions || []}
                    getOptionLabel={(option) => option.name}
                    style={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Search Words" variant="outlined" />}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        searchSuggestions: state.search.searchSuggestions.data,
    };
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ searchSuggest: searchSuggest }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(WordView);
