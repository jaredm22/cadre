import { parse, format } from "date-fns";
import React from "react";
import "../pages/schedule/calendar.scss";

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
  const dueDate = format(
    parse(props.dueDate, "yyyy-MM-d", new Date()),
    "MMM do"
  );
  const dueTime = parseTime(props.dueTime);
  console.log(props);

  return props.size === "small" ? (
    <div key={props.id} className="exam">
      <div>
        <h4>{props.Course.courseId}</h4>
        {/* <h6>{props.Course.courseName}</h6> */}
        <h4>{props.name}</h4>
        <br></br>
        <h6>{"Date: " + dueDate}</h6>
        <h6>{"Time: " + dueTime}</h6>
      </div>

      <div
        className="xtra-info"
        style={{ display: props.expand === "is-expanded" ? "block" : "none" }}
      >
        {props.tags.map((t) => {
          return <button className="tag">{t}</button>;
        })}
      </div>
    </div>
  ) : (
    <div key={props.id} className="exam">
      <div>
        <h4>{props.Course.courseId}</h4>
        {/* <h6>{props.Course.courseName}</h6> */}
        <h4>{props.name}</h4>
        <br></br>
        <h6>{"Date: " + dueDate}</h6>
        <h6>{"Time: " + dueTime}</h6>
      </div>

      <div
        className="xtra-info"
        style={{ display: props.expand === "is-expanded" ? "block" : "none" }}
      >
        {props.tags.map((t) => {
          return <button className="tag">{t}</button>;
        })}
      </div>
    </div>
  );
}
