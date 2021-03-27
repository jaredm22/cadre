import React from "react";
// import {HomePage} from './home/HomePage'
import { useParams } from "react-router-dom";
import Calendar from "../../features/calendar/Calendar";
import HeaderNav from "../../components/HeaderNav";
import { Content } from "carbon-components-react";

function SchedulePage(props) {
  const { user, email, id } = useParams();
  console.log(useParams());

  return (
    <div className="App">
      <HeaderNav id={id} user={user} />
      <Content>
        <Calendar email={email} user={user} />
      </Content>
    </div>
  );
}

export default SchedulePage;
