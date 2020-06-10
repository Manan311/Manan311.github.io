import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Menu, Segment, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./style.css";
import Resume from "./resume/MananPatel_Resume_&_Cover_Letter.pdf";

class Nav extends Component {

  constructor(props){
    super(props);
    this.onClick= this.onClick.bind(this);
    this.githubClick= this.githubClick.bind(this);
  }

  state = {
    counter: 1,
    buttonState: false,
    downloadText: 'Download Resume',
    activeItem: `${window.location.pathname}`,
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  githubClick() {
    window.open('http://github.com', 'blank');
  }

  onClick(){
    this.setState({ counter: this.state.counter+1 });
    if(this.state.counter > 2){
    this.setState({ buttonState: true, downloadText: "Download Limit Reached"});
    }
  }

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Segment inverted>
          <Menu inverted pointing secondary>
            <Menu.Item
              name="home"
              active={activeItem === "/"}
              onClick={this.handleItemClick}
              as={Link}
              to=""
            >
              <Icon name="home" />
              Home
            </Menu.Item>
            <Menu.Item
              name="about"
              active={activeItem === "/about"}
              onClick={this.handleItemClick}
              as={Link}
              to="about"
            >
              <Icon name="info" />
              About
            </Menu.Item>
            <Menu.Item
              name="skills"
              active={activeItem === "/skills"}
              onClick={this.handleItemClick}
              as={Link}
              to="skills"
            >
              <Icon name="check circle" />
              Skills
            </Menu.Item>
            <Menu.Item
              name="projects"
              active={activeItem === "/projects"}
              onClick={this.handleItemClick}
              as={Link}
              to="projects"
            >
              <Icon name="archive" />
              Projects
            </Menu.Item>
            <Menu.Item
              name="resume"
              active={activeItem === "/resume"}
              onClick={this.handleItemClick}
              as={Link}
              to="resume"
            >
              <Icon name="file alternate outline" />
              Resume
            </Menu.Item>
            <div className="right menu">
              <Menu.Item name="github" onClick={this.githubClick.bind(this)}>
                <Icon name="github" />
                Github
              </Menu.Item>
              <div className={`ui positive button medium ${this.state.buttonState ? "disabled" : ""}`} onClick={this.onClick} >
                <Link
                  to={Resume}
                  target="_blank"
                  download="MananPatel_Resume.pdf"
                >
                {this.state.downloadText}
                </Link>
              </div>
            </div>
          </Menu>
        </Segment>
      </div>
    );
  }
}

export default Nav;
