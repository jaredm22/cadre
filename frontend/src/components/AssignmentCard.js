import { format, parse } from "date-fns";
import React from "react";
import "../pages/schedule/calendar.scss";

const parseTime = (time) => {
  const [hours, minutes] = time.split(":");

  if (hours === "12" && minutes === "00") {
    return "Noon";
  } else {
    return (
      (hours >= 13 ? hours - 12 : hours) +
      (minutes == 0 ? "" : `:${minutes}`) +
      (hours >= 12 ? "pm" : "am")
    );
  }
};

export default function AssignmentCard(props) {
  const dueDate = format(parse(props.dueDate, "yyyy-MM-d", new Date()), "M/d");
  const dueTime = parseTime(props.dueTime);

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
        <h6>{"Due " + dueDate + " at " + dueTime}</h6>
      </div>

      <div key={props.id} className="card-right">
        {props.tags.map((t) => {
          return (
            <button className="tag">
              <h6>{t}</h6>
            </button>
          );
        })}
      </div>
    </div>
  );
}
