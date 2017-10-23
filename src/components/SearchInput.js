import React, { Component } from "react";

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
        placeholder="Search using name or email..."
        value={this.props.searchText}
        onChange={this.handleSearchTextInput}
      />
    );
  }
}

const styles = {
  search: {
    flex: 1,
    padding: "10px",
    border: "2px solid #a0ddff",
    fontSize: "18px",
    borderRadius: "10px",
    outline: "none",
    marginBottom: "10px",
    textOverflow: "ellipsis"
  },
  searchIcon: {
    fontSize: "30px",
    paddingRight: "10px"
  }
};

export default SearchInput;
