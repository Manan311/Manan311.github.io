import React, { Component } from "react";
import { Header, Icon, Image } from "semantic-ui-react";
import Nav from "./nav";
import Footer from "./footer";
import "./style.css";
import { CSSTransition } from "react-transition-group";
import image1 from "./image/software_developer.jpg";
import image2 from "./image/seneca.png";
// import image3 from "./image/hello_world.jpg";
import image4 from "./image/coffee&travel.jpg";

//Funtional Component Text
function TextSection1(props) {
  return (
    <div className="ani1">
      Hello! My name is Manan and I am a 4th year Bachelor of Software
      Development student currently studying at Seneca College. I am a new
      challenger in the software development world whose passion started with a
      heavy fascination of problem solving. Finding multiple ways to solve the
      same problem has always been a hobby of mine. This passion transitioned
      into the world of software development. In order to make a piece of
      hardware work, it requires the necessary software.
    </div>
  );
}

function TextSection2(props) {
  return (
    <div className="ani1">
      Seneca has provided me with theoretical and hands-on experience which has
      lead me to creating quite complex applications. These applications range
      from the simplest “Hello World!” to full-stack websites. Not only that but
      Seneca has also provided me with the knowledge and expertise of developing
      projects in many languages and framework in a team environment using git
      version control. As well as theory in many important concepts of
      programming such as object oriented principles, data patterns, networking,
      database, system analysis and design to name a few.
    </div>
  );
}

// function TextSection3(props) {
//   return (
//     <div className="ani1">
//       The programming languages I love working with are C++, JavaScript,
//       TypeScript, HTML/CSS and PL/SQL. I am also familliar and able to work with
//       C, Java. I have experience working with Angular, ReactJS, NodeJS,
//       ExpressJS, Android and React Native frameworks. My go to database are
//       MongoDB and SQLite but I have also worked with PostgreSQL, SQL Server and
//       MySQL. Git is the version control system I worked with when I have
//       collaborative projects. Other techniques I am familiar with are Agile
//       programing, RESTFUL APIs, Asynchronous JavaScript and XML(AJAX) and
//       JavaScript Object Notation(JSON). I am also able to work with Linux
//       distros, Unix shell and Windows command prompt. Prefrences going to Linux
//       and Unix based systemes.
//     </div>
//   );
// }

function TextSection4(props) {
  return (
    <div className="ani1">
      For me, the morning only starts with a fresh cup of coffee. Besides being
      a huge coffee lover, I play badminton or table tennis almost every
      weekend. My other hobbies include travelling. My goal is to travel the
      world when I am about to retire. I want to learn about all the cultures,
      customs and foods the world has to offer. But right now, I make do with
      long road trips across Ontario and exploring the beauty this province has
      to offer. I also love going to down town and finding new cafes to try
      different types of coffee.
    </div>
  );
}

//Functional Component Pictures
function PictureSection1(props) {
  return (
    <div className="ani2">
      <Image src={image1} alt="image1" />
    </div>
  );
}

function PictureSection2(props) {
  return (
    <div className="ani2">
      <Image src={image2} rounded bordered alt="image2" />
    </div>
  );
}

// function PictureSection3(props) {
//   return (
//     <div className="ani2 b">
//       <Image src={image3} alt="image3" />
//     </div>
//   );
// }

function PictureSection4(props) {
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
                  <TextSection1 />
                </div>
                <div className="middle">
                  <PictureSection1 />
                </div>
              </section>

              {/* section 3, seneca text and pic*/}
              <section className="about-card black">
                <div className="middle">
                  <PictureSection2 />
                </div>
                <div className="middle">
                  <TextSection2 />
                </div>
              </section>

              {/* section 4, tech skills, hello world text and pic*/}
              {/* Commented out because i want to change this to be more personal then a resume */}
              {/* <section className="about-card">
                <div className="middle">
                  <TextSection3 />
                </div>
                <div className="middle">
                  <PictureSection3 />
                </div>
              </section> */}

              {/* section 5, coffe and travel text and pic*/}
              <section className="about-card">
                <div className="middle">
                  <TextSection4 />
                </div>
                <div className="middle">
                  <PictureSection4 />
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
