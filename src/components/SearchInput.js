import React, { Component } from "react";
import FaSearch from "react-icons/lib/fa/search";

class SearchInput extends Component {
  constructor(props) {
    super(props);

    this.handleSearchTextInput = this.handleSearchTextInput.bind(this);
  }

  handleSearchTextInput(event) {
    this.props.handleSearchTextInput(event.target.value);
  }

  render() {
    return (
      <input
        style={styles.search}
        placeholder="Search using first or last name..."
        value={this.props.searchText}
        onChange={this.handleSearchTextInput}
      />
    );
  }
}

const styles = {
  search: {
    padding: "20px",
    border: "2px solid blue",
    fontSize: "20px",
    width: "80%",
    borderRadius: "10px",
    outline: "none"
  },
  searchIcon: {
    fontSize: "30px",
    paddingRight: "10px"
  }
};

export default SearchInput;
