// core & utils
import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// actions
import { fetchWordGridBatch } from "../../actions/wordGrid";

// componenets
import WordGrid from "../../components/wordGridList/WordGrid";

class LandingPage extends Component {
    render() {
        return (
            <div>
                <WordGrid
                    fetchWordGridBatch={index => this.props.fetchWordGridBatch(index)}
                    wordGrid={this.props.wordGrid}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        wordGrid: state.wordGrid.data
    };
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWordGridBatch: fetchWordGridBatch }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(LandingPage);
