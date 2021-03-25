import { Dropdown, Grid, Row } from "carbon-components-react";
import { parseISO, getHours, getMinutes, format } from "date-fns";
import { et } from "date-fns/locale";
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
    return sh - 12 + ":" + sm + " - " + (eh - 12) + ":" + em + " PM";
  }
};

export default function LabCard(props) {
  return (
    <div key={props.id} className="lab">
      <div className="time">
        <h5>{parseTime(props.startTime, props.endTime)}</h5>
      </div>

      <div className="fullname-course">
        <h4>{props.course.courseId + " | Lab"}</h4>
      </div>
    </div>
  );
}
