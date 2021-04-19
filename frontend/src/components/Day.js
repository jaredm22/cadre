import React from "react";
import PropTypes from "prop-types";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import api from "../apiHandle";
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
import LectureCard from "./LectureCard";
import AssignmentCard from "./AssignmentCard";
import ExamCard from "./ExamCard";

// function SyllabusView(props) {
//   var viewType = props.viewType;
//   const user = props.user;

//   const assignments = [];
//     user.courses.forEach((course) => {
//       course.assignments.forEach((assignment) => {
//         assignments.push(assignment);
//       });
//     });

//   return (
//     <div className="syllabus-view" style={props.right_side_css}>
//       {assignments.map( assignment => {
//         <AssignmentCard
//           {...assignment}
//           parseTime={(time) => this.parseTime(time)}
//           expand={props.expand} //bool to toggle expanded view
//           showFull={props.days <= 4} //show full zoom link when schedule is on 3-day view and below
//           handleclick={props.showMore} //show right hand side when clicked inside expanded view
//           syllabusView={props.syllabusView} //bool to toggle right-hand side details
//         />
//       })}
//       RIGHT_SIDE_VIEW
//     </div>
//   );
// }


function Badge(props){
  console.log(props);
  if (props.type === "assignments") {
    if (props.assignments.length != 0)  {
      return (
        <button className="badge assignments">
          <h6>{props.assignments.length} Assignment{props.assignments.length == 1 ? false : 's' } Due</h6>
        </button>
      )
    } else {
      return null;
    }
  } else if (props.type === "exams") {
    if (props.exams.length != 0)  {
      return (
        <button className="badge exams">
          <h6>{props.exams.length} Exam{props.exams.length == 1 ? false : 's' }</h6>
        </button>
      )
    } else {
      return null;
    }
  }
}

function DayHeader(props){
  let style = {};
  let date = "";
  if (props.expand === "is-expanded") { 
    style={"text-align": "left", "display" : "flex", "flex-direction" : "row"};
    return (<div className={props.today ? "date-today" : "date"} style={style}>
              <h4 className="clndr-day">{format(props.fullDate, "eeee',' LLLL do")}</h4>
            </div>)
  } 
  else { 
    style={"text-align": "center",}
    return (<div className={props.today ? "date-today" : "date"} style={style}>
              <h3 className="clndr-day">{format(props.fullDate, "eee")}</h3>
              <h4 className="clndr-date">{format(props.fullDate, "dd")}</h4>
            </div>)
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
      expand: "no-expand",  //classname to add to day component to indicate css transition
      prevExpand: "no-expand", //set previous state of expansion to prevent repeated events into expanded view
      syllabusView: false,
      rightSide: {},
      colWidth: 0
    };
    this.test = false;
    this.courserefs =[] //array of refs to data in a lecture card 
  }

  componentDidUpdate(){
    if (this.state.expand === 'is-expanded'){
      let width = this.getEWidth()
      width !== this.state.colWidth && 
      this.setState({
        colWidth: width
      })
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
      colWidth: this.getEWidth()
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
  showMore(index, e) {
    if (this.state.expand === 'is-expanded'){
      // console.log(index)
      // let lecture = this.courserefs[index]
      // console.log(this.state.lectures[index])
      // this.populateRightSide(lecture)
      // // console.log("^ from show more")

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

  getEWidth() {
    let elem;
    if (this.props.days > 1){
      elem = document.querySelector('.no-expand')
    }
    let width = this.props.days > 1 ? elem.clientWidth : 0;
    
    // let e = document.getElementById("clndr-col-" + i);
    // console.log(elem);
    // console.log(this.state.colWidth)

    
    return width;
  };

  

  render() {
    // console.log("expad: " + this.state.expand)
    // console.log("prev expand: " + this.state.prevExpand)
    // console.log("colWid: " + this.state.colWidth)

    var { lectures, labs, assignments, exams } = this.state;

    var section_css = this.state.expand === "is-expanded" 
    ? {
      transform: `translateX(calc(-${this.state.colWidth * this.props.i}px - calc(1rem *  ${this.props.i})))`
    } 
    : { transform: `translateX(0px)`}


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
        {this.state.expand === "is-expanded" ?
          
          (<div className="breadcrumbs">
            <Breadcrumbs aria-label="breadcrumb">
              <Link color="inherit" onClick={() => {this.setState({expand:"no-expand"})}}>
                Weekly Overview
              </Link>
              <Link color="textPrimary" >
                CS320 - Concepts of Programming Languages
              </Link>
            </Breadcrumbs>
          </div>): 
          false
        }

        <DayHeader expand={this.state.expand} today={this.props.today} day={this.props.day} date={this.props.date} fullDate={this.props.fullDate}/>

        {/* Exams badge */}            
        <Badge type="exams" exams={this.state.exams}></Badge>
        {/* Assignments badge */}
        <Badge type="assignments" assignments={this.state.assignments}></Badge>
  
        <div className={this.state.expand === 'is-expanded' ? 'flex' : ''}>
          
          <div className="courses"> 
            {/*
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
              })}*/}

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
              className="right-side"
              style={right_side_css}
            >
              <div
                style={{display: "flex", flexDirection: "row"}}
              >
                <div 
                  className="syllabus-column"
                  style={{margin: "40px", marginTop: "0px", overflow: "auto",  textAlign: "center"}}
                >
                  <h4>Due This Week</h4>
                  {this.state.assignments.length == 0 ? 
                    <p>No assignments due this week.</p> :
                    this.state.assignments.map(assignment => {
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
                  style={{display: "flex", flexDirection: "column", textAlign: "center"}}
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
            
            <div>
              <h1>HI this right hand side</h1>
            </div>
          
          </div> */}
        </div>
      </section>
    );
  }
}

export default Day;

