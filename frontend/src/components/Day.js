import React from "react";
import PropTypes from "prop-types";
import { Dropdown, Grid, Row } from "carbon-components-react";
import api from "../apiHandle";
import { parse, getHours, getMinutes, format } from "date-fns";

class Day extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        lectures: [],
        labs: [],
        assignments: [],
        student: this.props.student,
        expand: "no-expand", //classname to add to day component to indicate css transition
        };
        this.test = false;
    }

    async componentDidMount() {

        const lectures = this.props.student.courses.filter((course) => {
            if (course.days.includes(this.props.day)) {
              course.startDate = parse(course.startDate, "yyyy-MM-dd", new Date());
              course.endDate = parse(course.endDate, "yyyy-MM-dd", new Date());
              course.startTime = parse(course.startTime, "HH:mm", new Date());
              course.endTime = parse(course.endTime, "HH:mm", new Date());
              return course;
            }
          });
      
          const labs = this.props.student.labs.filter((lab) => {
            if (lab.days.includes(this.props.day)) {
              lab.startTime = parse(lab.startTime, "HH:mm", new Date());
              lab.endTime = parse(lab.endTime, "HH:mm", new Date());
              return lab;
            }
          });
      
          this.setState({
            lectures: lectures,
            labs: labs,
          });
        
        // await api.getStudentCourses("mlin2022@bu.edu").then(res => {
        //     let courses = res.data.courses
        //     // console.log(courses)

        //     const inDays = courses.map(e => { //map each course to a promise
        //         const check =  api.getLectureDates(e.course).then(lecture => { //promise to get class days
        //             console.log(lecture)
        //             var days;
        //             days = lecture.data.dates.map(e => e.date.substring(0,3)) //parse lecture days of course
        //             // console.log(days)
        //             // console.log(this.props.day)
        //             // console.log(days.includes(this.props.day))
    }

    parseTime(date) {
        let hours = getHours(date);
        let minutes = getMinutes(date);
    
        return (
          (hours >= 13 ? hours - 12 : hours) +
          ":" +
          (minutes === 0 ? "00" : minutes) +
          (hours >= 12 ? " PM" : " AM")
        );
      }
 

  render() {
    var {lectures, labs } = this.state;
    let getEWidth = (i) =>{
        let e = document.getElementById("clndr-col-" + i)
        console.log(e.clientWidth)
        return e.clientWidth
    }
    var css = {
        transform: this.state.expand === 'is-expanded' ? `translateX(-${getEWidth(this.props.i) * (this.props.i)}px)` : `translateX(0px)`
    }
    console.log(this.props.expandWidth)

        return(
            <section id={"clndr-col-" + this.props.i} 
                    className={"day-col " + this.state.expand + (this.props.today ? " clndr-today" : "")}
                    style={css}
                    >
                        
                <div className="date">
                        <h3 className="clndr-day">{this.props.day}</h3>
                        <h4 className="clndr-date">{this.props.date}</h4>
                </div>

                <div className="courses">                
                    {lectures.map((course) => {
                            return (
                                <div key={course.id} className="course">
                                
                                <div className="course-id">
                                    <h4>{course.courseId}</h4>
                                </div>

                                <div className="fullname-course"
                                    style={{display: this.props.days < 4 ? 'block' : 'none'}}
                                >
                                    <h6>{course.courseName + " " + course.section}</h6>
                                    
                                </div>
                                <div className="time">
                                <h5> {
                                    this.parseTime(course.startTime) +
                                    " - " +
                                    this.parseTime(course.endTime)
                                } </h5>
                                </div>

                                <div className="zoomlink">
                                    <h5 className="blue"><a target="_blank" rel="noreferrer" href={course.zoomLink}>Zoom Link:</a></h5>
                                    <p style={{display: this.props.days < 4 ? 'block' : 'none'}}>
                                        <a target="_blank" rel="noreferrer" href={course.zoomLink}>{course.zoomLink}</a>
                                    </p>
                                </div>

                                <div className="xtra-info"
                                    style={{display: this.state.expand === "is-expanded" ? 'block' : 'none'}}>

                                        <ul>
                                            <li>assignments</li>
                                            <li>office hours</li>
                                            <li>other</li>
                                        </ul>
                                </div>

                                </div>
                            );
                            })}

                            {labs.map((lab) => {
                            return (
                                <div key={lab.id} className="lab">
                                <div className="course-id">
                                    <h4>{lab.labId ? lab.labId : "Lab"}</h4>
                                </div>

                                <div className="fullname-course"
                                    style={{display: this.props.days < 4 ? 'block' : 'none'}}
                                >
                                    <h4>{lab.courseName + " " + lab.section}</h4>
                                    
                                </div>
                                <div className="time">
                                <h5> {
                                    this.parseTime(lab.startTime) +
                                    " - " +
                                    this.parseTime(lab.endTime)
                                } </h5>
                                </div>

                                <div className="zoomlink">
                                    <h5 className="blue"><a target="_blank" rel="noreferrer" href={lab.zoomLink}>Zoom Link:</a></h5>
                                    <p style={{display: this.props.days < 4 ? 'block' : 'none'}}>
                                        <a target="_blank" rel="noreferrer" href={lab.zoomLink}>{lab.zoomLink}</a>
                                    </p>
                                </div>
                                </div>
                            );
                            })}
                        </div>
                    {/* {console.log(courselist)} */}
            </section>
            
        )
    }
 }


export default Day;
