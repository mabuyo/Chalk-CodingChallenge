import React, { Component } from "react";
import Header from "./components/Header";
import TeacherList from "./components/TeacherList";

class App extends Component {
  render() {
    return <div style={styles.app}><Header /><TeacherList /></div>;
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
