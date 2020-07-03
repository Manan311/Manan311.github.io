import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Button } from "semantic-ui-react";
import Nav from "./nav";
import Footer from "./footer";
import "./style.css";
import copy from "copy-to-clipboard";
import { CSSTransition } from "react-transition-group";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      emailToCopy: "manan.p296@gmail.com",
      buttonClicked: false,
      emailButtonText: "Email",
    };

    this.handleCopyClick = this.handleCopyClick.bind(this);
    this.setEamilTextButtonBack = this.setEamilTextButtonBack.bind(this);
    this.githubClick = this.githubClick.bind(this);
    this.linkedInClick = this.linkedInClick.bind(this);
  }

  setEamilTextButtonBack() {
    this.setState({ buttonClicked: false, emailButtonText: "Email" });
  }

  githubClick() {
    window.open('http://github.com/Manan311', 'blank');
  }

  linkedInClick() {
    window.open('https://www.linkedin.com/in/patelmanan99/', 'blank');
  }

  handleCopyClick() {
    copy(this.state.emailToCopy);
    this.setState({ buttonClicked: true, emailButtonText: "Email Copied" });
  }

  sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };
  render() {
    let emailButtonText = this.state.emailButtonText;
    if (this.state.buttonClicked) {
      setTimeout(() => {
        this.setEamilTextButtonBack();
      }, 2000);
    }

    return (
      <div>
        <Nav />
        <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
          <div className="home-body">
            <div className="home-center">
              <h1 as="h1" className="inverted huge">
                Hello, I am Manan
              </h1>
              <h4 className="inverted">
                Forth Year Software Developer Student
              </h4>
              <br />
              <div className="home-icons-in-line">
              <Button
                  icon="linkedin square"
                  color="blue"
                  size="mini"
                  circular
                  onClick={this.linkedInClick}
                ></Button>
                Linkedin
              </div>
              <div className="home-icons-in-line">
              <Button
                  icon="github"
                  size="mini"
                  circular
                  onClick={this.githubClick}
                ></Button>
                Github
              </div>
              <div className="home-icons-in-line">
                <Button
                  icon="mail outline"
                  size="mini"
                  circular
                  color="blue"
                  onClick={this.handleCopyClick}
                ></Button>
                {emailButtonText}
              </div>
            </div>
          </div>
        </CSSTransition>
        <Footer />
      </div>
    );
  }
}

export default Home;
