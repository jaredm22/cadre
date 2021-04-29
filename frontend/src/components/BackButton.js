import React from "react";
import { ChevronLeft32 } from "@carbon/icons-react";

export default function BackButton(props) {
  return (
    <button
      className="icon-text"
      onClick={() => {
        props.parentCallback({
          expandedCourse: null,
          syllabusView: false,
          expand: "no-expand",
        });
      }}
    >
      <ChevronLeft32 aria-label="backSchedule" className="back-button" />
      <p>Schedule</p>
    </button>
  );
}
