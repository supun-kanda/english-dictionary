// react
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// components & containers
import MainRouter from "./MainRouter";

// services
import { searchSuggest } from "../../actions/search";

class App extends Component {
  render() {
    return (
      <div>
        <MainRouter searchSuggestions={this.props.searchSuggestions} searchSuggest={() => this.props.searchSuggest()} />
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

export default connect(mapStateToProps, matchDispatchToProps)(App);
