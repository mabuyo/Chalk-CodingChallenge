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
      <div>
        <label style={styles.label}> teaching </label>
        <select
          value={this.props.filter}
          onChange={this.handleFilterInput}
          style={styles.select}
        >
          <option value="All" defaultValue>any class</option>
          {this.renderClassOptions()}
        </select>
      </div>
    );
  }
}

const styles = {
  select: {
    WebkitAppearance: "none",
    MozAppearance: "none",
    appearance: "none",
    WebkitBorderRadius: "20px",
    MozBorderRadius: "20px",
    borderRadius: "20px",
    WebkitBoxSizing: "border-box",
    MozBoxSizing: "border-box",
    boxSizing: "border-box",
    fontSize: "14px",
    textIndent: "1px",
    textOverflow: "",
    outline: "none",
    textAlign: "center",
    backgroundColor: "#f2f4fa",
    border: "2px solid #a0ddff",
    padding: "0.5em 3.5em 0.5em 1em",
    background: "url('https://maxcdn.icons8.com/Share/icon/Arrows//expand_arrow1600.png') 85% / 15% no-repeat #fff"
  },
  label: {
    color: "#f2f4fa",
    fontSize: "18px",
    marginLeft: "10px",
    marginRight: "8px"
  }
};

export default FilterInput;
