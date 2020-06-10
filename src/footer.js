import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Icon } from "semantic-ui-react";

class Footer extends Component {
  render() {
    return (
      <div className="ui inverted vertical footer segment">
          <div className="ui container">
              <Icon name="copyright outline" />
          Manan Patel
      </div></div>
    );
  }
}

export default Footer;
