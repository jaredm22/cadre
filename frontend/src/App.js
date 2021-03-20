import "./App.scss";
// import getHello from "./apiHandle"
// import React, { useState, useEffect } from 'react';
// import Calendar from "./features/calendar/Calendar";
// import HeaderNav from "./components/HeaderNav";
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
          <Route path="/">
            <SchedulePage />
          </Route>
          {/* <Route path="/login"><LoginPage/></Route>
          <Route path="/createCourse"><CreateCoursePage/></Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
