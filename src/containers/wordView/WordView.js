// core & utils
import React, { Component } from 'react'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSelectedWord } from "../../actions/selectedWord";

// componenets
import Table from "../../components/generic/table";

class WordView extends Component {
    componentDidMount() {
        console.log(this.props.match.params.id)
        this.props.fetchSelectedWord(this.props.selectedWord.id);
    }
    render() {
        const
            { selectedWord } = this.props,
            lastAccessDate = new Date(selectedWord.lastAccess),
            userName = selectedWord.creator ? selectedWord.creator.userName : null,
            tableRows = [
                { key: 'Last Access', value: `${lastAccessDate.toLocaleDateString('en-US')} ${lastAccessDate.toLocaleTimeString('en-US')}` },
                { key: 'Views', value: selectedWord.referCount },
                { key: 'Created By', value: userName }
            ];

        return (
            <div>
                <h1>{selectedWord.name}</h1>
                <p>I forgot to add meaning attribute in the database entities. So this will be shown until I fix it</p>
                {selectedWord.id && !selectedWord.isFetching ? <Table rows={tableRows} /> : null}
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
