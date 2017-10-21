import React, { Component } from "react";
import SearchInput from "./components/SearchInput";
import TeacherList from "./components/TeacherList";
import FilterInput from "./components/FilterInput";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { searchText: "", teachers: ["a", "b"], filter: "All" };
  }

  componentWillMount() {
    // const url = "https://cdn.chalk.com/misc/sample_teachers.json";
    // fetch(url)
    //   .then(result => result.json())
    //   .then(result => this.setState({ teachers: result }));
    const data = require("./assets/data.json");
    this.setState({ teachers: data });
  }

  handleSearchTextInput(value) {
    this.setState({ searchText: value });
  }

  handleFilterInput(value) {
    this.setState({ filter: value });
  }

  render() {
    return (
      <div style={styles.app}>
        <div style={styles.header}>
          <SearchInput
            searchText={this.state.searchText}
            handleSearchTextInput={this.handleSearchTextInput.bind(this)}
          />
          <FilterInput
            filter={this.state.filter}
            handleFilterInput={this.handleFilterInput.bind(this)}
          />

        </div>

        <TeacherList
          teachers={this.state.teachers}
          searchText={this.state.searchText}
          filter={this.state.filter}
        />

      </div>
    );
  }
}

const styles = {
  app: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  header: {
    backgroundColor: "#2E7EF8",
    display: "flex",
    width: "100vw",
    height: "150px",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  }
};

export default App;
