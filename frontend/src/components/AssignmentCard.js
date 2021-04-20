import { Dropdown, Grid, Row } from "carbon-components-react";
import { parseISO, getDate, getMonth, format, parse } from "date-fns";
import React from "react";
import "../pages/schedule/calendar.scss";

const parseTime = (time) => {
  const [hours, minutes] = time.split(":");

  if (hours === "12" && minutes === "00") {
    return "Noon";
  } else {
    return (
      (hours >= 13 ? hours - 12 : hours) +
      ":" +
      (minutes == 0 ? "00" : minutes) +
      (hours >= 12 ? " PM" : " AM")
    );
  }
};

export default function AssignmentCard(props) {
  const dueDate = format(
    parse(props.dueDate, "yyyy-MM-d", new Date()),
    "MMM do"
  );
  const dueTime = parseTime(props.dueTime);

  return (
    <div key={props.id} className="assignment">
      <div>
        <h6>{props.Course.courseId}</h6>
        {/* <h6>{props.Course.courseName}</h6> */}
        <h4>{props.name}</h4>
        <br></br>
        <h6>{"Due: " + dueDate + " - " + dueTime}</h6>
      </div>

      <div
        className="xtra-info"
        // style={{ display: props.expand === "is-expanded" ? "block" : "none" }}
      >
        {props.tags.map((t) => {
          return <button className="tag">{t}</button>;
        })}
      </div>
    </div>
  );
}
