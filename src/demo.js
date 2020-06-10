import React, { Component } from "react";
import "./style.css";
import { Route } from "react-router-dom";

class Github extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let demoString = "";
    if (this.props.id === "0") {
        demoString = "https://warm-reaches-18977.herokuapp.com/home"
    } else if (this.props.id === "1") {
        demoString = "https://google.ca" 
    } else if (this.props.id === "2") {
         demoString = "https://warm-lowlands-92673.herokuapp.com"
    }

    return (
      <Route
        path="/demo"
        component={() => {
          window.location.href = `${demoString}`;
          return null;
        }}
      />
    );
  }
}

export default Github;
