import React from "react";
import PropTypes from "prop-types";
import { Dropdown, Grid, Row } from "carbon-components-react";
import api from "../apiHandle";
import {
  parseISO,
  getHours,
  getMinutes,
  isSameDay,
  compareAsc,
} from "date-fns";
import LectureCard from "./LectureCard";
import LabCard from "./LabCard";
import AssignmentCard from "./AssignmentCard";
import ExamCard from "./ExamCard";

class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lectures: [],
      labs: [],
      assignments: [],
      exams: [],
      expand: "no-expand", //classname to add to day component to indicate css transition
    };
    this.test = false;
  }

  componentDidMount() {
    const lectures = this.props.student.courses.filter((course) => {
      if (course.days.includes(this.props.day)) {
        return course;
      }
    });

    const labs = this.props.student.labs.filter((lab) => {
      if (lab.days.includes(this.props.day)) {
        return lab;
      }
    });

    const assignments = [];
    this.props.student.courses.forEach((course) => {
      course.assignments.forEach((assignment) => {
        const dueDate = parseISO(assignment.dueDate, "yyyy-MM-dd", new Date());
        if (isSameDay(dueDate, this.props.fullDate)) {
          assignments.push(assignment);
        }
      });
    });

    const exams = [];
    this.props.student.courses.forEach((course) => {
      course.exams.map((exam) => {
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

  render() {
    var { lectures, labs, assignments, exams } = this.state;
    let getEWidth = (i) => {
      let e = document.getElementById("clndr-col-" + i);
      console.log(e.clientWidth);
      return e.clientWidth;
    };
    var css = {
      transform:
        this.state.expand === "is-expanded"
          ? `translateX(-${getEWidth(this.props.i) * this.props.i}px)`
          : `translateX(0px)`,
    };
    console.log(exams);
    console.log(exams.sort((e1, e2) => e1.dueTime > e2.dueTime));

    return (
      <section
        id={"clndr-col-" + this.props.i}
        className={
          "day-col " +
          this.state.expand +
          (this.props.today ? " clndr-today" : "")
        }
        style={css}
      >
        {this.props.today ? (
          <div className="date-today">
            <h3 className="clndr-day">{this.props.day}</h3>
            <h4 className="clndr-date">{this.props.date}</h4>
          </div>
        ) : (
          <div className="date">
            <h3 className="clndr-day">{this.props.day}</h3>
            <h4 className="clndr-date">{this.props.date}</h4>
          </div>
        )}

        <div className="courses">
          {assignments
            .sort((a1, a2) => a1.dueTime > a2.dueTime)
            .map((assignment) => {
              return (
                <AssignmentCard
                  {...assignment}
                  parseTime={(time) => this.parseTime(time)}
                  expand={this.state.expand}
                  showFull={this.props.days <= 4}
                />
              );
            })}
          {exams
            .sort((e1, e2) => e1.dueTime > e2.dueTime)
            .map((exam) => {
              return (
                <ExamCard
                  {...exam}
                  parseTime={(time) => this.parseTime(time)}
                  expand={this.state.expand}
                  showFull={this.props.days <= 4}
                />
              );
            })}
          {lectures
            .concat(labs)
            .sort((l1, l2) => l1.startTime > l2.startTime)
            .map((course) => {
              return (
                <LectureCard
                  {...course}
                  parseTime={this.parseTime}
                  expand={this.state.expand}
                  showFull={this.props.days <= 4}
                />
              );
            })}

          {/* {labs
            .sort((lab1,lab2) => lab1.startTime > lab2.startTime)
            .map((lab) => {
              return (
              <LabCard
                {...lab}
                parseTime={(time) => this.parseTime(time)}
                expand={this.state.expand}
                showFull={this.props.days <= 4}
              />
              );
            })} */}
        </div>
      </section>
    );
  }
}

export default Day;
