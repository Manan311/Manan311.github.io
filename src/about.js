import React, { Component } from "react";
import { Header, Icon, Image } from "semantic-ui-react";
import Nav from "./nav";
import Footer from "./footer";
import "./style.css";
import { CSSTransition } from "react-transition-group";
import image1 from "./image/software_developer.jpg";
import image2 from "./image/seneca.png";
import image3 from "./image/hello_world.jpg";
import image4 from "./image/coffee&travel.jpg";

//Funtional Component Text
function SlideRightTextSection1(props) {
  return (
    <div className="ani1">
      I am new challenger entering the software development world. I am a fourth
      year student at Seneca College studying Bachlores of Software Development
      with Honours. Developing softwares started out as a necessity to make my
      hardware work and run properly. After many trials and errors tring to make
      the program run properly I realized how much I love solving problems and
      figuring out multiple way to do the same thing. This lead me to choose a
      career in developing softwares and applications.
    </div>
  );
}

function SlideRightTextSection2(props) {
  return (
    <div className="ani1">
      Seneca has provided me with theoretical and hands-on experience which has
      lead me to creating quite complex applications. These applications range
      from the simplest “Hello World!” to full-stack websites. Not only that but
      Seneca has also provided me with the knowledge and expertise of developing
      projects in many languages and framework in a team environment using git
      version control. As well as theory in many important concepts of
      programming such as data patterns, networking and database to name a few
      of them.
    </div>
  );
}

function SlideRightTextSection3(props) {
  return (
    <div className="ani1">
      The programming languages I love working with are C++, JavaScript,
      TypeScript, HTML/CSS and PL/SQL. I am also familliar and able to work with
      C, Java. I have experience working with Angular, ReactJS, NodeJS,
      ExpressJS, Android and React Native frameworks. My go to database are
      MongoDB and SQLite but I have also worked with PostgreSQL, SQL Server and
      MySQL. Git is the version control system I worked with when I have
      collaborative projects. Other techniques I am familiar with are Agile
      programing, RESTFUL APIs, Asynchronous JavaScript and XML(AJAX) and
      JavaScript Object Notation(JSON). I am also able to work with Linux
      distros, Unix shell and Windows command prompt. Prefrences going to Linux
      and Unix based systemes.
    </div>
  );
}

function SlideRightTextSection4(props) {
  return (
    <div className="ani1">
      I am a coffee lover and a badminton, long and table tennis enthusiast. I
      really enjoy to travel from time to time. Places I like to visit do not
      have to be off in another contry, that would be great but there are so
      many really good places to explore in Ontario, couple hours away from
      Toronto. These places are small but full of life. They have great water
      falls and trails to explore. Just bewear of the bears.
    </div>
  );
}

//Functional Component Pictures
function SlideLeftPictureSection1(props) {
  return (
    <div className="ani2">
      <Image src={image1} alt="image1" />
    </div>
  );
}

function SlideLeftPictureSection2(props) {
  return (
    <div className="ani2">
      <Image src={image2} rounded bordered alt="image2" />
    </div>
  );
}

function SlideLeftPictureSection3(props) {
  return (

    <div className="ani2 b">
      <Image src={image3} alt="image3" />
    </div>
  );
}

function SlideLeftPictureSection4(props) {
  return (
    <div className="ani2">
      <Image src={image4} alt="image4" />
    </div>
  );
}

//Class Component
class About extends Component {
  render() {
    return (
      <div>
        <Nav />
        <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
          <div className="about-body">
            <div className="k">

              {/* section 1 title */}
              <section className="project-card black">
                <div className="about-center">
                  <Header as="h1" icon textAlign="center" inverted>
                    <Icon name="coffee" circular />
                    <Header.Content>Get To Know Me</Header.Content>
                  </Header>
                </div>
              </section>
              
              {/* section 2, challenger and software developer text and pic*/}
              <section className="about-card">
                <div className="middle">
                  <SlideRightTextSection1 />
                </div>
                <div className="middle">
                  <SlideLeftPictureSection1 />
                </div>
              </section>

              {/* section 3, seneca text and pic*/}
              <section className="about-card black">
                <div className="middle">
                  <SlideLeftPictureSection2 />
                </div>
                <div className="middle">
                  <SlideRightTextSection2 />
                </div>
              </section>

              {/* section 4, tech skills, hello world text and pic*/}
              <section className="about-card">
                <div className="middle">
                  <SlideRightTextSection3 />
                </div>
                <div className="middle">
                  <SlideLeftPictureSection3 />
                </div>
              </section>

              {/* section 5, coffe and travel text and pic*/}
              <section className="about-card black">
                <div className="middle">
                  <SlideLeftPictureSection4 />
                </div>
                <div className="middle">
                  <SlideRightTextSection4 />
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

export default About;
