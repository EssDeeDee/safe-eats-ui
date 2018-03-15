import React, { Component } from 'react'
import SearchBar from './components/searchBar';
import LocationBar from './components/locationBar';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import assign from 'lodash/assign';
const SearchActions = require('../../actions/searchActions');
function mapStateToProps(state) {
  return {
    search: state.search
  }
}

function mapDispatchToProps(dispatch) {
  return {
    searchActions: bindActionCreators(assign({}, SearchActions), dispatch)
  }
}

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ""
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.searchActions.initiateSearch(this.state.searchValue);
  }
  
  handleChange(e) {
    this.setState({searchValue: e.target.value});
  }

  render() {
    return (
      <div>
        <SearchBar
          searchValue={this.state.searchValue}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <LocationBar/>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)
