import "./App.scss";
// import getHello from "./apiHandle"
// import React, { useState, useEffect } from 'react';
import Calendar from "./features/calendar/Calendar";
import HeaderNav from "./components/HeaderNav";
import { Content } from "carbon-components-react";

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <Content>
        <Calendar />
      </Content>
    </div>
  );
}

export default App;
