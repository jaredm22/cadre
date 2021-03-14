import React from "react";
import { Slider, Grid, Row, Column } from "carbon-components-react";
import { addDays, format } from "date-fns";
import Day from "../../components/Day";
import "./calendar.scss";

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      today: new Date(),
      days: 3,
    };
    this.date = format(this.state.today, "d");
    this.expandRef = React.createRef();
  }

  setDayRef = (el) => {
    this.expandRef = el;
  };

  shouldComponentUpdate() {
    return this.state.days > 0;
  }

  hello() {
    console.log("I was triggered during render");
  }

  expandDay() {
    const wrapper = this.expandRef;
    // wrapper.classList.toggle('is-expanded')
    console.log(wrapper);
  }

  render() {
    const day_list = [];
    for (let i = 0; i < this.state.days; i++) {
      let day =
        i === 0 ? (
          <Day
            key={Math.random()}
            className="a-day"
            today={true}
            month={format(this.state.today, "LLL")}
            date={this.state.today.getDate()}
            day={format(this.state.today, "EEE")}
            ref={this.setDayRef}
          />
        ) : (
          <Day
            className="a-day"
            key={i}
            today={false}
            month={format(addDays(this.state.today, i), "LLL")}
            date={addDays(this.state.today, i).getDate()}
            day={format(addDays(this.state.today, i), "EEE")}
            ref={this.setDayRef}
          />
        );
      day_list.push(day);
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
          {day_list.map((el) => (
            <Column
              key={el.props.date}
              className="a-day"
              onClick={() => this.expandDay()}
            >
              {el}

              {/* {el} */}
            </Column>
          ))}
        </Row>
      </Grid>
    );
  }
}

export default Calendar;
