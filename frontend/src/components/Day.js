import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, Grid, Row } from 'carbon-components-react';
import api from '../apiHandle';


class Day extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            courselist: [],
            assgn: [],
        }
        this.test = false;
    }

    async componentDidMount() {
        await api.getStudentCourses("mlin2022@bu.edu").then(res => {
            let courses = res.data.courses
            // console.log(courses)

            const inDays = courses.map(e => { //map each course to a promise
                const check =  api.getLectureDates(e.course).then(lecture => { //promise to get class days
                    var days;
                    days = lecture.data.dates.map(e => e.date.substring(0,3)) //parse lecture days of course
                    // console.log(days)
                    // console.log(this.props.day)
                    // console.log(days.includes(this.props.day))

                    //return if course is on this day (bool) and course name in array
                    return [days.includes(this.props.day), e.course]
                })
                return check
            })
            return inDays 
        //Promise.all takes array of promises and evaluate to single array of evaluated promises
        }).then(res => Promise.all(res).then(vals => { 
            this.setState({
                courselist: vals.filter(e => { //e == ['T/F', lectuteName]
                    let mapping = e
                    return mapping[0] //filter out arrays not on today
                }).map(course => {
                    let arr = course
                    return arr[1] //parse out name of course to set state with
                })
            })
        }))

        
    }

    render() {
        var { courselist } = this.state;

        return(
            <Grid>
                <Row>
                    {this.props.month}
                </Row>

                <Row>
                <div className={this.props.today ? 'blue' : 'black'}> {this.props.date}</div>
                </Row>
                <Row>   
                    {courselist}
                    {console.log(courselist)}
                </Row>
            </Grid>
            
        )
 }}

export default Day
