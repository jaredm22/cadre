import { Dropdown, Grid, Row } from "carbon-components-react";
import { parse, getHours, getMinutes, format } from "date-fns";
import React from "react";

export default class LabCard extends React.Component {
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
    const lab = this.props.lab;

    return (
      <Row key={lab.id} className="lab">
        <ul>
          <li>
            <h4>
              {lab.course.courseId +
                " - " +
                lab.course.courseName +
                " " +
                lab.section}
            </h4>
          </li>

          <li>
            <p>
              {this.parseTime(lab.startTime) +
                " - " +
                this.parseTime(lab.endTime)}
            </p>
          </li>

          <li>
            <a href={lab.zoomLink}>Zoom Link</a>
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
