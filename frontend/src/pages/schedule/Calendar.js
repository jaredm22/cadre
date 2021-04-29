import React from "react";
import { Slider, Grid, Row, Column, Loading } from "carbon-components-react";
import { addDays, format } from "date-fns";
import Day from "./Day";
import api from "../../apiHandle";

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      today: props.day,
      days: 3, //number of days shown in schedule page
      dataLoaded: false,
      user: props.user,
      expand: "no-expand",
    };
    this.date = format(this.state.today, "d");
    this.daysrefs = [];
  }

  // Handles day slider change to close any currently expanded days before re-rendering days
  daySliderHandler = (value) => {
    if (this.state.expand === "expanded") {
      this.daysrefs.forEach((day) => {
        if (day.state.expand === "is-expanded") {
          day.setState((prevState) => {
            return {
              expand: "no-expand",
              prevExpand: prevState.expand,
            };
          });
        }
      });
    }
    this.setState({ days: value });
  };

  shouldComponentUpdate() {
    return this.state.days > 0;
  }

  componentDidMount() {
    this.setState({
      user: this.props.user,
      today: this.props.day,
      dataLoaded: true,
    });
  }

  handleCallback = (data) => {
    this.setState(data);
  };

  // toggles the state of the clicked day component and calendar component to expand/no-expand
  expandDay(index, day) {
    // console.log(index);
    // console.log(day);

    const wrapper = this.daysrefs[index].state;
    // console.log(wrapper);
    // var setexpand;

    if (this.state.expand === "no-expand") {
      this.daysrefs[index].setState((prevState) => {
        return {
          expand: "is-expanded",
          prevExpand: prevState.expand,
        };
      });
      this.setState({ expand: "is-expanded" });
    } else {
      if (wrapper.expand === "is-expanded") {
        // console.log("minize!");
        this.daysrefs[index].setState((prevState) => {
          return {
            expand: "no-expand",
            prevExpand: prevState.expand,
          };
        });
        this.setState({ expand: "no-expand" });
      }
    }
  }

  //goes through Day components and finds out which index day is expanded
  findExpandedDay() {
    let dayidx;
    for (const [index, val] of this.daysrefs.entries()) {
      let dayrefState = val.state;
      if (dayrefState.expand === "is-expanded") {
        console.log(index);
        dayidx = index;
        break;
      }
    }
    return dayidx;
  }

  changeDayVal(value) {
    console.log(this.state.expand);
    if (this.state.expand === "is-expanded") {
      let day = this.findExpandedDay();
      console.log(day);
      this.expandDay(day, null);
      this.state.expand === "is-expanded" && this.setState({ days: value });
    }
    console.log(this.state.expand);
    console.log(value);
    this.setState({ expand: "no-expand", days: value });
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
              today={true}
              fullDate={this.state.today}
              day={format(this.state.today, "EEE")}
              days={this.state.days}
              expand="no-expand"
              parentCallback={this.handleCallback}
              user={this.state.user}
            />
          ) : (
            <Day
              key={i}
              i={i}
              today={false}
              fullDate={addDays(this.state.today, i)}
              day={format(addDays(this.state.today, i), "EEE")}
              days={this.state.days}
              expand="no-expand"
              parentCallback={this.handleCallback}
              user={this.state.user}
            />
          );
        day_list.push(day);
      }
    }

    return (
      <Grid id="calendar" className="bx--grid calendar-contain" narrow={true}>
        <Row className="intro">
          {/*TODO: do a terneary operation is addDay.month == this.date.month ? show new month after emdash : don't show month */}
          <Column>
            <h3>
              Hello,{" "}
              <span className="user-first-name">
                {this.state.user.firstName}
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
                <Slider
                  ariaLabelInput="day slider"
                  className="day-slider"
                  max={5}
                  min={1}
                  value={3}
                  onChange={({ value }) => this.changeDayVal(value)}
                />
              </div>
            </div>
          </Column>
        </Row>

        {this.state.dataLoaded ? (
          <Row className="date-head">
            {day_list.map((day) => {
              return (
                <Column
                  key={day.props.date}
                  className="a-day"
                  lg={Math.floor(16 / this.state.days)}
                >
                  {day}
                </Column>
              );
            })}
          </Row>
        ) : (
          false
        )}
      </Grid>
    );
  }
}

export default Calendar;
