import React, { Component } from "react";

class FilterInput extends Component {
  constructor(props) {
    super(props);
    this.handleFilterInput = this.handleFilterInput.bind(this);

    this.classes = ["French", "Math", "Socials", "Gym", "English", "Science"];
  }

  handleFilterInput(event) {
    this.props.handleFilterInput(event.target.value);
  }

  renderClassOptions() {
    return this.classes.map(c => <option value={c} key={c}>{c}</option>);
  }

  render() {
    return (
      <select value={this.props.filter} onChange={this.handleFilterInput}>
        <option value="All" defaultValue>All</option>
        {this.renderClassOptions()}
      </select>
    );
  }
}

export default FilterInput;
