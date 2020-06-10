import React, { Component } from "react";
import "./style.css";
import { Route } from "react-router-dom";

class Github extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let githubString = "";

    if (this.props.id === "home") {
      githubString = "";
    } else if (this.props.id === "The_Dictionary") {
      githubString = "The_Dictionary";
    } else if (this.props.id === "estate") {
      githubString = "WebNote";
    } else if (this.props.id === "VRoomManager") {
      githubString = "VRoomManager";
    }

    return (
      <Route
        path="/github"
        component={() => {
          window.location.href = `https://github.com/Manan311/${githubString}`;
          return null;
        }}
      />
    );
  }
}

export default Github;
