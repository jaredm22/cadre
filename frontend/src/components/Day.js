import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row } from 'carbon-components-react';
import api from '../apiHandle';


class Day extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            courses: [{
                className: "bio",
                days: "tue,thur"
            }, 
            {
                className: "chem",
                days: "mon, wedn, thur"
            }
        ]
        }
    }

    componentDidMount() {
        api.getStudentCourses("mlin2022@bu.edu").then(res => console.log(res))
    }

    render() {
        return(
            <Grid>
                <Row>
                    {this.props.month}
                </Row>
                <Row>
                <div className={this.props.today ? 'blue' : 'black'}> {this.props.date}</div>
                </Row>
            </Grid>
            
        )
 }}

export default Day
