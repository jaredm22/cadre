import React from "react";
import PropTypes from "prop-types";
import { Dropdown, Grid, Row } from "carbon-components-react";
import api from "../apiHandle";

class Day extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            courselist: [],
            assgn: [],
            expand: 'no-expand' //classname to add to day component to indicate css transition
        }
        this.test = false;
    }

    async componentDidMount() {

        api.getStudents().then(res => {
            let teststudent = res.data[0] 
            let courses = teststudent.courses
            this.setState({
                courselist: teststudent.courses
            })
            console.log(courses)
        })
        
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
 

  render() {
    var { courselist } = this.state;

        return(
            <section id="calendar-days" className={"day-col " + this.state.expand + (this.props.today ? " clndr-today" : "")}>
                <div class="date">
                        <h3 className="clndr-day">{this.props.day}</h3>
                        <h4 className="clndr-date">{this.props.date}</h4>
                </div>
                {courselist.map((e, i) => { return (
                <div key={i}
                    className="course">
                </div>
                )})}
                    {/* {console.log(courselist)} */}
            </section>
            
        )
 }
}

export default Day;
