import React, { useState } from "react";
// import {HomePage} from './home/HomePage'
import { useParams, useLocation } from "react-router-dom";
import Calendar from "./Calendar";
import HeaderNav from "../../components/NestedList";
import { Content } from "carbon-components-react";

function SchedulePage(props) {
  const location = useLocation();
  const [day, setDay] = useState(new Date());

  const changeDate = (childData) => {
    console.log(childData);
    setDay(childData);
  };

  return (
    <div className="App">
      <HeaderNav
        user={location.state.user}
        parentCallback={(childData) => changeDate(childData)}
      />
      <Content>
        <Calendar user={location.state.user} day={day} />
      </Content>
    </div>
  );
}

export default SchedulePage;
