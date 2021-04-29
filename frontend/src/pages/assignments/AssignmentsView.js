import React from "react";
import { useLocation } from "react-router-dom";
import HeaderNav from "../../components/HeaderNav";
import AssignmentCard from "../../components/AssignmentCard";
import LectureCard from "../../components/LectureCard"
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
                      // parentCallback={this.handleCallback}
                      // syllabusView={this.state.syllabusView} //bool to toggle right-hand side details
                    />
                  );
                })
              }
          </div>

          {/* {this.state.syllabusView ? (
            <SyllabusView
              course={this.state.expandedCourse}
              fullDate={this.props.fullDate}
              expand={this.state.expand}
              showFull={this.props.days <= 4}
              syllabusView={this.state.syllabusView}
              type={this.state.syllabusViewType}
              parentCallback={this.childCallback}
            />
          ) : (false)} */}
        </div>
      </section>

        </div>
      </div>
    </div>
  );
}
