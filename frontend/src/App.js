import "./App.scss";
// import React, { useState, useEffect } from 'react';
// import { Content } from "carbon-components-react";
import SchedulePage from "./pages/schedule/SchedulePage";
import LoginPage from "./pages/login/LoginPage";
import SignupPage from "./pages/signup/SignupPage";
import CreateCoursePage from "./pages/createCourse/CreateCoursePage";
import CreateAssignmentPage from "./pages/createAssignment/CreateAssignmentPage";
import AssignmentsPage from "./pages/assignments/AssignmentsPage";
import ExamsPage from "./pages/exams/ExamsPage";

// import HomePage from "./pages/home/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/createCourse" component={CreateCoursePage} />
          <Route path="/createAssignment" component={CreateAssignmentPage} />
          <Route path="/schedule" component={SchedulePage} />
          <Route path="/assignments" component={AssignmentsPage} />
          <Route path="/exams" component={ExamsPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
