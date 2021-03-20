import React from "react";
import { Slider, Grid, Row, Column } from "carbon-components-react";
import { addDays, format } from "date-fns";
import Day from "../../components/Day";
import "./calendar.scss";
import api from "../../apiHandle";

//TODO: keep expand state in calendar component to check if at most one
//Day component is working

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
    this.daysrefs = {};
  }

  setDayRef = (el) => {
    this.expandRef = el;
    this.daysrefs.push(this.expandRef);
    console.log(el);
  };

  shouldComponentUpdate() {
    return this.state.days > 0;
  }

  hello() {
    console.log("I was triggered during render");
  }

  componentDidMount() {
    api.getStudentByEmail("jmin@bu.edu").then((student) => {
      console.log(student);
      this.setState({
        dataLoaded: true,
        student: student,
      });
    });
  }

  expandDay(day, index) {
    // console.log(index)
    // console.log(day)
    // if (day > 0 && day < 4) {
    const wrapper = this.daysrefs[day].state;
    var setexpand;

    if (this.state.expand === "no-expand") {
      setexpand = wrapper.expand === "no-expand" ? "is-expanded" : "no-expand";
    } else {
    }

    this.daysrefs[day].setState({ expand: setexpand });
    console.log(this.daysrefs);
    console.log(this.daysrefs[day].props.className);
    // wrapper.className = wrapper.className.includes('is-expanded') ? 'a-day' : 'a-day is-expanded'
    // }
  }

  render() {
    const day_list = [];

    if (this.state.dataLoaded) {
      for (let i = 0; i < this.state.days; i++) {
        let day =
          i === 0 ? (
            <Day
              key={i}
              // className="today"
              today={true}
              month={format(this.state.today, "LLL")}
              date={this.state.today.getDate()}
              day={format(this.state.today, "EEE")}
              year={format(this.state.today, "yyyy")}
              ref={(ref) => (this.daysrefs[i] = ref)}
              expand="no-expand"
              student={this.state.student}
            />
          ) : (
            <Day
              key={i}
              // className={this.state.expand}
              today={false}
              month={format(addDays(this.state.today, i), "LLL")}
              date={addDays(this.state.today, i).getDate()}
              day={format(addDays(this.state.today, i), "EEE")}
              year={format(addDays(this.state.today, i), "yyyy")}
              ref={(ref) => (this.daysrefs[i] = ref)}
              expand="no-expand"
              student={this.state.student}
            />
          );
        day_list.push(day);
      }
    }

    return (
      <Grid className="bx--grid calendar-contain" narrow={true}>
        <Row>
          {/*TODO: do a terneary operation is addDay.month == this.date.month ? show new month after emdash : don't show month */}
          <h4 aria-label="calendar" className="calendar-title">
            {" "}
            {format(this.state.today, "LLLL")} {this.date}
            {this.state.days > 1
              ? " — " +
                format(addDays(this.state.today, this.state.days), "LLLL") +
                " " +
                addDays(this.state.today, this.state.days - 1).getDate()
              : ""}
          </h4>
        </Row>

        <Row className="slider-row">
          <Column lg={4} md={2} sm={0}>
            <div>
              <p>{this.state.days} days</p>
              <Slider
                ariaLabelInput="day slider"
                className="day-slider "
                max={5}
                min={1}
                value={3}
                onChange={({ value }) => this.setState({ days: value })}
              />
            </div>
          </Column>
        </Row>

        <Row className="date-head">
          {day_list.map((el, index) => {
            let handleclick = this.expandDay.bind(this, index);

            return (
              <Column
                key={el.props.date}
                className={"a-day " + this.state.expand}
                onClick={handleclick}
              >
                {el}

                {/* {el} */}
              </Column>
            );
          })}
        </Row>
      </Grid>
    );
  }
}

export default Calendar;
