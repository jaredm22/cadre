import React from "react";
import ReactDOM from "react-dom";
// import {HomePage} from './home/HomePage'
import { useParams } from "react-router-dom";
import Calendar from "../../features/calendar/Calendar";
import HeaderNav from "../../components/HeaderNav";
import { Content } from "carbon-components-react";

function SchedulePage(props) {
  const { email, id } = useParams();
  console.log(useParams());

  return (
    <div className="App">
      <HeaderNav id={id} />
      <Content>
        <Calendar email={email} />
      </Content>
    </div>
  );
}

export default SchedulePage;
