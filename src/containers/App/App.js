// react
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// components & containers
import AppBar from "../../components/App/AppBar";
import MainRouter from "./MainRouter";

// services
import { searchSuggest } from "../../actions/search";

class App extends Component {
  render() {
    return (
      <div>
        <AppBar
          searchSuggest={() => this.props.searchSuggest()}
          searchSuggestions={this.props.searchSuggestions}
        />
        <MainRouter searchSuggestions={this.props.searchSuggestions} />
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
