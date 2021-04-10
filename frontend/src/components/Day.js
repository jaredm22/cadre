import React from "react";
import PropTypes from "prop-types";
import { Dropdown, Grid, Row, Column } from "carbon-components-react";
import api from "../apiHandle";
import {
  parseISO,
  getHours,
  getMinutes,
  isSameDay,
  isSameWeek,
  compareAsc,
  isThisHour,
} from "date-fns";
import LectureCard from "./LectureCard";
import AssignmentCard from "./AssignmentCard";
import ExamCard from "./ExamCard";

class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lectures: [],
      labs: [],
      assignments: [],
      all: [],
      exams: [],
      expand: "no-expand",  //classname to add to day component to indicate css transition
      syllabusView: false
    };
    this.test = false;
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

    const all = [];
    this.props.user.courses.forEach((course) => {
      course.assignments.forEach((assignment) => {
        all.push(assignment);
      });
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
      all: all
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
  showMore(e) {
    if (this.state.expand === 'is-expanded'){
      console.log(e)
      console.log("^ from show more")
      e.stopPropagation();
      this.setState({syllabusView: !this.state.syllabusView})
      // console.log(showExtra)
    }
  }

  

  render() {
    var { lectures, labs, assignments, exams } = this.state;
    let getEWidth = (i) => {
      let e = document.getElementById("clndr-col-" + i);
      console.log(e.clientWidth);
      return e.clientWidth;
    };
    var section_css = {
      transform:
        this.state.expand === "is-expanded"
          ? `translateX(-${getEWidth(this.props.i) * this.props.i}px)`
          : `translateX(0px)`,
    };

    var right_side_css = {
      display: this.state.expand === "is-expanded" && this.state.syllabusView ? "block" : "none"
    };
    // console.log(exams);
    // console.log(exams.sort((e1, e2) => e1.dueTime > e2.dueTime));

    console.log(this.state.all)
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

        <div className={this.state.expand === 'is-expanded' ? 'flex' : ''}>
          <div className="courses">
            {assignments
              .sort((a1, a2) => a1.dueTime > a2.dueTime)
              .map((assignment) => {
                return (
                  <AssignmentCard
                    {...assignment}
                    parseTime={(time) => this.parseTime(time)}
                    expand={this.state.expand} //bool to toggle expanded view
                    showFull={this.props.days <= 4} //show full zoom link when schedule is on 3-day view and below
                    handleclick={this.showMore.bind(this)} //show right hand side when clicked inside expanded view
                    syllabusView={this.state.syllabusView} //bool to toggle right-hand side details
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
              .map((course, i) => {

                return (
                  <LectureCard
                    {...course}
                    parseTime={(time) => this.parseTime(time)}
                    expand={this.state.expand} //bool to toggle expanded view
                    showFull={this.props.days <= 4} //show full zoom link when schedule is on 3-day view and below
                    handleclick={this.showMore.bind(this)} //show right hand side when clicked inside expanded view
                    syllabusView={this.state.syllabusView} //bool to toggle right-hand side details                  expand={this.state.expand}
                  />
                );
              })}
          </div>
          
            <div
              className="right_side"
              style={right_side_css}
            >
              <div
                style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}
              >
                <div 
                  className="syllabus-column"
                  style={{ margin: "40px", marginTop: "0px", overflow: "auto"}}
                >
                  <h4>Due This Week</h4>
                  {this.state.length == 0 ? 
                    <p>No assigments due this week.</p> :
                    this.state.all.map(assignment => {
                      const dueDate = parseISO(assignment.dueDate, "yyyy-MM-dd", new Date());
                      if (isSameWeek(dueDate, this.props.fullDate)) {
                        return(
                          
                          <AssignmentCard
                            {...assignment}
                            parseTime={(time) => this.parseTime(time)}
                            expand={this.state.expand} //bool to toggle expanded view
                            showFull={this.props.days <= 4} //show full zoom link when schedule is on 3-day view and below
                            handleclick={this.showMore.bind(this)} //show right hand side when clicked inside expanded view
                            syllabusView={this.state.syllabusView} //bool to toggle right-hand side details
                          />
                        )
                      }
                    })}
                </div>

                
                <div
                  style={{display: "flex", flexDirection: "column"}}
                >
                  <h4>Upcoming Assignments</h4>
                  {this.state.length == 0 ? 
                    <p>No assigments due this week.</p> :
                    this.state.all.map(assignment => {
                    const dueDate = parseISO(assignment.dueDate, "yyyy-MM-dd", new Date());
                    if (!isSameWeek(dueDate, this.props.fullDate)) {
                      return(
                        <AssignmentCard
                          {...assignment}
                          parseTime={(time) => this.parseTime(time)}
                          expand={this.state.expand} //bool to toggle expanded view
                          showFull={this.props.days <= 4} //show full zoom link when schedule is on 3-day view and below
                          handleclick={this.showMore.bind(this)} //show right hand side when clicked inside expanded view
                          syllabusView={this.state.syllabusView} //bool to toggle right-hand side details
                        />
                      )
                    }
                  })}
                </div>
              </div>
            </div>
          
          {/* <SyllabusView
            style={right_side_css}
            className="right_side"
            viewType="assignments"
            user={this.props.user}
            expand={this.state.expand} //bool to toggle expanded view
            showFull={this.props.days <= 4} //show full zoom link when schedule is on 3-day view and below
            handleclick={this.showMore.bind(this)} //show right hand side when clicked inside expanded view
          /> */}
          {/* <div
            className = "right-side"
            style={right_side_css}
          > 
            RIGHT_SIDE_VIEW
          
          </div> */}
        </div>
      </section>
    );
  }
}

export default Day;


function SyllabusView(props) {
  var viewType = props.viewType;
  const user = props.user;

  const assignments = [];
    user.courses.forEach((course) => {
      course.assignments.forEach((assignment) => {
        assignments.push(assignment);
      });
    });

  return (
    <div className="syllabus-view" style={props.right_side_css}>
      {assignments.map( assignment => {
        <AssignmentCard
          {...assignment}
          parseTime={(time) => this.parseTime(time)}
          expand={props.expand} //bool to toggle expanded view
          showFull={props.days <= 4} //show full zoom link when schedule is on 3-day view and below
          handleclick={props.showMore} //show right hand side when clicked inside expanded view
          syllabusView={props.syllabusView} //bool to toggle right-hand side details
        />
      })}
      RIGHT_SIDE_VIEW
    </div>
  );
}