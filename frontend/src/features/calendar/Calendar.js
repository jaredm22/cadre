import React from "react";
import { Slider, Grid, Row, Column, Loading } from "carbon-components-react";
import { addDays, format, formatISO } from "date-fns";
import Day from "../../components/Day";
import "./calendar.scss";
import api from "../../apiHandle";

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      today: new Date(),
      days: 3,
      dataLoaded: false,
      student: [],
      expand: "no-expand",
    };
    this.date = format(this.state.today, "d");
    this.expandRef = React.createRef();
    this.daysrefs = [];
  }

  setDayRef = (el) => {
    this.expandRef = el;
    this.daysrefs.push(this.expandRef);
    console.log(el);
  };

  // Handles day slider change to close any currently expanded days before re-rendering days
  daySliderHandler = (value) => {
    if (this.state.expand === "expanded") {
      this.daysrefs.forEach((day) => {
        if (day.state.expand === "is-expanded") {
          day.setState({ expand: "no-expand" });
        }
      });
    }
    this.setState({ days: value });
  };

  shouldComponentUpdate() {
    return this.state.days > 0;
  }

  hello() {
    console.log("I was triggered during render");
  }

  componentDidMount() {
    api.getStudentByEmail(this.props.email).then((student) => {
      console.log(student);
      this.setState({
        dataLoaded: true,
        student: student,
      });
    });
  }

  // Checks if there is a current day already expanded and if not the clicked day is expanded.
  // If a day is already expanded and day expanded is not the clicked day, then the clicked on day's expanded view is closed.
  expandDay(day, index) {
    // console.log(index)
    // console.log(day)
    // if (day > 0 && day < 4) {
    const wrapper = this.daysrefs[day].state;
    // var setexpand;

    if (this.state.expand === "no-expand") {
      this.daysrefs[day].setState({ expand: "is-expanded" });
      this.setState({ expand: "is-expanded" });
    } else {
      if (wrapper.expand === "is-expanded") {
        this.daysrefs[day].setState({ expand: "no-expand" });
        this.setState({ expand: "no-expand" });
      }
      // setexpand = (wrapper.expand === "no-expand") ? 'is-expanded' : 'no-expand'
    }
  }

  render() {
    const day_list = [];
    if (this.state.dataLoaded) {
      for (let i = 0; i < this.state.days; i++) {
        let day =
          i === 0 ? (
            <Day
              key={i}
              i={i}
              // className="today"
              today={true}
              fullDate={this.state.today}
              month={format(this.state.today, "LLL")}
              date={this.state.today.getDate()}
              day={format(this.state.today, "EEE")}
              days={this.state.days}
              ref={(ref) => (this.daysrefs[i] = ref)}
              expand="no-expand"
              // expandWidth={document.getElementById('calendar').clientWidth}
              student={this.state.student}
            />
          ) : (
            <Day
              key={i}
              i={i}
              // className={this.state.expand}
              today={false}
              fullDate={addDays(this.state.today, i)}
              month={format(addDays(this.state.today, i), "LLL")}
              date={addDays(this.state.today, i).getDate()}
              day={format(addDays(this.state.today, i), "EEE")}
              days={this.state.days}
              ref={(ref) => (this.daysrefs[i] = ref)}
              expand="no-expand"
              // expandWidth={document.getElementById('calendar').clientWidth}
              student={this.state.student}
            />
          );
        day_list.push(day);
      }
    }

    return this.state.dataLoaded ? (
      <Grid id="calendar" className="bx--grid calendar-contain" narrow={true}>
        <Row className="intro">
          {/*TODO: do a terneary operation is addDay.month == this.date.month ? show new month after emdash : don't show month */}
          <Column>
            <h3>
              Hello,{" "}
              <span className="student-name">
                {this.state.student.firstName}
              </span>
            </h3>

            <h4 aria-label="calendar" className="calendar-title">
              {format(this.state.today, "cccc") + ", "}
              {format(this.state.today, "LLLL")} {this.date}
            </h4>
          </Column>

          <Column className="slider">
            <h4> {this.state.days} days </h4>
            <div className="slider-row">
              <div>
                <div>
                  <Slider
                    ariaLabelInput="day slider"
                    className="day-slider "
                    max={5}
                    min={1}
                    value={3}
                    onChange={({ value }) => {
                      this.setState({ days: value });
                    }}
                  />
                </div>
              </div>
            </div>
          </Column>
        </Row>

        <Row className="date-head">
          {day_list.map((day, index) => {
            let handleclick = this.expandDay.bind(this, index);

            return (
              <Column
                key={day.props.date}
                // className={'a-day bx--col-lg-' + Math.floor(16 / this.state.days)}
                className="a-day"
                lg={Math.floor(16 / this.state.days)}
                onClick={handleclick}
              >
                {day}
              </Column>
            );
          })}
        </Row>
      </Grid>
    ) : (
      <p>loading</p>
    );
  }
}

export default Calendar;
