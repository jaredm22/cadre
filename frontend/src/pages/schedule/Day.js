import React from "react";
import { Link } from "react-router-dom";
import BackButton from "../../components/BackButton";
import Badge from "../../components/Badge";
import DayHeader from "./components/DayHeader";
import api from "../../apiHandle";
import { parseISO, isSameDay } from "date-fns";
import LectureCard from "../../components/LectureCard";
import AssignmentCard from "../../components/AssignmentCard";
import ExamCard from "../../components/AssignmentCard";
import SyllabusView from "./components/SyllabusView";

class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lectures: [],
      labs: [],
      assignments: [],
      exams: [],
      expand: "no-expand", //classname to add to day component to indicate css transition
      prevExpand: "no-expand", //set previous state of expansion to prevent repeated events into expanded view
      expandedCourse: null,
      syllabusView: false,
      syllabusViewType: "course-overview",
      colWidth: 0,
    };
    this.test = false;
  }

  backButtonCallback() {
    this.setState({
      expandedCourse: null,
      syllabusView: false,
      expand: "no-expand",
    });
  }

  componentDidMount() {
    const lectures = this.props.user.courses.filter((course) => {
      if (course.days.includes(this.props.day)) {
        return course;
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

    const sortedLectures = lectures.sort(
      (l1, l2) => this.parseTime(l1.startTime) - this.parseTime(l2.startTime)
    );

    this.setState({
      lectures: sortedLectures,
      assignments: assignments,
      exams: exams,
      colWidth: this.getEWidth(),
    });
  }

  shouldComponentUpdate() {
    return true;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.day !== this.props.day) {
      this.setState({
        day: this.props.day,
      });
    }
    if (this.state.expand === "is-expanded") {
      let width = this.getEWidth();
      width !== this.state.colWidth &&
        this.setState({
          colWidth: width,
        });
    }
  }

  parseTime = (time) => {
    let t = time.split(":");
    let hours = parseInt(t[0]);
    let minutes = parseInt(t[1]) / 60;

    return hours + minutes;
  };

  scrollTop() {
    //scroll clicked lecture card to top of page
    console.log("scrolling to top...");
  }

  handleCallback = (courseId) => {
    var toExpand = this.props.user.courses.find((c) => c.courseId === courseId);
    console.log(toExpand);
    // If day is expanded AND a course's syllabus view is open
    //    If clicked course is currently open course, close syllabusview
    if (this.state.expand === "is-expanded" && this.state.syllabusView) {
      if (toExpand.courseId !== this.state.expandedCourse.courseId) {
        this.setState({
          expandedCourse: toExpand,
          syllabusViewType: "course-overview",
        });
      } else {
        this.setState({
          expandedCourse: null,
          syllabusView: false,
          expand: "no-expand",
        });
      }

      // If day is expanded AND no syllabus view is open
      //    Open course's syllabus view
    } else if (
      this.state.expand === "is-expanded" &&
      !this.state.syllabusView
    ) {
      this.setState({
        syllabusView: true,
        expandedCourse: toExpand,
        syllabusViewType: "course-overview",
      });

      // If day is not expanded
      //    Expand day and open clicked course's syllabus view
    } else if (this.state.expand === "no-expand") {
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
    this.props.parentCallback(data);
  };

  getEWidth() {
    let elem;
    if (this.props.days > 1) {
      elem = document.querySelector(".no-expand");
    }
    return this.props.days > 1 ? elem.clientWidth : 0;
  }

  render() {
    var {
      lectures,
      expandedCourse,
      syllabusView,
      syllabusViewType,
      colWidth,
      expand,
      assignments,
      exams,
    } = this.state;
    var { user, today, i, fullDate, days } = this.props;

    var section_css =
      expand === "is-expanded"
        ? {
            transform: `translateX(calc(-${
              colWidth * i
            }px - calc(1rem *  ${i})))`,
          }
        : { transform: `translateX(0px)` };

    if (expandedCourse !== null) {
      const indexExpanded = lectures.findIndex(
        (lec) => lec.courseId === expandedCourse.courseId
      );
      lectures.splice(indexExpanded, 1);
      lectures.unshift(expandedCourse);
    } else {
      lectures.sort(
        (l1, l2) => this.parseTime(l1.startTime) - this.parseTime(l2.startTime)
      );
    }

    return (
      <section
        id={"clndr-col-" + i}
        className={"day-col " + expand + (today ? " clndr-today" : "")}
        style={section_css}
      >
        {expand === "is-expanded" ? (
          <BackButton parentCallback={this.childCallback} type="day-view" />
        ) : (
          false
        )}

        <DayHeader
          expand={expand}
          today={today}
          fullDate={fullDate}
          parentCallback={this.childCallback}
        />

        {expand === "no-expand" && (
          //Exams badge
          <div className="badge-contain">
            <Badge type="exams" exams={exams} user={user} />
            {/* // Assignments badge */}
            <Badge type="assignments" assignments={assignments} user={user} />
          </div>
        )}

        <div className={expand === "is-expanded" ? "flex" : ""}>
          <div className="courses">
            {lectures.length != 0 ? (
              lectures.map((course) => {
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
                  />
                );
              })
            ) : (
              <div style={{ textAlign: "center" }}>
                <h5>No classes</h5>
              </div>
            )}
          </div>

          {syllabusView ? (
            <SyllabusView
              user={this.props.user}
              course={expandedCourse}
              fullDate={fullDate}
              expand={expand}
              showFull={days <= 4}
              syllabusView={syllabusView}
              type={syllabusViewType}
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
