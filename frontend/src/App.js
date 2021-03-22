import "./App.scss";
// import React, { useState, useEffect } from 'react';
// import { Content } from "carbon-components-react";
import SchedulePage from "./pages/schedule/SchedulePage";
import LoginPage from "./pages/login/LoginPage";
import CreateCoursePage from "./pages/createCourse/CreateCoursePage";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={SchedulePage}></Route>
          {/* <Route path="/login" component={LoginPage}></Route>
          <Route path="/createCourse" component={CreateCoursePage}></Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
