import React, { Component } from "react";
import FaAngleDown from "react-icons/lib/fa/angle-down";
import FaAngleUp from "react-icons/lib/fa/angle-up";
import FaEnvelope from "react-icons/lib/fa/envelope";

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

  renderDetailsIcon() {
    return this.state.showDetails ? <FaAngleUp /> : <FaAngleDown />;
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
    const { first_name, last_name, email } = this.props.teacher;
    return (
      <div style={styles.itemContainer} onClick={this.onItemClick.bind(this)}>

        <div style={styles.teacherBasicProfile}>
          {this.renderAvatar()}
          <div style={styles.teacherInfo}>
            <p style={styles.fullName}>{first_name} {last_name}</p>
            <div style={styles.email}>
              <FaEnvelope style={styles.emailIcon} />{email}
            </div>
          </div>
          <div style={styles.detailsIcon}>
            {this.renderDetailsIcon()}
          </div>
        </div>

        {this.showResults()}

      </div>
    );
  }
}

const styles = {
  itemContainer: {
    padding: "15px",
    borderBottom: "2px solid lightgrey",
    display: "flex",
    flexDirection: "column"
  },
  teacherBasicProfile: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  avatar: {
    borderRadius: "50%",
    border: "2px solid #0A369D",
    minWidth: "100px",
    minHeight: "100px",
    maxWidth: "100px",
    maxHeight: "100px",
    backgroundColor: "#FFF"
  },
  teacherInfo: {
    paddingLeft: "15px",
    flexDirection: "column",
    flex: 1
  },
  teacherDetails: {
    flexDirection: "column"
  },
  fullName: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px"
  },
  email: {
    marginTop: 0,
    color: "#4c4c4c"
  },
  emailIcon: {
    paddingRight: "5px",
    fontSize: "0.8em"
  },
  detailsIcon: {
    fontSize: "30px",
    alignSelf: "center",
    color: "#0A369D"
  }
};

export default TeacherListItem;
