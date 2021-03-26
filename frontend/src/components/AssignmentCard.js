import { Dropdown, Grid, Row } from "carbon-components-react";
import { parseISO, getDate, getMonth, format } from "date-fns";
import React from "react";
import "../features/calendar/calendar.scss";

const parseTime = (time) => {
  const [hours, minutes] = time.split(":");

  if (hours == "00" && minutes == "00") {
    return "11:59 PM";
  } else if (hours === "12" && minutes === "00") {
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
  const dueDate = parseISO(props.dueDate, "yyyy-MM-dd", new Date());
  const dueTime = parseTime(props.dueTime);

  return (
    <div key={props.id} className="assignment">
      <div className="time">
        <h5>{"Due: " + dueTime}</h5>
      </div>

      <div className="homework">
        <h4>
          {props.Course.courseId} {props.showFull ? " | Assignment" : ""}
        </h4>
      </div>

      <div className="fullname-assignment">
        <h6>{props.name}</h6>
      </div>

      <div
        className="xtra-info"
        style={{ display: props.expand === "is-expanded" ? "block" : "none" }}
      >
        <ul>
          <li>{props.tags.map((tag) => tag).join(", ")}</li>
        </ul>
      </div>
    </div>
  );
}
