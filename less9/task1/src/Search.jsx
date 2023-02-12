import React, { Component } from 'react';

class Search extends Component {
  state = {
    value: '',
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  search = event => {
    event.preventDefault();
    alert(this.state.value);
  };
  render() {
    return (
      <form className="search">
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.value}
          className="search__input"
        />
        <button className="search__button" onClick={this.search} type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default Search;