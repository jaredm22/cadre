import React from "react";
import { Link } from "react-router-dom";

export default function Badge(props) {
    if (props.type === "assignments") {
      if (props.assignments.length != 0) {
        return (
          <button className="badge assignments">
            <Link
              className="badge link"
              to={{
                pathname: "/assignments",
                state: {
                  user: props.user,
                },
              }}
            >
              <p>
                {props.assignments.length} Assignment
                {props.assignments.length == 1 ? false : "s"} Due
              </p>
            </Link>
          </button>
        );
      } else {
        return null;
      }
    } else if (props.type === "exams") {
      if (props.exams.length != 0) {
        return (
          <button className="badge exams">
            <Link
              className="badge link"
              to={{
                pathname: "/exams",
                state: { user: props.user },
              }}
            >
              <p>
                {props.exams.length} Exam
                {props.exams.length == 1 ? false : "s"} Due
              </p>
            </Link>
          </button>
        );
      } else {
        return null;
      }
    }
  }