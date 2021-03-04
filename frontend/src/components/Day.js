import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row } from 'carbon-components-react';
import api from '../apiHandle';


class Day extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            courses: []
        }
    }

    componentDidMount() {
        api.getStudentCourses("mlin2022@bu.edu").then(res => {
            this.setState({
                courses: res.data
            })
        }).then(courses => console.log(courses), console.log("rejected"))
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
                    {/* {console.log(courses)} */}
                    {courses.courses.map(e => <div> {e} </div>)}
                </Row>
            </Grid>
            
        )
 }}

export default Day
