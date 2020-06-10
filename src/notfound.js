import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import "./style.css";
import { Link } from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
      <div className="center">
        <div className="ui red huge header">404 Page Not Found</div>
        <Link to="/">
          <button class="ui grey button big" link>
            Go Home
          </button>
        </Link>
      </div>
    );
  }
}

export default NotFound;
