// core & utils
import React, { Component } from 'react'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSelectedWord } from "../../actions/selectedWord";

class WordView extends Component {
    componentDidMount() {
        this.props.fetchSelectedWord(this.props.selectedWord.id);
    }
    render() {
        const { selectedWord } = this.props;
        return (
            <div>
                <h1>{selectedWord.name}</h1>
                <p>{selectedWord.creator ? selectedWord.creator.userName : null}</p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        selectedWord: state.selectedWord
    };
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ fetchSelectedWord: fetchSelectedWord }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(WordView);
