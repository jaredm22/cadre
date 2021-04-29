import React from "react";
import { Link } from "react-router-dom";
import BackButton from '../../components/BackButton';
import Badge from '../../components/Badge';
import DayHeader from './components/DayHeader';
import api from "../../apiHandle";
import { parseISO, getHours, getMinutes, isSameDay, format } from "date-fns";
import LectureCard from "../../components/LectureCard";
import AssignmentCard from "../../components/AssignmentCard";
import ExamCard from "../../components/AssignmentCard";
import SyllabusView from './components/SyllabusView';

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
    })
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

    console.log(lectures.concat(labs).sort());

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

  scrollTop(){ //scroll clicked lecture card to top of page
    console.log("scrolling to top...")
  }

  handleCallback = (courseId) => {
    this.scrollTop();
    console.log(courseId);
    // this.setState(childData)

    var toExpand = this.props.user.courses.find((c) => c.courseId === courseId);
    console.log(toExpand);
    // If day is expanded AND a course's syllabus view is open
    //    If clicked course is currently open course, close syllabusview
    if (this.state.expand === "is-expanded" && this.state.syllabusView) {
      if (toExpand.courseId !== this.state.expandedCourse.courseId) {
        this.setState({
          expandedCourse: toExpand,
          syllabusViewType: "course-overview",
        })
      } else { 
        this.setState({ expandedCourse: null, syllabusView: false, expand: "no-expand"});
      }
        
      // If day is expanded AND no syllabus view is open
      //    Open course's syllabus view
    } else if (this.state.expand === "is-expanded" && !this.state.syllabusView) {
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

    var { lectures, labs } = this.state;

    var section_css =
      this.state.expand === "is-expanded"
        ? {
            transform: `translateX(calc(-${
              this.state.colWidth * (this.props.i)
            }px - calc(1rem *  ${this.props.i})))`,
          }
        : { transform: `translateX(0px)`};

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
          <BackButton parentCallback={this.childCallback}/>
        ) : (false)}

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
            />
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
                .sort((l1, l2) => l1.id > l2.id)
                .map((course) => {
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
          ) : (false)}
        </div>
      </section>
    );
  }
}

export default Day;
