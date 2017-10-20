import React, { Component } from "react";

class TeacherListItem extends Component {
  constructor(props) {
    super(props);
    this.state = { showDetails: false };
  }

  renderAvatar() {
    const { avatar, first_name } = this.props.teacher;
    if (avatar) {
      return <img src={avatar} alt={first_name} style={styles.avatar} />;
    } else {
      return (
        <img
          src={require("../assets/placeholder.png")}
          alt={first_name}
          style={styles.avatar}
        />
      );
    }
  }

  renderClasses() {
    if (this.props.teacher.classes) {
      return this.props.teacher.classes.map((c, index) => (
        <li key={index}>{c.class}</li>
      ));
    }
  }

  onItemClick() {
    console.log("clicked");
    if (this.state.showDetails) {
      this.setState({ showDetails: false });
    } else {
      this.setState({ showDetails: true });
    }
  }

  showResults() {
    if (this.state.showDetails === true) {
      const { id } = this.props.teacher;
      return (
        <div style={styles.teacherDetails} id={`${id}-details`}>
          <p>{id}</p>
          <h2>Classes</h2>
          <ul>
            {this.renderClasses()}
          </ul>
        </div>
      );
    }
  }

  render() {
    const {
      id,
      first_name,
      last_name,
      avatar,
      email,
      classes
    } = this.props.teacher;
    return (
      <div style={styles.itemContainer} onClick={this.onItemClick.bind(this)}>

        <div style={styles.teacherBasicProfile}>
          {this.renderAvatar()}
          <div style={styles.teacherInfo}>
            <p>{first_name} {last_name}</p>
            <p>{email}</p>
          </div>
        </div>

        {this.showResults()}

      </div>
    );
  }
}

const styles = {
  itemContainer: {
    padding: "10px",
    borderBottom: "1px solid grey",
    display: "flex",
    flexDirection: "column"
  },
  teacherBasicProfile: {
    display: "flex",
    flexDirection: "row"
  },
  avatar: {
    borderRadius: "50%",
    border: "2px solid #2E7EF8",
    width: "100px",
    height: "100px",
    backgroundColor: "#FFF"
  },
  teacherInfo: {
    paddingLeft: "10px",
    flexDirection: "column"
  },
  teacherDetails: {
    flexDirection: "column"
  },
  hidden: {
    display: "none"
  },
  shown: {
    display: "flex"
  }
};

export default TeacherListItem;
