import React from "react";
import AssignmentCard from "../../../components/AssignmentCard";
import ExamCard from "../../../components/AssignmentCard";

export default function SyllabusView(props) {
  var right_side_css = {
    display:
      props.expand === "is-expanded" && props.syllabusView ? "block" : "none",
  };

  const { course, type } = props;
  console.log(props);
  console.log(course.courseId);

  switch (type) {
    case "assignments":
      return (
        <div className="right-side" style={right_side_css}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div className="syllabus-column">
              <h6 style={{ color: "gray" }}>
                {`${course.courseId} - ${course.courseName} ${course.section}`}
              </h6>
              <br></br>

              <h4>Assignments:</h4>
              <br></br>

              {course.assignments.length == 0 ? (
                <p>No assignments for this course.</p>
              ) : (
                course.assignments.map((a) => {
                  return <AssignmentCard {...a} />;
                })
              )}
            </div>
          </div>
        </div>
      );

    case "exams":
      return (
        <div className="right-side" style={right_side_css}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div className="syllabus-column">
              <h6 style={{ color: "gray" }}>
                {`${course.courseId} - ${course.courseName} ${course.section}`}
              </h6>

              <br></br>
              <h4>
                All exams for{" "}
                {<span style={{ color: "orange" }}>{course.courseId}</span>}:
              </h4>

              {course.exams.length == 0 ? (
                <p>No exams for this course.</p>
              ) : (
                course.exams.map((e) => {
                  return <ExamCard {...e} />;
                })
              )}
            </div>
          </div>
        </div>
      );

    case "course-overview":
      return (
        <div className="right-side" style={right_side_css}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div className="syllabus-column">
              <h5 style={{ color: "gray" }}>
                {`${course.courseId} - ${course.courseName} ${course.section}`}
              </h5>
              <br></br>

              <h4>Office Hours:</h4>
              <br></br>

              <h5>{`Professor ${course.professor[0].firstName} ${course.professor[0].lastName}: Wednesday 10am-11am`}</h5>
              <div className="zoomlink">
                <a
                  className="blue"
                  target="_blank"
                  rel="noreferrer"
                  // href={props.zoomLink}
                >
                  <h5>Zoom Link</h5>
                </a>
              </div>
              <br></br>

              <h5>{`TA Fake TA-Man: Monday 12pm-1pm`}</h5>
              <div className="zoomlink">
                <a
                  className="blue"
                  target="_blank"
                  rel="noreferrer"
                  // href={props.zoomLink}
                >
                  <h5>Zoom Link</h5>
                </a>
              </div>
              <br></br>

              <h4>
                Due today:{" "}
                <button
                  className="see-all"
                  onClick={() =>
                    props.parentCallback({ syllabusViewType: "assignments" })
                  }
                >
                  <h4>See all</h4>
                </button>
              </h4>
              <br></br>
              {course.assignments.length == 0 ? (
                <p>No assignments due today.</p>
              ) : (
                course.assignments.map((a) => {
                  return (
                    <button key={a.id} className={"assignment-small"}>
                      <div>
                        <h5>{a.name}</h5>
                      </div>
                    </button>
                  );
                })
              )}

              <h4>
                Exams today:{" "}
                <button
                  className="see-all"
                  onClick={() =>
                    props.parentCallback({ syllabusViewType: "exams" })
                  }
                >
                  <h4>See all</h4>
                </button>
              </h4>
              <br></br>
              {course.exams.length == 0 ? (
                <p>No exams for this course.</p>
              ) : (
                course.exams.map((e) => {
                  return (
                    <button key={e.id} className={"exam-small"}>
                      <div>
                        <h5>{e.name}</h5>
                      </div>
                    </button>
                  );
                })
              )}
            </div>
          </div>
        </div>
      );
  }
}
