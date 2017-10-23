import React, { Component } from "react";
import SearchInput from "./components/SearchInput";
import TeacherList from "./components/TeacherList";
import FilterInput from "./components/FilterInput";
import ScrollToTop from "react-scroll-up";
import FaCaretSquareOUp from "react-icons/lib/fa/caret-square-o-up";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { searchText: "", teachers: [], filter: "All" };
  }

  componentWillMount() {
    const url = "https://cdn.chalk.com/misc/sample_teachers.json";
    fetch(url)
      .then(result => result.json())
      .then(result => this.setState({ teachers: result }));

    // uncomment to use local data
    // const data = require("./assets/data.json");
    // this.setState({ teachers: data });
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
    backgroundColor: "#26D0CE"
  },
  background: {
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    background: " #1A2980" /* fallback for old browsers */,
    background: "-webkit-linear-gradient(to top,#26D0CE, #1A2980)" /* Chrome 10-25, Safari 5.1-6 */,
    background: "linear-gradient(to top, #26D0CE, #1A2980)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
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
