import React, { Component } from "react";
import FaAngleDown from "react-icons/lib/fa/angle-down";
import FaAngleUp from "react-icons/lib/fa/angle-up";
import FaEnvelope from "react-icons/lib/fa/envelope";
import FaBook from "react-icons/lib/fa/book";

const CLASS_COLOURS = {
  English: "#E0ACD5",
  French: "#1CCAD8",
  Gym: "#907AD6",
  Math: "#FEC601",
  Science: "#8093F1",
  Socials: "#EA7317"
};

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
        <span
          style={{
            ...styles.classItem,
            backgroundColor: CLASS_COLOURS[c.class]
          }}
          key={index}
        >
          {c.class}
        </span>
      ));
    } else {
      return <span style={{ marginLeft: "5px" }}>No classes.</span>;
    }
  }

  renderDetailsIcon() {
    return this.state.showDetails ? <FaAngleUp /> : <FaAngleDown />;
  }

  onItemClick() {
    if (this.state.showDetails) {
      this.setState({ showDetails: false });
    } else {
      this.setState({ showDetails: true });
    }
  }

  renderDetails() {
    if (this.state.showDetails === true) {
      return (
        <div style={styles.teacherDetails}>
          <div style={styles.classes}>
            <FaBook style={styles.classIcon} /> Teaching:
            {this.renderClasses()}
          </div>
        </div>
      );
    }
  }

  render() {
    const { first_name, last_name, email } = this.props.teacher;
    return (
      <div style={styles.itemContainer}>
        <div
          style={styles.teacherBasicProfile}
          onClick={this.onItemClick.bind(this)}
        >
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

        {this.renderDetails()}

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
    flexDirection: "column",
    paddingTop: "10px"
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
  },
  idIcon: {
    paddingRight: "5px"
  },
  classIcon: {
    paddingRight: "5px",
    fontSize: "1.5em"
  },
  classItem: {
    backgroundColor: "#0a369d",
    borderRadius: "10px",
    padding: "10px",
    margin: "5px",
    color: "#fff"
  },
  classes: {
    marginTop: "8px",
    paddingBottom: "10px",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center"
  }
};

export default TeacherListItem;
