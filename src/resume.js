import React, { Component } from "react";
import { Icon } from "semantic-ui-react";
import Nav from "./nav";
import Footer from "./footer";
import "./style.css";
import { CSSTransition } from "react-transition-group";

class Resume extends Component {
  render() {
    return (
      <div>
        <Nav />
        <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
          <div className="resume_main_div">
            <table className="resume_table">
              <tbody>
                {/* header */}
                <tr className="resume_header">
                  <td className="resume_margin_logo"></td>
                  <td className="resume_page black">
                    <h1 className="resume_header_name">Manan Patel</h1>
                    <div className="resume_header_personal_info">
                      <div className="resume_header_lacation">
                        <div className="home-icons-in-line res_icon">
                          <Icon name="home"></Icon>
                        </div>
                        <div className="resume_header_icon_description">
                          Brampton, Ontario
                        </div>
                      </div>
                      <div className="resume_header_contact">
                        <div className="home-icons-in-line res_icon">
                          <Icon inverted name="phone"></Icon>
                        </div>
                        <div className="resume_header_icon_description">
                          (647) 230-1357
                        </div>
                        <div className="home-icons-in-line res_icon">
                          <Icon inverted name="mail"></Icon>
                        </div>
                        <div className="resume_header_icon_description">
                          manan.p296@gmail.com
                        </div>
                        <div className="home-icons-in-line res_icon">
                          <Icon inverted name="github"></Icon>
                        </div>
                        <div className="resume_header_icon_description">
                          https://github.com/Manan311
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>

                {/* Goal */}
                <tr className="resume_goal">
                  <td className="resume_margin">Goal</td>
                  <td className="resume_page">
                    <p>
                      To Secure Co-op placement starting of fall 2020 for a role
                      related to software development.
                    </p>
                  </td>
                </tr>

                {/* Objective */}
                <tr className="resume_objective">
                  <td className="resume_margin">Objective</td>
                  <td className="resume_page">
                    <p>
                      An aspiring fourth-year student at Seneca College,
                      currently studying Software Development with Honours, who
                      is actively looking for opportunities, such as coop, to
                      add considerable work experience to his portfolio. In
                      addition to the work experience, it is also planned to
                      complete a Master’s in Software Engineering.
                    </p>
                  </td>
                </tr>

                {/* Qualification */}
                <tr className="resume_qualification">
                  <td className="resume_margin">Highlight of Qualification</td>
                  <td className="resume_page">
                    <table className="resume_qualification_table">
                      <tbody className="resume_qualification_table_body">
                        <tr className="resume_qualification_table_row">
                          <td className="resume_qualification_cell_icon">
                            <Icon name="hand point right"></Icon>
                          </td>
                          <td className="resume_qualification_cell_word">
                            Communicate effectively
                          </td>
                          <td className="resume_qualification_cell_icon">
                            <Icon name="hand point right"></Icon>
                          </td>
                          <td className="resume_qualification_cell_word">
                            Responsible and dependable
                          </td>
                          <td className="resume_qualification_cell_icon">
                            <Icon name="hand point right"></Icon>
                          </td>
                          <td className="resume_qualification_cell_word">
                            Excellent performance in the sciences
                          </td>
                        </tr>
                        <tr className="resume_qualification_table_row">
                          <td className="resume_qualification_cell_icon">
                            <Icon name="hand point right"></Icon>
                          </td>
                          <td className="resume_qualification_cell_word">
                            Problem solver, strong critical-thinking skills
                          </td>
                          <td className="resume_qualification_cell_icon">
                            <Icon name="hand point right"></Icon>
                          </td>
                          <td className="resume_qualification_cell_word">
                            Efficient in multitasking
                          </td>
                          <td className="resume_qualification_cell_icon">
                            <Icon name="hand point right"></Icon>
                          </td>
                          <td className="resume_qualification_cell_word">
                            Works well under stress
                          </td>
                        </tr>
                        <tr className="resume_qualification_table_row">
                          <td className="resume_qualification_cell_icon">
                            <Icon name="hand point right"></Icon>
                          </td>
                          <td className="resume_qualification_cell_word">
                            Team player
                          </td>
                          <td className="resume_qualification_cell_icon">
                            <Icon name="hand point right"></Icon>
                          </td>
                          <td className="resume_qualification_cell_word">
                            Well-versed with current and upcoming tech trends
                          </td>
                          <td className="resume_qualification_cell_icon">
                            <Icon name="hand point right"></Icon>
                          </td>
                          <td className="resume_qualification_cell_word">
                            Highly motivated
                          </td>
                        </tr>
                        <tr className="resume_qualification_table_row">
                          <td className="resume_qualification_cell_icon">
                            <Icon name="hand point right"></Icon>
                          </td>
                          <td className="resume_qualification_cell_word">
                            Detail oriented
                          </td>
                          <td className="resume_qualification_cell_icon">
                            <Icon name="hand point right"></Icon>
                          </td>
                          <td className="resume_qualification_cell_word">
                            Creative
                          </td>
                          <td className="resume_qualification_cell_icon">
                            <Icon name="hand point right"></Icon>
                          </td>
                          <td className="resume_qualification_cell_word">
                            Punctual
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                {/* Technical Skills */}
                <tr className="resume_skills">
                  <td className="resume_margin">Technical Skills</td>
                  <td className="resume_page">
                    <p>Efficient and knowledgeable working with:</p>
                    <table className="resume_skills_table">
                      <tbody className="resume_skills_table_body">
                        <tr className="resume_skills_table_row_1">
                          <th className="resume_skills_table_cell_header">
                            Programming Languages:
                          </th>
                          <td className="resume_skills_table_cell_description">
                            C, C++, Java, PL/SQL, JavaScript, TypeScript,
                            HTML/CSS
                          </td>
                        </tr>
                        <tr className="resume_skills_table_row_2">
                          <th className="resume_skills_table_cell_header">
                            Frameworks:
                          </th>
                          <td className="resume_skills_table_cell_description">
                            Angular, ReactJS, React Native, NodeJS, ExpressJS,
                            JQuery, Android
                          </td>
                        </tr>
                        <tr className="resume_skills_table_row_3">
                          <th className="resume_skills_table_cell_header">
                            Databases:
                          </th>
                          <td className="resume_skills_table_cell_description">
                            MongoDB, SQLite, PostgreSQL, SQL Server, MySQL
                          </td>
                        </tr>
                        <tr className="resume_skills_table_row_4">
                          <th className="resume_skills_table_cell_header">
                            Other:
                          </th>
                          <td className="resume_skills_table_cell_description">
                            Git, Agile, RESTful APIs/AJAX/JSON, Linux, Unix
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                {/* Education */}
                <tr className="resume_education">
                  <td className="resume_margin">Education</td>
                  <td className="resume_page">
                    <div className="res_education">
                      {/* Seneca */}
                      <div className="resume_education_title">
                        SENECA COLLEGE – BACHELORS OF SOFTWARE DEVELOPMENT
                      </div>
                      <div className="resume_education_date">
                        JANUARY, 2018 - PRESENT
                      </div>
                      <div className="res_education_bullets">
                        <li>
                          Achieved outstanding results in all programming
                          courses such as C, C++, Database{" "}
                        </li>
                        <li>
                          Experience with scripting and using Unix-based distros{" "}
                        </li>
                      </div>
                    </div>
                    <br />
                    {/* Martingrove */}
                    <div className="res_education">
                      <div className="resume_education_title">
                        MARTINGROVE COLLIGATE INSTITUTE – HIGHSCHOOL{" "}
                      </div>
                      <div className="resume_education_date">
                        GRADUATED – JUNE, 2017{" "}
                      </div>
                      <div className="res_education_bullets">
                        <li>
                          A member of the First Robotic Competition, FRC, where
                          the team competed in the Provincials
                        </li>
                        <li>
                          Programmed a 3D Tic-Tac-Toe simulation using Java{" "}
                        </li>
                      </div>
                    </div>
                  </td>
                </tr>

                {/* Projects */}
                <tr className="resume_project">
                  <td className="resume_margin">Technical Project</td>
                  <td className="resume_page">
                    <div className="res_project">
                      {/* Capstone */}
                      <div className="resume_project_title">
                        CAPSTONE PROJECT – CUSTOMER ORDER AND MANAGEMENT SYSTEM{" "}
                      </div>
                      <div className="resume_project_date">
                        MAY, 2019 – PRESENT{" "}
                      </div>
                      <div className="res_project_bullets">
                        <li>
                          Developed a NodeJS and Angular app that lets you
                          manage green cleaning and stitching business
                        </li>
                        <li>Integrated MongoDB to store data in a cloud </li>
                      </div>
                    </div>

                    <br />
                    {/* Car Manager */}
                    <div className="res_project">
                      <div className="resume_project_title">
                        VROOMMANAGER – CAR MANAGEMENT SYSTEM
                      </div>
                      <div className="resume_project_date">
                        JANUARY, 2020 – FEBUARY, 2020
                      </div>
                      <div className="res_project_bullets">
                        <li>
                          Developed a NodeJS and ReactJS app that lets you
                          manage cars information using web api
                        </li>
                        <li>
                          Integrated MongoDB to store all the cars information
                          in a cloud
                        </li>
                      </div>
                    </div>
                  </td>
                </tr>

                {/* Work Experience */}
                <tr className="resume_experience">
                  <td className="resume_margin">Work Experience</td>
                  <td className="resume_page">
                    <div className="res_experience">
                      {/* Tim Hortons */}
                      <div className="resume_experience_title">
                        TIM HORTONS – FRONT HANDLER
                      </div>
                      <div className="resume_experience_date">
                        JULY 2019 - DECEMBER 2019
                      </div>
                      <div className="res_experience_bullets">
                        <li>
                          Handled the cash register as well as took care of the
                          premises
                        </li>
                        <li>Kept food inventory up-to-date and fresh</li>
                        <li>
                          Made customers’ orders in a team environment with the
                          most efficiency
                        </li>
                      </div>
                    </div>

                    <br />
                    {/* Canadian Tire Gas Station */}
                    <div className="res_experience">
                      <div className="resume_experience_title">
                        CANADIAN TIRE GAS STATION – CASHIER
                      </div>
                      <div className="resume_experience_date">
                        AUGUST 2017 - JANUARY 2018
                      </div>
                      <div className="res_experience_bullets">
                        <li>
                          Handled the cash register as well as took care of the
                          premises
                        </li>
                        <li>
                          Kept inventory up-to-date, including gasoline/diesel
                          and convenience store inventories
                        </li>
                        <li>Processed lottery and cigarette sales</li>
                      </div>
                    </div>

                    <br />
                    {/* UCMAS */}
                    <div className="res_experience">
                      <div className="resume_experience_title">
                        UCMAS – TUTOR
                      </div>
                      <div className="resume_experience_date">
                        FEBRUARY 2017 – SEPTEMBER 2017
                      </div>
                      <div className="res_experience_bullets">
                        <li>
                          Taught English and Math to students in grades 6 to 9
                        </li>
                        <li>
                          Regularly explored areas of difficulty to strengthen
                          the student’s weaknesses
                        </li>
                        <li>
                          Effectively communicated the student’s performance and
                          advancement with their parents to enhance parent-tutor
                          relationships
                        </li>
                        <li>
                          Guided students to improve work ethics, as well as
                          encouraged creative thinking
                        </li>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CSSTransition>
        <Footer />
      </div>
    );
  }
}

export default Resume;
