import React from "react";
import { format } from "date-fns";

export default function DayHeader(props) {
  let style = {};
  if (props.expand === "is-expanded") {
    style = { textAlign: "left", display: "flex", flexDirection: "row" };
    return (
      <div
        className={props.today ? "date-today" : "date"}
        style={style}
        onClick={() =>
          props.parentCallback(
            props.expand === "is-expanded"
              ? {
                  expand: "no-expand",
                  expandedCourse: null,
                  syllabusView: false,
                }
              : { expand: "is-expanded" }
          )
        }
      >
        <h4 className="clndr-day">
          {format(props.fullDate, "eeee',' LLLL do")}
        </h4>
      </div>
    );
  } else {
    style = { textAlign: "center" };
    return (
      <div
        className={props.today ? "date-today" : "date"}
        style={style}
        onClick={() =>
          props.parentCallback(
            props.expand === "is-expanded"
              ? {
                  expand: "no-expand",
                  expandedCourse: null,
                  syllabusView: false,
                }
              : { expand: "is-expanded" }
          )
        }
      >
        <h3 className="clndr-day">{format(props.fullDate, "eee")}</h3>
        <h4 className="clndr-date">{format(props.fullDate, "dd")}</h4>
      </div>
    );
  }
}
