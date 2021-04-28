import React from "react";
import { useLocation } from "react-router-dom";
import HeaderNav from "../../components/HeaderNav";
import AssignmentCard from "../../components/AssignmentCard";
import "./assignments.scss";

function ClassColumn(props) {
  return (
    <div className="class-column">
      <h3>{props.courseId}</h3>
      <h5>{props.courseName}</h5>
      {props.assignments.length !== 0 ? (
        props.assignments
          .sort((a1, a2) => a1.dueDate > a2.dueDate)
          .map((assignment) => {
            return <AssignmentCard {...assignment} expand="is-expanded" />;
          })
      ) : (
        <p>No upcoming assignments</p>
      )}
    </div>
  );
}

export default function AssignmentsView(props) {
  const location = useLocation();
  console.log(props);
  const courses = props.user.courses;

  return (
    <div className="App">
      <HeaderNav user={location.state.user} />
      <div className="view-container">
        <h3>Assignments</h3>
        <div class="class-container">
          {courses.map((c) => {
            return <ClassColumn {...c}></ClassColumn>;
          })}
        </div>
      </div>
    </div>
  );
}
