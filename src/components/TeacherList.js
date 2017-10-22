import React, { Component } from "react";
import TeacherListItem from "./TeacherListItem";

class TeacherList extends Component {
  constructor(props) {
    super(props);

    this.teacherClassList = {}; // {id: [classes]}
  }

  componentWillMount() {
    this.buildTeacherClassList();
  }

  buildTeacherClassList() {
    const teachers = this.props.teachers;
    for (const i in teachers) {
      var classes = [];
      if (teachers[i].classes) {
        classes = teachers[i].classes.map(c => c.class);
      }
      this.teacherClassList[teachers[i].id] = classes;
    }
  }

  // filter by class then filter using search text
  renderTeachersListItems() {
    const teachersToDisplay = this.props.teachers
      .filter(teacher => {
        const classFilter = this.props.filter;
        if (classFilter === "All") {
          return true;
        } else if (teacher.classes) {
          const id = teacher.id;
          return this.teacherClassList[id].indexOf(classFilter) !== -1;
        }
        return false;
      })
      .filter(teacher => {
        const firstNameFound =
          teacher.first_name
            .toLowerCase()
            .indexOf(this.props.searchText.toLowerCase()) !== -1;
        const lastNameFound =
          teacher.last_name
            .toLowerCase()
            .indexOf(this.props.searchText.toLowerCase()) !== -1;
        const emailFound =
          teacher.email
            .toLowerCase()
            .indexOf(this.props.searchText.toLowerCase()) !== -1;

        return firstNameFound | lastNameFound | emailFound;
      });

    if (teachersToDisplay.length !== 0) {
      return teachersToDisplay.map(teacher => (
        <TeacherListItem teacher={teacher} key={teacher.id} />
      ));
    } else {
      return <p style={styles.noResultsText}>No teachers to display.</p>;
    }
  }

  render() {
    return (
      <div style={styles.listContainer}>
        {this.renderTeachersListItems()}
      </div>
    );
  }
}

const styles = {
  listContainer: {
    backgroundColor: "#FFF",
    width: "70%",
    marginTop: "20px",
    borderRadius: "5px",
    marginBottom: "50px"
  },
  noResultsText: {
    paddingLeft: "10px",
    textAlign: "center"
  }
};

export default TeacherList;
