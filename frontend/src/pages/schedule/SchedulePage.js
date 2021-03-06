import React, { useState } from "react";
// import {HomePage} from './home/HomePage'
import { useLocation } from "react-router-dom";
import Calendar from "./Calendar";
import HeaderNav from "../../components/HeaderNav";
import { format } from "date-fns";
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
        <Calendar
          key={format(day, "M-d-y")}
          user={location.state.user}
          day={day}
        />
      </Content>
    </div>
  );
}

export default SchedulePage;
