import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Card, Image, Header, Icon, Button, Label } from "semantic-ui-react";
import { Player } from "video-react";
import Nav from "./nav";
import Footer from "./footer";
import "./style.css";
import { CSSTransition } from "react-transition-group";
import Dictionary from "./image/Dictionary.png";
import VRoomManager from "./image/vroommanager.png";
import Estate from "./image/Estate.png";
import ContactManager from "./videos/C_Contant_Management_System.mp4";
import AssemblyLine from "./videos/C++_Assembly_Line.mp4";
import ChatSystem from "./videos/TCP_Chat_C++.mp4";

class Projects extends Component {
  state = {
    disabledClicked: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      source: AssemblyLine,
    };

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);

    this.githubDictionaryClick = this.githubDictionaryClick.bind(this);
    this.githubEstateClick = this.githubEstateClick.bind(this);
    this.githubVRoomManagerClick = this.githubVRoomManagerClick.bind(this);
    this.demoDictionaryClick = this.demoDictionaryClick.bind(this);
    this.demoVRoomManagerClick = this.demoVRoomManagerClick.bind(this);
  }

  // play video
  play() {
    this.AssemblyLine.play();
  }

  pause() {
    this.player.pause();
  }

  // github
  githubEstateClick() {
    this.setState({ disabledClicked: true });

    setTimeout(() => {
      this.setState({ disabledClicked: false });
    }, 3000);
  }

  githubDictionaryClick() {
    window.open("https://github.com/Manan311/The_Dictionary", "blank");
  }

  githubVRoomManagerClick() {
    window.open("https://github.com/Manan311/VRoomManager", "blank");
  }

  //demos
  demoDictionaryClick() {
    window.open(
      "https://warm-reaches-18977.herokuapp.com/term/english",
      "blank"
    );
  }

  demoVRoomManagerClick() {
    window.open("https://shrouded-refuge-34702.herokuapp.com", "blank");
  }

  render() {
    let disabledGitButton;
    if (this.state.disabledClicked) {
      disabledGitButton = (
        <div>
          <Label basic color="red" pointing="right">
            Private Repository
          </Label>
          <Button
            circular
            onClick={this.githubEstateClick.bind(this)}
            color="github"
            icon="github"
          ></Button>
        </div>
      );
    } else {
      disabledGitButton = (
        <Button
          circular
          onClick={this.githubEstateClick.bind(this)}
          color="github"
          icon="github"
        />
      );
    }

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
              {/* Section 2 */}
              <section className="project-card">
                <div className="project-inner-section project-small">
                  <Card.Group centered itemsPerRow={3}>
                    {/* Estate */}
                    <Card color="red">
                      <Image
                        src={Estate}
                        alt="Estate.png"
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
                          <div className="fright">{disabledGitButton}</div>
                        </Card.Header>
                        <Card.Meta>May, 2019 - Present</Card.Meta>
                        <Card.Description className="project-scrollable-description">
                          Estate is a ReactJS web application that uses
                          speech-to-text technology to render searches. Estate
                          is a modern realtor website compared to it
                          competitors. Estate revolutionizes it's search engine
                          to optimize the search processe to stay upto date with
                          current technology. It has a Node+Express backend and
                          Mongo for database. Future plan is to add features
                          such as user account, saving favourite listings and
                          allowing authorized user to post their own listings.
                        </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <Button negative disabled attached="bottom">
                          Private Repository
                        </Button>
                      </Card.Content>
                    </Card>

                    {/* The Dictionary */}
                    <Card color="red">
                      <Image
                        src={Dictionary}
                        wrapped
                        alt="Dictionary.png"
                        ui={false}
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
                        <Card.Description className="project-scrollable-description">
                          The Dictionary is an Angular web application with
                          Node=Express backend and Mongo for database. It is
                          created for BSD(Bachelor of Software Development)
                          students at Seneca College. It is created for BTI(Web
                          Proggraming) course students specifically but can be
                          developed future with minore changes to cover all the
                          courses in the BSD program. The Dictionary is where
                          students go to find professor approved definitions of
                          technical terminology as well external links to wiki,
                          video and audio for better explanation or examples.
                          Since Seneca harbour alot of student whose speak
                          english as a second language, The Dictionary also has
                          the definition for the terms in different languages.
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

                    {/* VRoomManager */}
                    <Card color="red">
                      <Image
                        src={VRoomManager}
                        alt="VRoomManager.png"
                        wrapped
                        ui={false}
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
                        <Card.Meta>January, 2020</Card.Meta>
                        <Card.Description className="project-scrollable-description">
                          VRoomManager is a simple ReactJS frontend and
                          Node+Express backend car management web application
                          for dealerships. It allows dealerships to enter the
                          cars they have in their store to the MongoDB database
                          and then once the car is sold, a dealer can edit it to
                          update purchase information.
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

              {/* Section 3 */}
              <section className="project-card black">
                <div className="project-inner-section project-small">
                  <Card.Group centered itemsPerRow={3}>
                    {/* Assembly Line */}
                    <Card color="red">
                      <Player>
                        <source src={AssemblyLine}></source>
                      </Player>
                      <Card.Content content="red">
                        <Card.Header>
                          Assembly Line
                          <div className="fright">
                            <Button
                              circular
                              onClick={this.githubDictionaryClick.bind(this)}
                              color="github"
                              icon="github"
                              disabled
                            />
                          </div>
                        </Card.Header>
                        <Card.Meta>November, 2019</Card.Meta>
                        <Card.Description className="project-scrollable-description-2">
                          Assembly Line is a C++, object-oriented application.
                          It emphasizes on class relationships; inheritance,
                          inclusion polymorphism, templates, composition,
                          aggregation and association. Other concepts that are
                          incorporated in creating this application are member
                          functions and operators aswell as helper functions,
                          overloading operators and functions, lamda expression,
                          pointers, refrences, arrays, error handeling and
                          working with file and file streams. Assembly line is a
                          manufacring process where orders for CPU, memory, GPU,
                          SSD and power supply are filled.
                        </Card.Description>
                      </Card.Content>
                    </Card>

                    {/* Chat System */}
                    <Card color="red">
                      <Player>
                        <source src={ChatSystem}></source>
                      </Player>
                      <Card.Content content="red">
                        <Card.Header>
                          Chat System
                          <div className="fright">
                            <Button
                              circular
                              onClick={this.githubVRoomManagerClick.bind(this)}
                              color="github"
                              icon="github"
                              disabled
                            />
                          </div>{" "}
                        </Card.Header>
                        <Card.Meta>April, 2019</Card.Meta>
                        <Card.Description className="project-scrollable-description-2">
                          Chat System is a TCP/IP communication application. It
                          allows multiple clients to connect to the server and
                          communicate between the clients but for this case
                          limit is 2. The client and server application both
                          create 2 sockets each. Server creates the first one to
                          recieve from the clients and is listening all the time
                          and the second on to broadcast to all the clients
                          connected to the server. The Client creates the first
                          socket to recieve from the sever and the second one to
                          send to the server. All the communication is done
                          using the local IP(127.0.01) and TCP Port(27001).
                        </Card.Description>
                      </Card.Content>
                    </Card>

                    {/* Contact Manager */}
                    <Card color="red">
                      <Player>
                        <source src={ContactManager}></source>
                      </Player>
                      <Card.Content content="red">
                        <Card.Header>
                          Contact Manager
                          <div className="fright">
                            <Button
                              circular
                              onClick={this.githubDictionaryClick.bind(this)}
                              color="github"
                              icon="github"
                              disabled
                            />
                          </div>                        </Card.Header>
                        <Card.Meta>April, 2018</Card.Meta>
                        <Card.Description className="project-scrollable-description-2">
                          Contact manager is a C built application. It
                          emphasizes on modularization by compartmentalizaing
                          high cohesive and tightly coupled tasks into moduals.
                          It was created using simple computation, expressiong,
                          logic, arrays, structures, pointers, refrences, input
                          and output functions, error handeling and character
                          string. Contaact manager lets users display, add,
                          update and delete contact aswell as search and sort
                          based on cellphone number.
                        </Card.Description>
                      </Card.Content>
                    </Card>
                  </Card.Group>
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
