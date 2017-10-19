import React from "react";
import SearchInput from "./SearchInput";

const Header = () => {
  return <div style={styles.header}><SearchInput /></div>;
};

const styles = {
  header: {
    backgroundColor: "#2E7EF8",
    display: "flex",
    flex: 1,
    width: "100%",
    height: "100px",
    alignItems: "center",
    justifyContent: "center"
  }
};

export default Header;
