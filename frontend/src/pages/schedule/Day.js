import React from "react";
import PropTypes from "prop-types";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import LinkUI from "@material-ui/core/Link";
import { Link } from "react-router-dom";
import api from "../../apiHandle";
import {
  parseISO,
  getHours,
  getMinutes,
  getDate,
  getMonth,
  getDay,
  isSameDay,
  isSameWeek,
  compareAsc,
  isThisHour,
  format,
  formatRelative,
} from "date-fns";
import LectureCard from "../../components/LectureCard";
import AssignmentCard from "../../components/AssignmentCard";

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
            <h6>
              {props.assignments.length} Assignment
              {props.assignments.length == 1 ? false : "s"} Due
            </h6>
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
              state: {
                user: props.user,
              },
            }}
          >
            <h6>
              {props.exams.length} Exam
              {props.exams.length == 1 ? false : "s"} Due
            </h6>
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
    style = { "text-align": "left", display: "flex", "flex-direction": "row" };
    return (
      <div className={props.today ? "date-today" : "date"} style={style}>
        <h4 className="clndr-day">
          {format(props.fullDate, "eeee',' LLLL do")}
        </h4>
      </div>
    );
  } else {
    style = { "text-align": "center" };
    return (
      <div className={props.today ? "date-today" : "date"} style={style}>
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
  const course = props.course;
  console.log(course);

  return course ? (
    <div className="right-side" style={right_side_css}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          className="syllabus-column"
          style={{
            margin: "40px",
            marginTop: "0px",
            overflow: "auto",
            textAlign: "left",
            padding: "1%",
          }}
        >
          <h4>
            All Assignments for{" "}
            <span style={{ color: "orange" }}>{course.courseId}</span>:{" "}
          </h4>
          <br></br>

          {course.assignments.length == 0 ? (
            <p>No assignments for this course.</p>
          ) : (
            course.assignments.map((assignment) => {
              return <AssignmentCard {...assignment} />;
            })
          )}
        </div>
      </div>
    </div>
  ) : (
    false
  );

  // (<div className="right-side" style={right_side_css}>
  //       <div style={{ display: "flex", flexDirection: "row" }}>
  //         <div
  //           className="syllabus-column"
  //           style={{
  //             margin: "40px",
  //             marginTop: "0px",
  //             overflow: "auto",
  //             textAlign: "center",
  //           }}
  //         >
  //           <h4>Due This Week</h4>
  //           {course.assignments.length == 0 ? (
  //             <p>No assignments due this week.</p>
  //           ) : (
  //             course.assignments.map((assignment) => {
  //               const dueDate = parseISO(
  //                 assignment.dueDate,
  //                 "yyyy-MM-dd",
  //                 new Date()
  //               );
  //               if (isSameWeek(dueDate, props.fullDate)) {
  //                 return (
  //                   <AssignmentCard
  //                     {...assignment}
  //                   />
  //                 );
  //               }
  //             })
  //           )}
  //         </div>

  //         <div
  //           style={{
  //             display: "flex",
  //             flexDirection: "column",
  //             textAlign: "center",
  //           }}
  //         >
  //           <h4>Upcoming Assignments</h4>
  //           {course.assignments.length == 0 ? (
  //             <p>No assigments due this week.</p>
  //           ) : (
  //             course.assignments.map((assignment) => {
  //               const dueDate = parseISO(
  //                 assignment.dueDate,
  //                 "yyyy-MM-dd",
  //                 new Date()
  //               );
  //               if (!isSameWeek(dueDate, props.fullDate)) {
  //                 return (
  //                   <AssignmentCard
  //                     {...assignment}
  //                   />
  //                 );
  //               }
  //             })
  //           )}
  //         </div>
  //       </div>
  //     </div>) : false)
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
      syllabusView: false,
      rightSide: {},
      colWidth: 0,
    };
    this.test = false;
    this.courserefs = []; //array of refs to data in a lecture card
  }

  componentDidUpdate() {
    if (this.state.expand === "is-expanded") {
      let width = this.getEWidth();
      width !== this.state.colWidth &&
        this.setState({
          colWidth: width,
        });
    }
  }

  componentDidMount() {
    
    const lectures = this.props.user.courses.filter((course) => {
      if (course.days.includes(this.props.day)) {
        return course;
      }
      // api.getModifiedLecture(course.id, format(this.props.fullDate, "yyyy-MM-dd"))
      //   .then(res => {
      //     if ( res == null && course.days.includes(this.props.day)) {
      //       console.log(course);
      //       return course;
      //     } else if (res != null) {
      //       modifiedLecture = res;
      //     }
      //   }
      // );
    });

    const labs = this.props.user.labs.filter((lab) => {
      if (lab.days.includes(this.props.day)) {
        return lab;
      }
    });

    const assignments = [];
    this.props.user.courses.forEach((course) => {
      course.assignments.forEach((assignment) => {
        const dueDate = parseISO(assignment.dueDate, "yyyy-MM-dd", new Date());
        if (isSameDay(dueDate, this.props.fullDate)) {
          assignments.push(assignment);
        }
      });
    });

    const exams = [];
    this.props.user.courses.forEach((course) => {
      course.exams.map((exam) => {
        console.log(exam);
        const dueDate = parseISO(exam.dueDate, "yyyy-MM-dd", new Date());
        if (isSameDay(dueDate, this.props.fullDate)) {
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
      // console.log(showExtra)
    }
  }

  getEWidth() {
    let elem;
    if (this.props.days > 1) {
      elem = document.querySelector(".no-expand");
    }
    let width = this.props.days > 1 ? elem.clientWidth : 0;

    // let e = document.getElementById("clndr-col-" + i);
    // console.log(elem);
    // console.log(this.state.colWidth)

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
          <div className="breadcrumbs">
            <Breadcrumbs aria-label="breadcrumb" className="bc">
              <LinkUI
                color="inherit"
                onClick={() => {
                  this.setState({ expand: "no-expand" });
                }}
              >
                Weekly Overview
              </LinkUI>

              <LinkUI color="inherit">
                {format(this.props.fullDate, "E',' LLL do")}
              </LinkUI>

              {this.state.expandedCourse ? (
                <LinkUI color="inherit">
                  {this.state.expandedCourse.courseId +
                    " - " +
                    this.state.expandedCourse.courseName}
                </LinkUI>
              ) : (
                false
              )}

              {this.state.expandedCourse ? (
                <LinkUI color="textPrimary">Assignments</LinkUI>
              ) : (
                false
              )}
            </Breadcrumbs>
          </div>
        ) : (
          false
        )}

        <DayHeader
          expand={this.state.expand}
          today={this.props.today}
          day={this.props.day}
          date={this.props.date}
          fullDate={this.props.fullDate}
        />

        {/* Exams badge */}
        <Badge
          type="exams"
          exams={this.state.exams}
          user={this.props.user}
        ></Badge>
        {/* Assignments badge */}
        <Badge
          type="assignments"
          assignments={this.state.assignments}
          user={this.props.user}
        ></Badge>

        <div className={this.state.expand === "is-expanded" ? "flex" : ""}>
          <div className="courses">
            {lectures
              .concat(labs)
              .sort((l1, l2) => l1.startTime > l2.startTime)
              .map((course, i) => {
                return (
                  <LectureCard
                    {...course}
                    parseTime={(time) => this.parseTime(time)}
                    expand={this.state.expand} //bool to toggle expanded view
                    showFull={this.props.days <= 4} //show full zoom link when schedule is on 3-day view and below
                    handleclick={(e) => {
                      console.log(course);
                      var toExpand = course;
                      if (this.state.expand === "is-expanded") {
                        e.stopPropagation();
                        this.setState((prevState) => {
                          return {
                            expand: "is-expanded",
                            prevExpand: prevState.expand,
                          };
                        });
                        if (this.state.syllabusView) {
                          toExpand.courseId !==
                          this.state.expandedCourse.courseId
                            ? this.setState({ expandedCourse: toExpand })
                            : this.setState({
                                syllabusView: !this.state.syllabusView,
                                expandedCourse: null,
                              });
                        } else {
                          this.setState({
                            syllabusView: !this.state.syllabusView,
                            expandedCourse: toExpand,
                          });
                        }
                      } else {
                        if (this.state.syllabusView) {
                          toExpand.courseId !==
                          this.state.expandedCourse.courseId
                            ? this.setState({ expandedCourse: toExpand })
                            : this.setState({
                                syllabusView: !this.state.syllabusView,
                                expandedCourse: null,
                              });
                        } else {
                          this.setState({
                            expand: "is-expanded",
                            syllabusView: !this.state.syllabusView,
                            expandedCourse: toExpand,
                          });
                        }
                      }
                    }}
                    syllabusView={this.state.syllabusView} //bool to toggle right-hand side details
                    ref={(ref) => (this.courserefs[i] = ref)}
                  />
                );
              })}
          </div>

          {this.state.syllabusView ? (
            <SyllabusView
              course={this.state.expandedCourse}
              fullDate={this.props.fullDate}
              expand={this.state.expand}
              showFull={this.props.days <= 4}
              syllabusView={this.state.syllabusView}
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
