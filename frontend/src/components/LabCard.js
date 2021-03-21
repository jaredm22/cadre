import { Dropdown, Grid, Row } from "carbon-components-react";
import { parse, getHours, getMinutes, format } from "date-fns";
import { et } from "date-fns/locale";
import React from "react";
import '../features/calendar/calendar.scss';

const parseTime = (time) => {
  const [hours, minutes] = time.split(":")

  return (
    (hours >= 13 ? hours - 12 : hours) +
    ":" +
    (minutes == 0 ? "00" : minutes) +
    (hours >= 12 ? " PM" : " AM")
  );
}

export default function LabCard(props) {
  console.log(props);

  return ( 
    <div key={props.id} className="lab">
      <div className="course-id">
        <h4>{props.labId ? props.labId : "Lab"}</h4>
      </div>

      <div
        className="fullname-course"
        style={{ display:  props.showFull ? "block" : "none" }}
      >
        <h4>{props.course.courseId + " " + props.course.section}</h4>
      </div>
      <div className="time">
        <h5>
          {" "}
          {parseTime(props.startTime) +
            " - " +
            parseTime(props.endTime)}{" "}
        </h5>
      </div>

      <div className="zoomlink">
        <h5 className="blue">
          <a target="_blank" rel="noreferrer" href={props.zoomLink}>
            Zoom Link
          </a>
        </h5>
        <p
          style={{ display: props.showFull ? "block" : "none" }}
        >
          <a target="_blank" rel="noreferrer" href={props.zoomLink}>
            {props.zoomLink}
          </a>
        </p>
      </div>
    </div>
  );
}
