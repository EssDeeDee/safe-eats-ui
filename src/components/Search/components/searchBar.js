import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
        <form onSubmit={this.props.handleSubmit}>
          <input
            name="Restaurant"
            type="text"
            placeholder="Restaurant"
            onChange={this.props.handleChange}
            value={this.props.searchValue}
          />
        </form>
    )
  }
}

export default SearchBar