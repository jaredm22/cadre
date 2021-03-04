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

    componentDidMount() {
        api.getStudentCourses("mlin2022@bu.edu").then(res => {
            let courses = res.data.courses
            console.log(courses)
            
            courses.filter(e => {
                var days;
                api.getLectureDates(e.course).then(lecture => {
                    //map dates object to array of parsed days
                    console.log(lecture)
                    days = lecture.data.dates.map(e => e.date.substring(0,3))
                    console.log(days)

                    this.test = (this.props.day in days)

                    
                })
                console.log(courses)
                return this.test
            })

            this.setState({
                courselist: courses
            })
        })

        
    }

    render() {
        var { courses } = this.state;

        return(
            <Grid>
                <Row>
                    {this.props.month}
                </Row>

                <Row>
                <div className={this.props.today ? 'blue' : 'black'}> {this.props.date}</div>
                </Row>
                <Row>   
                    {console.log(courses)}
                </Row>
            </Grid>
            
        )
 }}

export default Day
