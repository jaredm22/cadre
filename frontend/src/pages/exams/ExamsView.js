import React from "react";
import { useParams, useLocation } from "react-router-dom";
import HeaderNav from "../../components/HeaderNav";
import ExamCard from "../../components/ExamCard";
import { Breadcrumbs, Link } from "@material-ui/core";
import { format } from "date-fns";
import "./exams.scss";

function ClassColumn(props) {
  return (
    <div className="class-column">
      <h3>{props.courseId}</h3>
      <h5>{props.courseName}</h5>
      {props.exams.length !== 0 ? (
        props.exams
          .sort((e1, e2) => e1.dueDate > e2.dueDate)
          .map((exam) => {
            return <ExamCard {...exam} expand="is-expanded" />;
          })
      ) : (
        <p>No upcoming exams</p>
      )}
    </div>
  );
}

export default function ExamsView(props) {
  const location = useLocation();
  console.log(props);
  const courses = props.user.courses;

  return (
    <div className="App">
      <HeaderNav user={location.state.user} />
      <div class="view-container">
        <h3>Exams</h3>
        <div class="class-container">
          {courses.map((c) => {
            return <ClassColumn {...c}></ClassColumn>;
          })}
        </div>
      </div>
    </div>
  );
}
