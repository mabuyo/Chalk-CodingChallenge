import React, { Component } from "react";
import SearchInput from "./components/SearchInput";
import TeacherList from "./components/TeacherList";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { searchText: "", teachers: ["a", "b"] };
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

  render() {
    return (
      <div style={styles.app}>
        <SearchInput
          searchText={this.state.searchText}
          handleSearchTextInput={this.handleSearchTextInput.bind(this)}
        />
        <TeacherList
          teachers={this.state.teachers}
          searchText={this.state.searchText}
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
  }
};

export default App;
