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
      expand: "no-expand",  //classname to add to day component to indicate css transition
      prevExpand: "no-expand", //set previous state of expansion to prevent repeated events into expanded view
      syllabusView: false,
      rightSide: {}
    };
    this.test = false;
    this.courserefs =[] //array of refs to data in a lecture card 
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

  populateRightSide = (lecture) => {


  }

  //On-Click function that shows right hand side expanded view for class on 
  //course card clikck
  showMore(index, e) {
    if (this.state.expand === 'is-expanded'){
      console.log(index)
      let lecture = this.courserefs[index]
      console.log(lecture)
      console.log("^ from show more")

      e.stopPropagation();
      this.setState( prevState => {
        return { 
          expand: "is-expanded",
          prevExpand: prevState.expand
        }
      });
      this.setState({syllabusView: !this.state.syllabusView})
      // console.log(showExtra)
    }
  }

  

  render() {
    console.log(this.state.expand)
    var { lectures, labs, assignments, exams } = this.state;
    let getEWidth = (i) => {
      let e = document.getElementById("clndr-col-" + i);
      console.log(e.clientWidth);
      return e.clientWidth;
    };
    var section_css;
    if (this.state.expand === "is-expanded" && this.state.expand !== this.state.prevExpand){
      
      section_css = {
        transform: `translateX(-${getEWidth(this.props.i) * this.props.i}px)`
      }
    } 
    //because we translateX relative to initial position, everytime we update state we start from 0 of component's init position
    //solution: have to pass the previous translate value to state and use that value on this condition URGHHHHH 
    else if (this.state.expand === "is-expanded" && this.state.syllabusView) {
      section_css = {
        transform: `translateX(-218px)`
      }
    } 
    else if (this.state.expand === "no-expand" && this.state.expand !== this.state.prevExpand) {
      section_css = {
        transform: `translateX(0px)`
      }
    }
    // var section_css =  
    // ? {
    //   transform: this.state.expand === "no-expand" 
    //     ? `translateX(0px)`
    //     : `translateX(-${getEWidth(this.props.i) * this.props.i}px)`
    // } : {};

    var right_side_css = {
      display: this.state.expand === "is-expanded" && this.state.syllabusView ? "block" : "none"
    };
    // console.log(exams);
    // console.log(exams.sort((e1, e2) => e1.dueTime > e2.dueTime));

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
                  //***IMPORTANT*** WILL NOT SHOW ASSIGNMENT OR EXAM CARD COMPONENT IN SCHEDULE, ONLY IN EXPANDED VIEW
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
                    handleclick={this.showMore.bind(this, i)} //show right hand side when clicked inside expanded view
                    syllabusView={this.state.syllabusView} //bool to toggle right-hand side details
                    ref = {ref => this.courserefs[i] = ref}
                  />
                );
              })}
          </div>
          <div
            className = "right-side"
            style={right_side_css}
          > 
            RIGHT_SIDE_VIEW
          
          </div>
        </div>
      </section>
    );
  }
}

export default Day;
