import React from "react";
import ReactDOM from "react-dom";
// import {HomePage} from './home/HomePage'
import { useParams } from "react-router-dom";
import Calendar from "../../features/calendar/Calendar";
import HeaderNav from "../../components/HeaderNav";
import { Content } from "carbon-components-react";

function SchedulePage(props) {
  let { email } = useParams();

  return (
    <div className="App">
      <HeaderNav />
      <Content>
        <Calendar email={email} />
      </Content>
    </div>
  );
}

export default SchedulePage;
