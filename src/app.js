import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Skills from "./skills";
import Projects from "./projects";
import Resume from "./resume";
import Demo from "./demo";
import Github from "./github";
import LinkedIn from "./linkedin";
import NotFound from "./notfound";

//creating components
// npx crcf --notest components/Home
function App() {
  return (
    <Switch>
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/My_Website" render={() => <Home />} />
      <Route exact path="/about" render={() => <About />} />
      <Route exact path="/skills" render={() => <Skills />} />
      <Route exact path="/projects" render={() => <Projects />} />
      <Route exact path="/resume" render={() => <Resume />} />
      <Route exact path='/demo/:id' render={(props) => (<Demo id={props.match.params.id} />)}/>
      <Route exact path='/github/:id' render={(props) => (<Github id={props.match.params.id} />)}/>
      <Route exact path="/linkedin" render={() => <LinkedIn />} />
      {/* To get input from url like, 'api/:id'
    <Route path='/cars/detail/:id' render={(props) => (<GetOne id={props.match.params.id} />)}/>
    <Route path='/cars/edit/:id' render={(props) => (<Edit id={props.match.params.id} />)}/>
    <Route path='/cars/delete/:id' render={(props) => (<Delete id={props.match.params.id} />)}/> */}
      <Route render={() => <NotFound />} />
    </Switch>
  );
}

export default App;
