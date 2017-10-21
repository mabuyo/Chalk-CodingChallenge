import React, { Component } from "react";
import SearchInput from "./components/SearchInput";
import TeacherList from "./components/TeacherList";
import FilterInput from "./components/FilterInput";
import ScrollToTop from "react-scroll-up";
import FaCaretSquareOUp from "react-icons/lib/fa/caret-square-o-up";

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
        <div style={styles.background}>
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
        </div>

        <TeacherList
          teachers={this.state.teachers}
          searchText={this.state.searchText}
          filter={this.state.filter}
        />

        <ScrollToTop showUnder={160}>
          <div style={styles.backToTopButton}>
            <FaCaretSquareOUp style={{ fontSize: "20px" }} />
            <span style={{ paddingTop: "5px" }}>Back to Top</span>
          </div>
        </ScrollToTop>

      </div>
    );
  }
}

const styles = {
  app: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C2E9FF"
  },
  background: {
    backgroundColor: "#0A369D",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    boxShadow: "0px 1px 1px #0A369D"
  },
  header: {
    display: "flex",
    width: "80vw",
    height: "150px",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: "20px",
    paddingRight: "20px",
    flexWrap: "wrap"
  },
  backToTopButton: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#0A369D",
    padding: "10px",
    borderRadius: "10px",
    color: "#fff",
    boxShadow: "2px 2px 2px #0A369D"
  }
};

export default App;
