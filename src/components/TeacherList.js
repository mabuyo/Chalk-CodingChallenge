import React, { Component } from "react";

class TeacherList extends Component {
  constructor(props) {
    super(props);
    this.state = { teachers: [] };
  }

  componentWillMount() {
    this.getTeachers();
  }

  getTeachers() {
    const url = "https://cdn.chalk.com/misc/sample_teachers.json";
    fetch(url)
      .then(result => result.json())
      .then(result => this.setState({ teachers: result }));
  }

  renderTeachersListItems() {
    return this.state.teachers.map(teacher => (
      <li key={teacher.id}>{teacher.first_name} {teacher.last_name}</li>
    ));
  }

  render() {
    return (
      <div style={styles.listContainer}>
        <ul>{this.renderTeachersListItems()}</ul>
      </div>
    );
  }
}

const styles = {
  listContainer: {
    backgroundColor: "#78B3F3",
    width: "80%",
    marginTop: "20px",
    borderRadius: "5px"
  }
};

export default TeacherList;
