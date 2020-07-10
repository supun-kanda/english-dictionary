// core & utils
import React, { Component } from 'react'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSelectedWordId } from "../../actions/selectedWord";

// componenets
import WordGrid from "../../components/wordGridList/WordGrid";

class LandingPage extends Component {
    render() {
        return (
            <div>
                <WordGrid
                    words={this.props.searchSuggestions}
                    onWordClick={id => this.props.setSelectedWordId(id)}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        selectedWord: state.selectedWord,
        searchSuggestions: state.search.searchSuggestions.data
    };
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ setSelectedWordId: setSelectedWordId }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(LandingPage);
