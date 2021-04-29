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

  return (
    <div key={props.id} className="card">
      <div
        className="card-left"
        style={{ display: "flex", flexDirection: "column", textAlign: "left" }}
      >
        <h6>
          {props.Course.courseId +
            " " +
            props.Course.courseName +
            " " +
            props.Course.section}
        </h6>
        <h4>{props.name}</h4>
        <h6>{dueDate + " at " + dueTime}</h6>
      </div>

      <div key={props.id} className="card-right">
        {props.tags.map((t) => {
          return <button className="tag">{t}</button>;
        })}
      </div>
    </div>
  );
}
