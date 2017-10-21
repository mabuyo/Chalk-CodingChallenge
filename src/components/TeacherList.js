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

  renderTeachersListItems() {
    return this.props.teachers
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
      .map(teacher => {
        const firstNameFound =
          teacher.first_name
            .toLowerCase()
            .search(this.props.searchText.toLowerCase()) !== -1;
        const lastNameFound =
          teacher.last_name
            .toLowerCase()
            .search(this.props.searchText.toLowerCase()) !== -1;
        const emailFound =
          teacher.email
            .toLowerCase()
            .search(this.props.searchText.toLowerCase()) !== -1;

        if (firstNameFound | lastNameFound | emailFound) {
          return <TeacherListItem teacher={teacher} key={teacher.id} />;
        }
        return false;
      });
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
    width: "80%",
    marginTop: "20px",
    borderRadius: "5px"
  }
};

export default TeacherList;
