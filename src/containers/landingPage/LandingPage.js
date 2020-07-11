// core & utils
import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// actions
import { fetchWordGridBatch } from "../../actions/wordGrid";
import { getVocabularySize } from "../../actions/localActions";

// componenets
import WordGrid from "../../components/wordGridList/WordGrid";
import Pagination from '@material-ui/lab/Pagination';

// constants
import { wordGridpaginationLimit } from "../../constants/appConstants";


class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            vocabularySize: 0
        }
        this.onPageChange = this.onPageChange.bind(this);
    }

    onPageChange(_, selectedPage) {
        this.setState({
            page: selectedPage
        })
    }

    componentDidMount() {
        getVocabularySize()
            .then(count =>
                this.setState({
                    vocabularySize: count
                }))
            .catch(err =>
                this.setState({
                    vocabularySize: 0
                }))
    }

    render() {
        return (
            <div>
                <WordGrid
                    fetchWordGridBatch={index => this.props.fetchWordGridBatch(index)}
                    wordGrid={this.props.wordGrid}
                    selectedPage={this.state.page}
                />
                <Pagination count={Math.ceil(this.state.vocabularySize / wordGridpaginationLimit)} page={this.state.page} onChange={this.onPageChange} />
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
