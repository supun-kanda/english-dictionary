// core & utils
import React, { Component } from 'react'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// actions
import { fetchSelectedWord } from "../../actions/selectedWord";
import { setSearchSuggesstionUpdateStatus } from "../../actions/search";

// componenets
import Table from "../../components/generic/table";

class WordView extends Component {
    componentDidMount() {
        this.props.fetchSelectedWord(this.props.match.params.id);
    }
    render() {
        const
            { selectedWord } = this.props,
            lastAccessDate = new Date(selectedWord.lastAccess),
            userName = selectedWord.creator ? selectedWord.creator.userName : null,
            tableRows = [
                { key: 'Last Access', value: `${lastAccessDate.toLocaleDateString('en-US')} ${lastAccessDate.toLocaleTimeString('en-US')}` },
                { key: 'Views', value: selectedWord.referCount || 0 },
                { key: 'Created By', value: userName }
            ];

        return (
            <div>
                <h1>{selectedWord.name}</h1>
                <p>{selectedWord.meaning}</p>
                {selectedWord.id && !selectedWord.isFetching ? <Table rows={tableRows} /> : null}
            </div>
        )
    }
    componentWillUnmount() {
        this.props.setSearchSuggesstionUpdateStatus(true);
    }
}

function mapStateToProps(state) {
    return {
        selectedWord: state.selectedWord
    };
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchSelectedWord: fetchSelectedWord,
        setSearchSuggesstionUpdateStatus: setSearchSuggesstionUpdateStatus
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(WordView);
