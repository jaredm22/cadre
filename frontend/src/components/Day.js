import React from "react";
import PropTypes from "prop-types";
import { Dropdown, Grid, Row } from "carbon-components-react";
import api from "../apiHandle";
import { parse, getHours, getMinutes, format } from "date-fns";
import CourseCard from "./CourseCard";
import LabCard from "./LabCard";

class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lectures: [],
      labs: [],
      assignments: [],
      expand: "no-expand", //classname to add to day component to indicate css transition
    };
    this.test = false;
  }

  async componentDidMount() {
    const lectures = this.props.student.courses.filter((course) => {
      if (course.days.includes(this.props.day)) {
        course.startDate = parse(course.startDate, "yyyy-MM-dd", new Date());
        course.endDate = parse(course.endDate, "yyyy-MM-dd", new Date());
        return course;
      }
    });

    const labs = this.props.student.labs.filter((lab) => {
      if (lab.days.includes(this.props.day)) {
        return lab;
      }
    });

    this.setState({
      lectures: lectures,
      labs: labs,
    });
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
    var { lectures, labs } = this.state;
    let getEWidth = (i) => {
      let e = document.getElementById("clndr-col-" + i);
      console.log(e.clientWidth);
      return e.clientWidth;
    };
    var css = {
      transform:
        this.state.expand === "is-expanded"
          ? `translateX(-${getEWidth(this.props.i) * this.props.i}px)`
          : `translateX(0px)`,
    };
    console.log(this.props.expandWidth);

    return (
      //       <Grid className={this.state.expand}>
      //         <Row>
      //           <div className={this.props.today ? "blue" : "black"}>
      //             <h3>{this.props.day}</h3>
      //           </div>
      //         </Row>

      //         <Row>
      //           <div className={this.props.today ? "blue" : "black"}>
      //             <h4>{this.props.date}</h4>
      //           </div>
      //         </Row>
      //         {lectures.map((course) => {
      //           return <CourseCard course={course} />;
      //         })}
      //         {labs.map((lab) => {
      //           return <LabCard lab={lab} />;
      //         })}
      //       </Grid>
      <section
        id={"clndr-col-" + this.props.i}
        className={
          "day-col " +
          this.state.expand +
          (this.props.today ? " clndr-today" : "")
        }
        style={css}
      >
        <div className="date">
          <h3 className="clndr-day">{this.props.day}</h3>
          <h4 className="clndr-date">{this.props.date}</h4>
        </div>

        <div className="courses">
          {lectures.map((course) => {
            return (
              <CourseCard
                {...course}
                expand={this.state.expand}
                showFull={this.props.days < 4}
              />
            );
          })}
          {labs.map((lab) => {
            return (
              <LabCard
                {...lab}
                expand={this.state.expand}
                showFull={this.props.days < 4}
              />
            );
          })}
        </div>
      </section>
    );
  }
}

export default Day;
