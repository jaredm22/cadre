import React from "react";
import ReactDOM from "react-dom";
// import {HomePage} from './home/HomePage'
// import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import getHello from "./apiHandle"
// import React, { useState, useEffect } from 'react';
import Calendar from "../../features/calendar/Calendar";
import HeaderNav from "../../components/HeaderNav";
import { Content } from "carbon-components-react";

function SchedulePage() {
  return (
    <div className="App">
      <HeaderNav />
      <Content>
        <Calendar />
      </Content>
    </div>
  );
}

export default SchedulePage;
