import React, { Component } from "react";
import { Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { Card, Image, Header, Icon, Button } from "semantic-ui-react";
import Nav from "./nav";
import Footer from "./footer";
import "./style.css";
import { CSSTransition } from "react-transition-group";
import Dictionary from "./image/Dictionary.png";
import VRoomManager from "./image/vroommanager.png";
import pic from "./image/1.jpg";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.githubDictionaryClick = this.githubDictionaryClick.bind(this);
    this.githubEstateClick = this.githubEstateClick.bind(this);
    this.githubVRoomManagerClick = this.githubVRoomManagerClick.bind(this);
    this.demoDictionaryClick = this.demoDictionaryClick.bind(this);
    this.demoEstateClick = this.demoEstateClick.bind(this);
    this.demoVRoomManagerClick = this.demoVRoomManagerClick.bind(this);
  }

  githubDictionaryClick() {
    window.open("http://github.com/Manan311/The_Dictionary", "blank");
  }

  githubEstateClick() {
    window.open("http://github.com/Manan311", "blank");
  }

  githubVRoomManagerClick() {
    window.open("http://github.com/Manan311/VRoomManager", "blank");
  }

  demoDictionaryClick() {
    window.open("https://warm-reaches-18977.herokuapp.com/term/english", "blank");
  }

  demoEstateClick() {
    window.open("https://google.ca", "blank");
  }

  demoVRoomManagerClick() {
    window.open("https://warm-lowlands-92673.herokuapp.com/cars", "blank");
  }

  render() {
    return (
      <div>
        <Nav />
        <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
          <div className="project-body">
            <div className="project-k">
              <section className="project-card black">
                <div className="about-center">
                  <Header as="h1" icon textAlign="center" inverted>
                    <Icon name="folder" circular />
                    <Header.Content>Welcome To My Workshop</Header.Content>
                  </Header>
                </div>
              </section>

              {/* projects */}
              <section className="project-card">
                <div className="project-inner-section project-small">
                  {/* <Header as="h1" dividing inverted textAlign="center">
                    Dividing Header
                  </Header> */}
                  <Card.Group centered itemsPerRow={3}>
                    <Card color="red">
                      <Image
                        src={Dictionary}
                        wrapped
                        ui={false}
                        label={{
                          color: "red",
                          content: "Developing",
                          icon: "thumbtack",
                          ribbon: true,
                        }}
                      />
                      <Card.Content content="red">
                        <Card.Header>
                          The Dictionary
                          <div className="fright">
                            <Button
                              circular
                              onClick={this.githubDictionaryClick.bind(this)}
                              color="github"
                              icon="github"
                            />
                          </div>
                        </Card.Header>
                        <Card.Meta>March, 2020 - April, 2020</Card.Meta>
                        <Card.Description>
                          The Dictionary is an Angular web application created
                          for BSD(Bachelor of Software Development) students at
                          Seneca College. It is created for BTI course students
                          specifically but can be grown to cover all the courses
                          in the BSD program. The Dictionary is where students
                          go to find the technical terminology for BTI.
                        </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <Button
                          positive
                          onClick={this.demoDictionaryClick.bind(this)}
                          attached="bottom"
                        >
                          View Demo
                        </Button>
                      </Card.Content>
                    </Card>
                    <Card color="red">
                      <Image
                        src={pic}
                        wrapped
                        ui={false}
                        label={{
                          color: "red",
                          content: "Developing",
                          icon: "thumbtack",
                          ribbon: true,
                        }}
                      />
                      <Card.Content content="red">
                        <Card.Header>
                          Estate
                          <div className="fright">
                            <Button
                              circular
                              onClick={this.githubEstateClick.bind(this)}
                              color="github"
                              icon="github"
                            />
                          </div>{" "}
                        </Card.Header>
                        <Card.Meta>Joined in 2016</Card.Meta>
                        <Card.Description>
                          Daniel is a comedian living in Nashville. Daniel is a
                          comedian living in Nashville. Daniel is a comedian
                          living in Nashville. Daniel is a comedian living in
                          Nashville. Daniel is a comedian living in Nashville.
                          Daniel is a comedian living in Nashville.
                        </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <Button
                          positive
                          onClick={this.demoEstateClick.bind(this)}
                          attached="bottom"
                        >
                          View Demo
                        </Button>
                      </Card.Content>
                    </Card>
                    <Card color="red">
                      <Image
                        src={VRoomManager}
                        wrapped
                        ui={false}
                        // label={{
                        //   color: "red",
                        //   content: "Developing",
                        //   icon: "thumbtack",
                        //   ribbon: true,
                        // }}
                      />
                      <Card.Content content="red">
                        <Card.Header>
                          VRoomManager
                          <div className="fright">
                            <Button
                              circular
                              onClick={this.githubVRoomManagerClick.bind(this)}
                              color="github"
                              icon="github"
                            />
                          </div>{" "}
                        </Card.Header>
                        <Card.Meta>January, 2020 - Febuary, 2020</Card.Meta>
                        <Card.Description>
                          VRoomManager is a simple ReactJS car management web
                          application for dealerships. It allows dealerships to
                          enter the cars they have in their store to the MongoDB
                          database and then once the car is sold, a dealer can
                          edit it to update purchase information.
                        </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <Button
                          positive
                          onClick={this.demoVRoomManagerClick.bind(this)}
                          attached="bottom"
                        >
                          View Demo
                        </Button>
                      </Card.Content>
                    </Card>
                  </Card.Group>
                  <Header size="tiny" color="red" textAlign="center">
                    * Both the web-server and web-api are hoisted on a free
                    hosting site called heroku and might take some time to load
                    *
                  </Header>
                </div>
              </section>
            </div>
          </div>
        </CSSTransition>
        <Footer />
      </div>
    );
  }
}

export default Projects;
