import { Dropdown, Grid, Row } from "carbon-components-react";
import { parse, getHours, getMinutes, format } from "date-fns";
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

export default function CourseCard(props) {
  console.log(props);

  return (
    <div key={props.id} className="course">
      <div className="course-id">
        <h4>{props.courseId}</h4>
      </div>

      <div
        className="fullname-course"
        style={{ display: props.showFull ? "block" : "none" }}
      >
        <h6>{props.courseName + " " + props.section}</h6>
      </div>
      <div className="time">
        <h5>
          {" "}
          {parseTime(props.startTime) + " - " + parseTime(props.endTime)}{" "}
        </h5>
      </div>

      <div className="zoomlink">
        <h5 className="blue">
          <a target="_blank" rel="noreferrer" href={props.zoomLink}>
            Zoom Link
          </a>
        </h5>
        <p style={{ display: props.showFull ? "block" : "none" }}>
          <a target="_blank" rel="noreferrer" href={props.zoomLink}>
            {props.zoomLink}
          </a>
        </p>
      </div>

      <div
        aria-label="expanded-view-info"
        className="xtra-info"
        style={{ display: props.expand === "is-expanded" ? "block" : "none" }}
      >
        <ul>
          <li>assignments</li>
          <li>office hours</li>
          <li>other</li>
        </ul>
      </div>
    </div>
  );
}
