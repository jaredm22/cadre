import { Dropdown, Grid, Row } from "carbon-components-react";
import { parseISO, format } from "date-fns";
import React from "react";
import "../features/calendar/calendar.scss";

const parseTime = (time) => {
  const [hours, minutes] = time.split(":");

  return (
    (hours >= 13 ? hours - 12 : hours) +
    ":" +
    (minutes == 0 ? "00" : minutes) +
    (hours >= 12 ? " PM" : " AM")
  );
};

export default function ExamCard(props) {
  const dueDate = parseISO(props.dueDate, "yyyy-MM-dd", new Date());
  const dueTime = parseTime(props.dueTime);
  console.log(props);

  return (
    <div key={props.id} className="exam">
      <div className="time">
        <h5>{dueTime}</h5>
      </div>

      <div className="course-id">
        <h4>{props.Course.courseId + (props.showFull ? " |  Exam" : "")}</h4>
      </div>

      <div className="fullname-exam">
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
