import React from "react";

import {
  Form,
  FormGroup,
  TextInput,
  Select,
  SelectItem,
  TimePicker,
  TimePickerSelect,
  Checkbox,
  Button,
  Grid,
  Row,
  Column,
} from "carbon-components-react/";

import api from "../../apiHandle";
import "./form.scss";

export default class CreateCourseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      courseId: "",
      courseName: "",
      section: "",
      school: "",
      zoomLink: "",
      days: {
        Monday: false,
        Tuesday: false,
        Wednesday: false,
        Thursday: false,
        Friday: false,
      },
      startDate: "2021-01-25",
      endDate: "2021-04-29",
      startTime: "",
      startTimeSelect: "",
      endTime: "",
      endTimeSelect: "",
      lectureStyle: "Hybrid",
    };

    this.onLectureStyleChange = (event) => {
      this.setState({ lectureStyle: event.target.value });
    };

    this.onSchoolChange = (event) => {
      this.setState({ school: event.target.value });
    };

    this.handleTextInputChange = (event) => {
      const id = event.target.id;
      this.setState({ [id]: event.target.value });
    };

    this.handleTimeInput = (event) => {
      console.log(event);
      const id = event.target.id;

      this.setState({ [id]: event.target.value });
    };

    this.onStartTimeSelect = (event) => {
      this.setState({ startTimeSelect: event.target.value });
    };

    this.onEndTimeSelect = (event) => {
      this.setState({ endTimeSelect: event.target.value });
    };

    this.handleDaySelect = (checked, id, event) => {
      if (checked != this.state.days[id]) {
        const currentDayState = this.state.days;
        currentDayState[id] = checked;
        this.setState({ days: currentDayState });
      }
    };

    this.schoolOptions = [
      { text: "Choose a school", label: "placeholder-item" },
      {
        text: "College of Arts and Sciences",
        value: "College of Arts and Sciences",
      },
      {
        text: "College of Fine Arts",
        value: "College of Fine Arts",
      },
      {
        text: "Questrom School of Business",
        value: "Questrom School of Business",
      },
      {
        text: "College of Engineering",
        value: "College of Engineering",
      },
      {
        text: "College of Communication",
        value: "College of Communication",
      },
      {
        text: "College of General Studies",
        value: "College of General Studies",
      },
      {
        text: "School of Hospitality Administration",
        value: "School of Hospitality Administration",
      },
    ];

    this.lectureStyleOptions = [
      { text: "Choose a lecture style", value: "placeholder-item" },
      { text: "Hybrid", value: "Hybrid" },
      { text: "InPerson", value: "InPerson" },
      { text: "Remote", value: "Remote" },
    ];

    this.submitHandler = (e) => {
      var {
        courseId,
        courseName,
        section,
        school,
        zoomLink,
        days,
        startDate,
        endDate,
        startTime,
        startTimeSelect,
        endTime,
        endTimeSelect,
        lectureStyle,
      } = this.state;

      const parsedDays = [];
      for (const day in this.state.days) {
        if (days[day]) {
          parsedDays.push(day.slice(0, 3));
        }
      }

      if (startTimeSelect == "PM") {
        const [sh, sm] = startTime.split(":");
        if (sh != 12) {
          startTime = 12 + +sh + ":" + sm;
        }
      }

      if (endTimeSelect == "PM") {
        const [eh, em] = endTime.split(":");
        if (eh != 12) {
          endTime = 12 + +eh + ":" + em;
        }
      }

      console.log(courseId);
      console.log(courseName);
      console.log(section);
      api
        .createCourse(
          courseId,
          courseName,
          section,
          school,
          zoomLink,
          parsedDays,
          startDate,
          endDate,
          startTime,
          endTime,
          lectureStyle
        )
        .then((res) => {
          if (res == null) {
            alert(
              "Unable to create course. Please screenshot form and send to dev team."
            );
            console.log("Unable to create course.");
          } else {
            alert("Course succesfully created.");
            console.log("Course created.");
            console.log(res);
          }
        });

      e.preventDefault();
    };
  }

  render() {
    const {
      courseId,
      courseName,
      section,
      zoomLink,
      startTimeSelect,
      endTimeSelect,
    } = this.state;
    console.log(this.state);

    return (
      <div>
        <Grid className="course-form">
          <Form onSubmit={this.submitHandler}>
            <Row>
              <h2>Create Course</h2>
            </Row>

            <Row>
              <Column>
                <FormGroup className="course-id-input" legendText="Course ID">
                  <TextInput
                    id="courseId"
                    value={courseId}
                    helperText="Please provide the course ID (i.e. CS111)"
                    onChange={this.handleTextInputChange}
                  />
                </FormGroup>
              </Column>

              <Column>
                <FormGroup
                  className="course-name-input"
                  legendText="Course Name"
                >
                  <TextInput
                    id="courseName"
                    value={courseName}
                    helperText="Please provide the course name (i.e. Intro to Computer Science)"
                    onChange={this.handleTextInputChange}
                  />
                </FormGroup>
              </Column>
            </Row>

            <Row>
              <Column>
                <FormGroup className="section-input" legendText="Section">
                  <TextInput
                    id="section"
                    value={section}
                    helperText="Please provide the course section (i.e. A1)"
                    onChange={this.handleTextInputChange}
                  />
                </FormGroup>
              </Column>

              <Column>
                <FormGroup label="school-select" legendText="Select School">
                  <Select
                    value={this.state.school}
                    onChange={this.onSchoolChange}
                    id="school"
                    hideLabel={true}
                  >
                    {this.schoolOptions.map((option) => (
                      <SelectItem text={option.text} value={option.value} />
                    ))}
                  </Select>
                </FormGroup>
              </Column>
            </Row>

            <Row>
              <Column>
                <FormGroup label="zoom-link-input" legendText="Zoom Link">
                  <TextInput
                    id="zoomLink"
                    value={zoomLink}
                    helperText="Please provide the zoom link"
                    onChange={this.handleTextInputChange}
                  />
                </FormGroup>
              </Column>
            </Row>

            <Row>
              <Column>
                <FormGroup
                  label="start-time-input"
                  legendText="Lecture Start Time"
                >
                  <TimePicker
                    id="startTime"
                    onChange={this.handleTimeInput}
                    placeholder="hh:mm"
                  >
                    <TimePickerSelect
                      id="time-picker-select"
                      value={startTimeSelect}
                      labelText={"Time of day"}
                      onChange={this.onStartTimeSelect}
                    >
                      <SelectItem value="AM" text="AM" />
                      <SelectItem value="PM" text="PM" />
                    </TimePickerSelect>
                  </TimePicker>
                </FormGroup>
              </Column>

              <Column>
                <FormGroup label="end-time-input" legendText="Lecture End Time">
                  <TimePicker
                    id="endTime"
                    onChange={this.handleTimeInput}
                    placeholder="hh:mm"
                    maxLength={5}
                  >
                    <TimePickerSelect
                      id="time-picker-select"
                      labelText={"Time of day"}
                      value={endTimeSelect}
                      onChange={this.onEndTimeSelect}
                    >
                      <SelectItem value="AM" text="AM" />
                      <SelectItem value="PM" text="PM" />
                    </TimePickerSelect>
                  </TimePicker>
                </FormGroup>
              </Column>

              <Column>
                <FormGroup
                  label="lecture-style-select"
                  legendText="Lecture Style"
                >
                  <Select
                    value={this.state.lectureStyle}
                    onChange={this.onLectureStyleChange}
                    hideLabel={true}
                    id="lectureStyle"
                  >
                    {this.lectureStyleOptions.map((option) => (
                      <SelectItem text={option.text} value={option.value} />
                    ))}
                  </Select>
                </FormGroup>
              </Column>
            </Row>

            <FormGroup label="days-select" legendText="Lecture Days">
              <Row>
                <Column>
                  <Checkbox
                    id="Monday"
                    checked={this.state.days.Monday}
                    className="checkbox-1"
                    labelText="Monday"
                    onChange={this.handleDaySelect}
                  ></Checkbox>
                </Column>

                <Column>
                  <Checkbox
                    id="Tuesday"
                    checked={this.state.days.Tuesday}
                    className="checkbox-2"
                    labelText="Tuesday"
                    onChange={this.handleDaySelect}
                  ></Checkbox>
                </Column>

                <Column>
                  <Checkbox
                    id="Wednesday"
                    checked={this.state.days.Wednesday}
                    className="checkbox-3"
                    labelText="Wednesday"
                    onChange={this.handleDaySelect}
                  ></Checkbox>
                </Column>

                <Column>
                  <Checkbox
                    id="Thursday"
                    checked={this.state.days.Thursday}
                    className="checkbox-4"
                    labelText="Thursday"
                    onChange={this.handleDaySelect}
                  ></Checkbox>
                </Column>

                <Column>
                  <Checkbox
                    id="Friday"
                    checked={this.state.days.Friday}
                    className="checkbox-5"
                    labelText="Friday"
                    onChange={this.handleDaySelect}
                  ></Checkbox>
                </Column>
              </Row>
            </FormGroup>

            <Button variant="primary" type="submit" className="submit">
              Submit
            </Button>
          </Form>
        </Grid>
      </div>
    );
  }
}
