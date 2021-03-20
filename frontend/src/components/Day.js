import React from "react";
import PropTypes from "prop-types";
import { Dropdown, Grid, Row } from "carbon-components-react";
import api from "../apiHandle";
import {parse, getHours, getMinutes, format} from 'date-fns';
import CourseCard from './CourseCard';
import LabCard from './LabCard'

class Day extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            lectures: [],
            labs: [],
            assignments: [],
            student: this.props.student, 
            expand: 'no-expand' //classname to add to day component to indicate css transition
        }
        this.test = false;
    }

    componentDidMount() {
        // this.checkModifiedLecture(1, "2021-03-22").then(res => console.log(res) )

        // const currentDay = format(new Date(this.props.year, this.props.month, this.props.date), 'yyyy-MM-dd')
        // console.log(currentDay)

        const lectures = this.props.student.courses.filter( course => {

            if (course.days.includes(this.props.day)) {
                course.startDate = parse(course.startDate, 'yyyy-MM-dd', new Date())
                course.endDate = parse(course.endDate, 'yyyy-MM-dd', new Date())
                course.startTime = parse(course.startTime, 'HH:mm', new Date())
                course.endTime = parse(course.endTime, 'HH:mm', new Date())
                return course
            }
        })

        const labs = this.props.student.labs.filter( lab => {
            if (lab.days.includes(this.props.day)) {
                lab.startTime = parse(lab.startTime, 'HH:mm', new Date())
                lab.endTime = parse(lab.endTime, 'HH:mm', new Date())
                return lab;
            }
        })

        this.setState({
            lectures: lectures,
            labs: labs
        })  
     }

    // Check to see if modified lecture exists, if not, return lecture object 
    // checklecture(courseId, date) {
    //     const lectures = this.props.student.courses.filter( course => {
    //         const currentDay = format(new Date(String(this.props.year), String(this.props.month), String(this.props.date)), 'yyyy-MM-dd')
    //         console.log(currentDay)

    //         if (course.days.includes(this.props.day) ) {
    //             course.startDate = parse(course.startDate, 'yyyy-MM-dd', new Date())
    //             course.endDate = parse(course.endDate, 'yyyy-MM-dd', new Date())
    //             course.startTime = parse(course.startTime, 'HH:mm', new Date())
    //             course.endTime = parse(course.endTime, 'HH:mm', new Date())
    //             return course
    //         }
    //     })
    //     return lectures
    // }

    parseTime(date) {
        let hours = getHours(date)
        let minutes = getMinutes(date)

        return ((hours >= 13 ? hours-12 : hours) + ":" + (minutes == 0 ? '00' : minutes) + (hours >= 12 ? " PM" : " AM"))
    }

    render() {
        var { lectures, labs } = this.state;

        return(
            <Grid className={this.state.expand}>
                <Row>
                    <div className={this.props.today ? 'blue' : 'black'}>
                        <h3>{this.props.day}</h3>
                    </div>
                </Row>

                <Row>
                    <div className={this.props.today ? 'blue' : 'black'}> 
                        <h4>{this.props.date}</h4>
                    </div>
                </Row>
                {lectures.map( course => {return (<CourseCard course={course}/> )} )}
                {labs.map(lab => { return (<LabCard lab={lab}/>)})}
            </Grid>
        )
    }
}

export default Day;
