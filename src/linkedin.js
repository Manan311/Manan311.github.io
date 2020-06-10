import React, { Component } from "react";
import "./style.css";
import { Route } from "react-router-dom";

class LinkedIn extends Component {
  render() {
    return (
<Route path='/linkedin' component={() => { 
     window.location.href = 'https://www.linkedin.com/in/patelmanan99/'; 
     return null;
}}/>
    );
  }
}

export default LinkedIn;
