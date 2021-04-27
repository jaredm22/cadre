import { Dropdown, Grid, Row } from "carbon-components-react";
import { parseISO, getHours, getMinutes, format } from "date-fns";
// import React, { useState } from "react";
import React from "react";

import "../pages/schedule/calendar.scss";

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

const LectureCard = React.forwardRef((props, ref) => {
  // const [syllabusView, setView] = useState(false);
  // console.log(props);

  //need to add 'button' to these things

  return (
    <div
      key={props.id}
      className="course"
      onClick={props.handleclick}
      ref={ref}
    >
      {/* Course Code (or 'Lab' if lab */}
      {props.courseName != null ? (
        <div className="fullname-course">
          <h4 className="black"> {props.courseId} </h4>
        </div>
      ) : (
        <div className="fullname-course">
          <h5 className="black">{props.course.courseId + " | Lab"}</h5>
        </div>
      )}

      {/* Name of course */}
      <div
        className="fullname-course"
        // style={{ overflow: "hidden"}}
      >
        <h4 className="black">{props.courseName}</h4>
      </div>

      {/* Time */}
      <div className="time">
        <h5>{parseTime(props.startTime, props.endTime)} </h5>
      </div>

      <br></br>

      <div className="zoomlink">
        <a
          className="link blue"
          target="_blank"
          rel="noreferrer"
          href={props.zoomLink}
        >
          <h5 style={{"display": "inline-block"}}>Zoom Link</h5>
        </a>
        <div
        className="zoom-info"
        style={{ display: props.expand === "is-expanded" ? "block" : "none" }}
      > 
      <p>Meeting Id:</p>
      <p>Passwords</p>
      </div>
        
      </div>

      <div
        className="xtra-info"
        style={{ display: props.expand === "is-expanded" ? "block" : "none" }}
      >
        <ul>
          {/* <li>
            <a
              className="black"
              style={{ display: props.showFull ? "block" : "none" }}
              target="_blank"
              rel="noreferrer"
              // href="blackboard.com"
            >
              Lecture Slides
            </a>
          </li> */}

          {/* <li>
            {props.piazzaLink != null ? (
              <a
                className="black"
                style={{ display: props.showFull ? "block" : "none" }}
                target="_blank"
                rel="noreferrer"
                // href={props.piazzaLink}
              >
                Piazza Page
              </a>
            ) : (
              false
            )}
          </li> */}
          {/* <li>Course Page</li> */}
          <li className="orange"><h5>{
          props.assignmentsDue > 0 
          ? props.assignmentsDue + " Assignment" + ( props.assignmentsDue === 1 ? " due" : " s due" )
          : ""
          }</h5></li>
        </ul>
      </div>
    </div>
  );
});

export default LectureCard;
