import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import HeaderNav from "../../components/HeaderNav";
import ExamCard from "../../components/ExamCard";
import LectureCard from "../../components/LectureCard";
import NoCard from "../../components/NoCard";
// import "./exams.scss"

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
  // console.log(props);
  const courses = props.user.courses;

  const [syllabusView, setView] = useState(false);
  const [toExpand, setToExpand] = useState({});

  const handleCallback = (courseId) => {
    let newToExpand = props.user.courses.find((c) => c.courseId === courseId);
    // console.log(newToExpand);
    // If day is expanded AND a course's syllabus view is open
    //    If clicked course is currently open course, close syllabusview
    if (syllabusView) {
      // return
      if (toExpand.courseId !== newToExpand.courseId) {
        setToExpand(newToExpand);
      } else {
        setView(false);
      }

      // // If day is expanded AND no syllabus view is open
      // //    Open course's syllabus view
    } else if (!syllabusView) {
      // console.log("show me!");
      setToExpand(newToExpand);
      setView(true);
    }
    // setView(!syllabusView)
  };

  return (
    <div className="App">
      <HeaderNav user={location.state.user} />
      <div class="view-container">
        <h3>Exams</h3>
        <div class="class-container">
          {/* {courses.map((c) => {
            return <ClassColumn {...c}></ClassColumn>;
          })} */}

          <section>
            <div className="flex">
              <div className="courses">
                {courses.map((course) => {
                  return (
                    <LectureCard
                      key={course.courseId}
                      {...course}
                      // no state variable in this page (yet)
                      // expanded={
                      //   this.state.expandedCourse !== null &&
                      //   this.state.expandedCourse.courseId === course.courseId
                      // }
                      // assignmentsDue={this.state.assignments.length}
                      // expand={this.state.expand} //bool to toggle expanded view
                      // showFull={this.props.days <= 4} //show full zoom link when schedule is on 3-day view and below
                      parentCallback={handleCallback}
                      // syllabusView={this.state.syllabusView} //bool to toggle right-hand side details
                    />
                  );
                })}
              </div>

              {syllabusView && toExpand.exams.length > 0 ? (
                <div className="class-container right-side">
                  {toExpand.exams.map((exam) => {
                    return <ExamCard {...exam} />;
                  })}
                  {/* // <div>{toExpand}</div> */}
                </div>
              ) : syllabusView && toExpand.exams.length <= 0 ? (
                <div className="class-container right-side">
                  <NoCard type="Exams" />
                </div>
              ) : (
                <div className="flex">
                  {/* <p>No exams</p> */}
                  {/* {toExpand.exams.map((exam) => {
                    return <NoCard {...exam} />;
                  })} */}
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
