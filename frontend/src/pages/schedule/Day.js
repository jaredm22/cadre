import React from "react";
import PropTypes from "prop-types";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbSkeleton,
} from "carbon-components-react";
import { ChevronLeft32 } from "@carbon/icons-react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import LinkUI from "@material-ui/core/Link";
import { Link } from "react-router-dom";
import api from "../../apiHandle";
import { parseISO, getHours, getMinutes, isSameDay, format } from "date-fns";
import LectureCard from "../../components/LectureCard";
import AssignmentCard from "../../components/AssignmentCard";
import ExamCard from "../../components/AssignmentCard";

function Badge(props) {
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

function DayHeader(props) {
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

function SyllabusView(props) {
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

class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lectures: [],
      labs: [],
      assignments: [],
      all: [],
      exams: [],
      expand: "no-expand", //classname to add to day component to indicate css transition
      prevExpand: "no-expand", //set previous state of expansion to prevent repeated events into expanded view
      expandedCourse: null,
      syllabusView: false,
      syllabusViewType: "course-overview",
      rightSide: {},
      colWidth: 0,
    };
    this.test = false;
    this.courserefs = []; //array of refs to data in a lecture card
  }

  componentDidUpdate() {
    console.log("f");
    return true;
  }

  componentDidMount() {
    const lectures = this.props.user.courses.filter((course) => {
      if (course.days.includes(this.props.day)) {
        return course;
      }
    });

    const labs = this.props.user.labs.filter((lab) => {
      if (lab.days.includes(this.props.day)) {
        return lab;
      }
    });

    const assignments = [];
    const exams = [];
    this.props.user.courses.forEach((course) => {
      course.assignments.forEach((assignment) => {
        const dueDate = parseISO(assignment.dueDate, "yyyy-MM-dd", new Date());
        if (isSameDay(dueDate, this.props.fullDate)) {
          assignments.push(assignment);
        }
      });

      course.exams.map((exam) => {
        if (
          isSameDay(
            parseISO(exam.dueDate, "yyyy-MM-dd", new Date()),
            this.props.fullDate
          )
        ) {
          exams.push(exam);
        }
      });
    });

    this.setState({
      lectures: lectures,
      labs: labs,
      assignments: assignments,
      exams: exams,
      colWidth: this.getEWidth(),
    });
  }

  parseTime = (time) => {
    let hours = getHours(time);
    let minutes = getMinutes(time);

    return (
      (hours >= 13 ? hours - 12 : hours) +
      ":" +
      (minutes === 0 ? "00" : minutes) +
      (hours >= 12 ? " PM" : " AM")
    );
  };

  setLectureRef = (el) => {
    this.expandRef = el;
    this.daysrefs.push(this.showMoreRef);
    console.log(el);
  };

  handleCallback = (courseId) => {
    console.log(courseId);
    // this.setState(childData)

    var toExpand = this.props.user.courses.find((c) => c.courseId === courseId);
    console.log(toExpand);
    // If day is expanded AND a course's syllabus view is open
    //    If clicked course is currently open course, close syllabusview
    if (this.state.expand === "is-expanded" && this.state.syllabusView) {
      console.log("expanded and syllabus");
      toExpand.courseId !== this.state.expandedCourse.courseId
        ? this.setState({
            expandedCourse: toExpand,
            syllabusViewType: "course-overview",
          })
        : this.setState({ expandedCourse: null, syllabusView: false });

      // If day is expanded AND no syllabus view is open
      //    Open course's syllabus view
    } else if (
      this.state.expand === "is-expanded" &&
      !this.state.syllabusView
    ) {
      console.log("expanded and !syllabus");
      this.setState({
        syllabusView: true,
        expandedCourse: toExpand,
        syllabusViewType: "course-overview",
      });

      // If day is not expanded
      //    Expand day and open clicked course's syllabus view
    } else if (this.state.expand === "no-expand") {
      console.log("this happened4");
      this.setState({
        expand: "is-expanded",
        syllabusViewType: "course-overview",
        syllabusView: true,
        expandedCourse: toExpand,
      });
    }
  };

  childCallback = (data) => {
    this.setState(data);
  };

  //On-Click function that shows right hand side expanded view for class on
  //course card clikck
  showMore(index, e, course) {
    console.log(course);
    if (this.state.expand === "is-expanded") {
      // console.log(index)
      // let lecture = this.courserefs[index]
      // console.log(this.state.lectures[index])
      // this.populateRightSide(lecture)
      // // console.log("^ from show more")

      e.stopPropagation();
      this.setState((prevState) => {
        return {
          expand: "is-expanded",
          prevExpand: prevState.expand,
        };
      });
      this.setState({ syllabusView: !this.state.syllabusView });
    }
  }

  getEWidth() {
    let elem;
    if (this.props.days > 1) {
      elem = document.querySelector(".no-expand");
    }
    let width = this.props.days > 1 ? elem.clientWidth : 0;
    return width;
  }

  render() {
    // console.log("expad: " + this.state.expand)
    // console.log("prev expand: " + this.state.prevExpand)
    // console.log("colWid: " + this.state.colWidth)

    var { lectures, labs } = this.state;

    var section_css =
      this.state.expand === "is-expanded"
        ? {
            transform: `translateX(calc(-${
              this.state.colWidth * this.props.i
            }px - calc(1rem *  ${this.props.i})))`,
          }
        : { transform: `translateX(0px)` };

    return (
      <section
        id={"clndr-col-" + this.props.i}
        className={
          "day-col " +
          this.state.expand +
          (this.props.today ? " clndr-today" : "")
        }
        style={section_css}
      >
        {this.state.expand === "is-expanded" ? (
          <button
            className="icon-text"
            onClick={() =>
              this.setState({
                expandedCourse: null,
                syllabusView: false,
                expand: "no-expand",
              })
            }
          >
            <ChevronLeft32 aria-label="backSchedule" className="back-button" />
            <p>Schedule</p>
          </button>
        ) : (
          false
        )}

        <DayHeader
          expand={this.state.expand}
          today={this.props.today}
          day={this.props.day}
          date={this.props.date}
          fullDate={this.props.fullDate}
          parentCallback={this.childCallback}
        />

        {this.state.expand === "no-expand" && (
          //Exams badge
          <div className="badge-contain">
            <Badge
              type="exams"
              exams={this.state.exams}
              user={this.props.user}
            ></Badge>
            {/* // Assignments badge */}
            <Badge
              type="assignments"
              assignments={this.state.assignments}
              user={this.props.user}
            />
          </div>
        )}

        <div className={this.state.expand === "is-expanded" ? "flex" : ""}>
          <div className="courses">
            {lectures.length + labs.length !== 0 ? (
              lectures
                .concat(labs)
                .sort((l1, l2) => l1.startTime > l2.startTime)
                .map((course, i) => {
                  return (
                    <LectureCard
                      key={course.courseId}
                      {...course}
                      expanded={
                        this.state.expandedCourse !== null &&
                        this.state.expandedCourse.courseId === course.courseId
                      }
                      assignmentsDue={this.state.assignments.length}
                      expand={this.state.expand} //bool to toggle expanded view
                      showFull={this.props.days <= 4} //show full zoom link when schedule is on 3-day view and below
                      parentCallback={this.handleCallback}
                      syllabusView={this.state.syllabusView} //bool to toggle right-hand side details
                      // ref={(ref) => (this.courserefs[i] = ref)}
                    />
                  );
                })
            ) : (
              <div style={{ textAlign: "center" }}>
                <h5>No classes</h5>
              </div>
            )}
          </div>

          {this.state.syllabusView ? (
            <SyllabusView
              course={this.state.expandedCourse}
              fullDate={this.props.fullDate}
              expand={this.state.expand}
              showFull={this.props.days <= 4}
              syllabusView={this.state.syllabusView}
              type={this.state.syllabusViewType}
              parentCallback={this.childCallback}
            />
          ) : (
            false
          )}
        </div>
      </section>
    );
  }
}

export default Day;
