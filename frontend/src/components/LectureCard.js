import { Dropdown, Grid, Row } from "carbon-components-react";
import { parseISO, getHours, getMinutes, format } from "date-fns";
import React from "react";
import "../features/calendar/calendar.scss";

const parseTime = (startTime, endTime) => {
  const [sh, sm] = startTime.split(":");
  const [eh, em] = endTime.split(":");

  if (sh < 12 && eh >= 12) {
    return sh + ":" + sm + " AM - " + eh + ":" + em + " PM";
  } else if (sh < 12) {
    return sh + ":" + sm + " - " + eh + ":" + em + " AM";
  } else {
    return (
      (sh == 12 ? sh : sh - 12) +
      ":" +
      sm +
      " - " +
      (eh == 12 ? eh : eh - 12) +
      ":" +
      em +
      " PM"
    );
  }
};

export default function LectureCard(props) {
  console.log(props);

  return (
    <div key={props.id} className="course">
      <div className="time">
        <h5>{parseTime(props.startTime, props.endTime)} </h5>
      </div>

      {props.school ? (
        <div className="fullname-course">
          <h4 className="black">
            {props.courseId} {props.showFull ? " | Lecture" : ""}
          </h4>
        </div>
      ) : (
        <div className="fullname-course">
          <h4 className="black">{props.course.courseId + " | Lab"}</h4>
        </div>
      )}

      <div
        className="fullname-course"
        // style={{ display: props.showFull ? "block" : "none"}}
      >
        <h5 className="black">{props.courseName}</h5>
      </div>

      <br></br>

      <div className="zoomlink">
        <h6 className="blue">
          <a target="_blank" rel="noreferrer" href={props.zoomLink}>
            Zoom Link
          </a>
        </h6>
        <p style={{ display: props.showFull ? "block" : "none" }}>
          <a target="_blank" rel="noreferrer" href={props.zoomLink}>
            {props.zoomLink}
          </a>
        </p>
      </div>

      <div
        className="xtra-info"
        style={{ display: props.expand === "is-expanded" ? "block" : "none" }}
      >
        <ul>
          <li>
            <p
              className="black"
              style={{ display: props.showFull ? "block" : "none" }}
            >
              <a target="_blank" rel="noreferrer" href="blackboard.com">
                Lecture Slides
              </a>
            </p>
          </li>

          <li>
            {props.piazzaLink != null ? (
              <p
                className="black"
                style={{ display: props.showFull ? "block" : "none" }}
              >
                <a target="_blank" rel="noreferrer" href={props.piazzaLink}>
                  Piazza
                </a>
              </p>
            ) : (
              false
            )}
          </li>

          <li>Assignments</li>
          <li>Office hours</li>
        </ul>
      </div>
    </div>
  );
}
