import React, { Component } from "react";
import TeacherListItem from "./TeacherListItem";

class TeacherList extends Component {
  constructor(props) {
    super(props);
  }

  renderTeachersListItems() {
    return this.props.teachers.map(teacher => {
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
    backgroundColor: "#78B3F3",
    width: "80%",
    marginTop: "20px",
    borderRadius: "5px"
  }
};

export default TeacherList;
