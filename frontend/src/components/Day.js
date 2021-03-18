import React from "react";
import PropTypes from "prop-types";
import { Dropdown, Grid, Row } from "carbon-components-react";
import api from "../apiHandle";

class Day extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            courses: [],
            labs: [],
            todayCourse: [],
            todayLabs: [],
            // assgn: [],
            expand: 'no-expand' //classname to add to day component to indicate css transition
        }
        this.test = false;
    }

    async componentDidMount() {

        api.getStudentByEmail("jmin@bu.edu").then(student => {
            // console.log(student)
            // console.log(student.courses)
            // student.courses.forEach(element => {
            //     console.log(element.days)
            // });
            const todayClasses = student.courses.filter( course => {
                if (course.days.includes(this.props.day)) {
                    return course
                }
            })
            console.log(student.labs)

            const todayLabs = student.labs.filter( lab => {
                if (lab.days.includes(this.props.day)) {
                    console.log(lab)
                    return lab;
                }
            })

            this.setState({
                courses: student.courses,
                labs: student.labs,
                todayCourse: todayClasses,
                todayLabs: todayLabs
            })
        })
    }
 

    render() {
        var { todayCourse, todayLabs } = this.state;
        console.log(todayLabs)

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
                
                {todayCourse.map( course => {
                    return (
                        <Row key={course.id}
                            className="course">
                            {course.courseId}<br></br>
                            {course.courseName + " " + course.section} 
                        </Row>
                    )}
                )}

                {todayLabs.map( lab => {
                        return (
                            <Row key={lab.id}
                                className="lab">
                                {lab.course.courseId}<br></br>
                                {lab.course.courseName + " " + lab.course.section}
                            </Row>
                        )}
                )}
            </Grid>
            
        )
 }
}

export default Day;
