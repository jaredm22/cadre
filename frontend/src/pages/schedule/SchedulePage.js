import React from "react";
// import {HomePage} from './home/HomePage'
import { useParams, useLocation } from "react-router-dom";
import Calendar from "../../features/calendar/Calendar";
import HeaderNav from "../../features/HeaderNav";
import { Content } from "carbon-components-react";

function SchedulePage(props) {
  const location = useLocation();

  return (
    <div className="App">
      <HeaderNav user={location.state.user} />
      <Content>
        <Calendar user={location.state.user} />
      </Content>
    </div>
  );
}

export default SchedulePage;
