import React, { Component } from "react";
import { Header, Icon, Progress } from "semantic-ui-react";
import Nav from "./nav";
import Footer from "./footer";
import "./style.css";
// import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

function SoftSkills(props) {
  const skills = props.ss;
  skills.sort(function (a, b) {
    return (
      // a.length - b.length || a.localeCompare(b) //sort by length if equal sort by alphabet
      a.localeCompare(b)  //sort by alphabet
    ); 
  });
  const softskills = skills.map((skill) => (
    <div className="skills-soft-skills-20">
      <Icon name="hand point right" className="skills-point-icon"></Icon>
      <h4 className="skills-soft-title">{skill}</h4>
    </div>
  ));
  return <div className="skills-soft-row">{softskills}</div>;
}

class SKills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      softskills: [
        "Strong Communication Skills",
        "Creative",
        "Critical Thinking",
        "Analytical Thinker",
        "Problem Solver",
        "Mathematical Aptitude",
        "Excellent Organization Skills",
        "Time Management",
        "Multitasking",
        "Detail Oriented",
        "Responsible",
        "Dependable",
        "Highly Motivational",
        "Punctual",
        "Adaptable/Flexible",
        "Big Picture Thinking",
        "Willing to Learn",
        "Team Player",
        "Leader",
        "Excellent Listening Skills",
        "Approachable",
        "Strong Work Ethics",
        "Great Interpersonal Skills",
        "Efficient Working Under Stress",
        "Well Versed With Current & Upcoming Tech Trends",
        "Strong Memory",
        "Empathy",
        "Patience",
        "Quick Dealing With Failures",
        "High Quality of Work"
      ]
    };
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
                    <Icon name="chess" circular />
                    <Header.Content>Welcome To My Arsenal</Header.Content>
                  </Header>
                </div>
              </section>
              <section className="project-card">
                <div className="project-inner-section">
                  <Header as="h1" dividing textAlign="center">
                    Hard Skills
                  </Header>

                  {/* row 1 */}
                  <div className="skills-hard-row">
                    <div className="skills-hard-skills-20">
                      <h4>C</h4>
                      <Progress
                        progress="percent"
                        percent="80"
                        size="small"
                        indicating
                      ></Progress>
                    </div>
                    <div className="skills-hard-skills-20">
                      <h4>C++</h4>
                      <Progress
                        progress="percent"
                        percent="90"
                        size="small"
                        indicating
                      ></Progress>
                    </div>
                    <div className="skills-hard-skills-20">
                      <h4>Java</h4>
                      <Progress
                        progress="percent"
                        percent="70"
                        size="small"
                        indicating
                      ></Progress>
                    </div>
                    <div className="skills-hard-skills-20">
                      <h4>PL/SQL</h4>
                      <Progress
                        progress="percent"
                        percent="100"
                        size="small"
                        indicating
                      ></Progress>
                    </div>
                    <div className="skills-hard-skills-20">
                      <h4>JavaScript</h4>
                      <Progress
                        progress="percent"
                        percent="90"
                        size="small"
                        indicating
                      ></Progress>
                    </div>
                  </div>

                  {/* row 2 */}
                  <div className="skills-hard-row">
                    <div className="skills-hard-skills-20">
                      <h4>TypeScript</h4>
                      <Progress
                        progress="percent"
                        percent="95"
                        size="small"
                        indicating
                      ></Progress>
                    </div>
                    <div className="skills-hard-skills-20">
                      <h4>HTML</h4>
                      <Progress
                        progress="percent"
                        percent="100"
                        size="small"
                        indicating
                      ></Progress>
                    </div>
                    <div className="skills-hard-skills-20">
                      <h4>CSS</h4>
                      <Progress
                        progress="percent"
                        percent="100"
                        size="small"
                        indicating
                      ></Progress>
                    </div>
                    <div className="skills-hard-skills-20">
                      <h4>Angular</h4>
                      <Progress
                        progress="percent"
                        percent="90"
                        size="small"
                        indicating
                      ></Progress>
                    </div>

                    <div className="skills-hard-skills-20">
                      <h4>ReactJS</h4>
                      <Progress
                        progress="percent"
                        percent="95"
                        size="small"
                        indicating
                      ></Progress>
                    </div>
                  </div>

                  {/* row 3 */}
                  <div className="skills-hard-row">
                    <div className="skills-hard-skills-20">
                      <h4>NodeJS</h4>
                      <Progress
                        progress="percent"
                        percent="90"
                        size="small"
                        indicating
                      ></Progress>
                    </div>
                    <div className="skills-hard-skills-20">
                      <h4>ExpressJS</h4>
                      <Progress
                        progress="percent"
                        percent="85"
                        size="small"
                        indicating
                      ></Progress>
                    </div>
                    <div className="skills-hard-skills-20">
                      <h4>Android Studios</h4>
                      <Progress
                        progress="percent"
                        percent="90"
                        size="small"
                        indicating
                      ></Progress>
                    </div>

                    <div className="skills-hard-skills-20">
                      <h4>MongoDB</h4>
                      <Progress
                        progress="percent"
                        percent="100"
                        size="small"
                        indicating
                      ></Progress>
                    </div>
                    <div className="skills-hard-skills-20">
                      <h4>SQLite</h4>
                      <Progress
                        progress="percent"
                        percent="100"
                        size="small"
                        indicating
                      ></Progress>
                    </div>
                  </div>

                  {/* row 4 */}
                  <div className="skills-hard-row">
                    <div className="skills-hard-skills-20">
                      <h4>PostgreSQL</h4>
                      <Progress
                        progress="percent"
                        percent="80"
                        size="small"
                        indicating
                      ></Progress>
                    </div>
                    <div className="skills-hard-skills-20">
                      <h4>SQL Server</h4>
                      <Progress
                        progress="percent"
                        percent="100"
                        size="small"
                        indicating
                      ></Progress>
                    </div>
                    <div className="skills-hard-skills-20">
                      <h4>MySQL</h4>
                      <Progress
                        progress="percent"
                        percent="100"
                        size="small"
                        indicating
                      ></Progress>
                    </div>

                    <div className="skills-hard-skills-20">
                      <h4>Git Version Control</h4>
                      <Progress
                        progress="percent"
                        percent="80"
                        size="small"
                        indicating
                      ></Progress>
                    </div>
                    <div className="skills-hard-skills-20">
                      <h4>Agile Programming</h4>
                      <Progress
                        progress="percent"
                        percent="90"
                        size="small"
                        indicating
                      ></Progress>
                    </div>
                  </div>

                  {/* row 5 */}
                  <div className="skills-hard-row">
                    <div className="skills-hard-skills-20">
                      <h4>Restful APIs</h4>
                      <Progress
                        progress="percent"
                        percent="85"
                        size="small"
                        indicating
                      ></Progress>
                    </div>
                    <div className="skills-hard-skills-20">
                      <h4>AJAX</h4>
                      <Progress
                        progress="percent"
                        percent="80"
                        size="small"
                        indicating
                      ></Progress>
                    </div>
                    <div className="skills-hard-skills-20">
                      <h4>JSON</h4>
                      <Progress
                        progress="percent"
                        percent="100"
                        size="small"
                        indicating
                      ></Progress>
                    </div>

                    <div className="skills-hard-skills-20">
                      <h4>Linux</h4>
                      <Progress
                        progress="percent"
                        percent="90"
                        size="small"
                        indicating
                      ></Progress>
                    </div>
                    <div className="skills-hard-skills-20">
                      <h4>Unix</h4>
                      <Progress
                        progress="percent"
                        percent="90"
                        size="small"
                        indicating
                      ></Progress>
                    </div>
                  </div>

                  {/* row 6 */}
                  <div className="skills-hard-row">
                    <div className="skills-hard-skills-20">
                      <h4>Arduino</h4>
                      <Progress
                        progress="percent"
                        percent="100"
                        size="small"
                        indicating
                      ></Progress>
                    </div>
                    <div className="skills-hard-skills-20">
                      <h4>VEX Programming</h4>
                      <Progress
                        progress="percent"
                        percent="75"
                        size="small"
                        indicating
                      ></Progress>
                    </div>
                    <div className="skills-hard-skills-20">
                      <h4>UI/UX Design</h4>
                      <Progress
                        progress="percent"
                        percent="90"
                        size="small"
                        indicating
                      ></Progress>
                    </div>
                    <div className="skills-hard-skills-20">
                      <h4>Docker</h4>
                      <Progress
                        progress="percent"
                        percent="70"
                        size="small"
                        indicating
                      ></Progress>
                    </div>
                    <div className="skills-hard-skills-20">
                      <h4>Travis CI</h4>
                      <Progress
                        progress="percent"
                        percent="70"
                        size="small"
                        indicating
                      ></Progress>
                    </div>
                  </div>
                </div>
              </section>

              {/* soft skills */}
              <section className="project-card black">
                <div className="project-inner-section">
                  <Header as="h1" dividing inverted textAlign="center">
                    Soft Skills
                  </Header>

                  <div className="skills-extra-padding-top">
                    <SoftSkills ss={this.state.softskills}></SoftSkills>
                  </div>
                </div>
                {/* </div> */}
              </section>
            </div>
          </div>
        </CSSTransition>
        <Footer />
      </div>
    );
  }
}

export default SKills;
