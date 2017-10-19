import React, { Component } from "react";

class TeacherList extends Component {
  render() {
    return (
      <div style={styles.listContainer}>
        <ul>
          <li>Teacher</li>
          <li>Teacher</li>
          <li>Teacher</li>
          <li>Teacher</li>
          <li>Teacher</li>
          <li>Teacher</li>
          <li>Teacher</li>
        </ul>
      </div>
    );
  }
}

const styles = {
  listContainer: {
    backgroundColor: "blue",
    width: "80%",
    marginTop: "20px",
    borderRadius: "5px"
  }
};

export default TeacherList;
