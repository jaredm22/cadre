import { Dropdown, Grid, Row } from "carbon-components-react";
import { parse, getHours, getMinutes, format } from "date-fns";
import React from "react";

export default class CourseCard extends React.Component {
  parseTime(date) {
    let hours = getHours(date);
    let minutes = getMinutes(date);

    return (
      (hours >= 13 ? hours - 12 : hours) +
      ":" +
      (minutes == 0 ? "00" : minutes) +
      (hours >= 12 ? " PM" : " AM")
    );
  }

  render() {
    const course = this.props.course;

    return (
      <Row key={course.id} className="course">
        <ul>
          <li>
            <h4>
              {course.courseId +
                " - " +
                course.courseName +
                " " +
                course.section}
            </h4>
          </li>

          <li>
            <p>
              {this.parseTime(course.startTime) +
                " - " +
                this.parseTime(course.endTime)}
            </p>
          </li>

          <li>
            <a href={course.zoomLink}>Zoom Link</a>
          </li>

          <li>
            <p>Assignments</p>
          </li>

          <li>
            <p>Lecture Slides</p>
          </li>

          <li>
            <p>Office Hours</p>
          </li>
        </ul>

        <br></br>
        <br></br>
        <br></br>
      </Row>
    );
  }
}
