import React from "react";
import {
  Form,
  FormGroup,
  TextInput,
  TimePicker,
  FormSelect,
  FormSelectOption,
  Checkbox,
  ActionGroup,
  Button,
} from "@patternfly/react-core";
import api from "../../apiHandle";
// import "@patternfly/react-core/dist/styles/base.css";
import "./form.css";

export default class CreateCourseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseId: "",
      courseName: "",
      section: "",
      school: "please choose",
      zoomLink: "",
      days: { Mon: false, Tue: false, Wed: false, Thu: false, Fri: false },
      startDate: "2021-01-25",
      endDate: "2021-04-29",
      startTime: "",
      endTime: "",
      lectureStyle: "Hybrid",
    };
    this.onLectureStyleChange = (lectureStyle) => {
      this.setState({ lectureStyle });
    };
    this.onSchoolChange = (school) => {
      this.setState({ school });
    };
    this.handleCourseIdInputChange = (courseId) => {
      this.setState({ courseId });
    };
    this.handleCourseNameInputChange = (courseName) => {
      this.setState({ courseName });
    };
    this.handleSectionInputChange = (section) => {
      this.setState({ section });
    };
    this.handleZoomLinkInputChange = (zoomLink) => {
      this.setState({ zoomLink });
    };
    this.handleStartTimeInput = (startTime) => {
      this.setState({ startTime });
    };
    this.handleEndTimeInput = (endTime) => {
      this.setState({ endTime });
    };
    this.handleDaySelect = (checked, event) => {
      const target = event.target;
      const name = target.name;
      if (checked != this.state.days[name]) {
        const currentDayState = this.state.days;
        currentDayState[name] = checked;
        this.setState({ days: currentDayState });
      }
    };
    this.schoolOptions = [
      { value: "please choose", label: "Please Choose", disabled: false },
      {
        value: "College of Arts and Sciences",
        label: "College of Arts and Sciences",
        disabled: false,
      },
      {
        value: "College of Fine Arts",
        label: "College of Fine Arts",
        disabled: false,
      },
      {
        value: "Questrom School of Business",
        label: "Questrom School of Business",
        disabled: false,
      },
    ];
    this.lectureStyleOptions = [
      { value: "please choose", label: "Please Choose", disabled: false },
      { value: "Hybrid", label: "Hybrid", disabled: false },
      { value: "InPerson", label: "InPerson", disabled: false },
      { value: "Remote", label: "Remote", disabled: false },
    ];

    this.submitHandler = () => {
      const {
        courseId,
        courseName,
        section,
        school,
        zoomLink,
        days,
        startDate,
        endDate,
        startTime,
        endTime,
        lectureStyle,
      } = this.state;
      const parsedDays = [];
      for (const day in this.state.days) {
        if (days[day]) {
          parsedDays.push(day);
        }
      }
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
        .then((res) => console.log(res));
    };
  }

  render() {
    const { courseId, courseName, section, zoomLink } = this.state;
    console.log(this.state);

    return (
      <div className="form">
        <Form isHorizontal onSubmit={this.submitHandler}>
          <h2>Create Course</h2>
          <FormGroup
            label="Course ID"
            isRequired
            fieldId="horizontal-form-name"
            helperText="Please provide the course ID (ex. CS111)"
          >
            <TextInput
              value={courseId}
              isRequired
              type="text"
              id="horizontal-form-name"
              aria-describedby="horizontal-form-name-helper"
              name="horizontal-form-name"
              onChange={this.handleCourseIdInputChange}
            />
          </FormGroup>

          <FormGroup
            label="Course Name"
            isRequired
            fieldId="horizontal-form-email"
          >
            <TextInput
              value={courseName}
              onChange={this.handleCourseNameInputChange}
              isRequired
              type="text"
              id="horizontal-form-course-name"
              name="horizontal-form-course-name"
            />
          </FormGroup>

          <FormGroup
            label="Section"
            isRequired
            fieldId="horizontal-form-name"
            helperText="Please provide the course section (ex. A1)"
          >
            <TextInput
              value={section}
              isRequired
              type="text"
              id="horizontal-form-name"
              aria-describedby="horizontal-form-name-helper"
              name="horizontal-form-name"
              onChange={this.handleSectionInputChange}
            />
          </FormGroup>

          <FormGroup label="School" fieldId="horizontal-form-title">
            <FormSelect
              value={this.state.school}
              onChange={this.onSchoolChange}
              id="horzontal-form-title"
              name="horizontal-form-title"
              aria-label="School"
            >
              {this.schoolOptions.map((option, index) => (
                <FormSelectOption
                  isDisabled={option.disabled}
                  key={index}
                  value={option.value}
                  label={option.label}
                />
              ))}
            </FormSelect>
          </FormGroup>

          <FormGroup
            label="Zoom Link"
            isRequired
            fieldId="horizontal-form-name"
            helperText="Please provide the zoom link"
          >
            <TextInput
              value={zoomLink}
              isRequired
              type="text"
              id="horizontal-form-name"
              aria-describedby="horizontal-form-name-helper"
              name="horizontal-form-name"
              onChange={this.handleZoomLinkInputChange}
            />
          </FormGroup>

          <FormGroup
            label="Start Time"
            isRequired
            fieldId="horizontal-form-name"
          >
            <TimePicker
              defaultTime="14:00"
              is24Hour={true}
              onChange={this.handleStartTimeChange}
            ></TimePicker>
          </FormGroup>

          <FormGroup label="End Time" isRequired fieldId="horizontal-form-name">
            <TimePicker
              defaultTime="14:00"
              is24Hour={true}
              onChange={this.handleEndTimeChange}
            ></TimePicker>
          </FormGroup>

          <FormGroup label="Lecture Style" fieldId="horizontal-form-title">
            <FormSelect
              value={this.state.lectureStyle}
              onChange={this.onLectureStyleChange}
              id="horzontal-form-title"
              name="horizontal-form-title"
              aria-label="Lecture Style"
            >
              {this.lectureStyleOptions.map((option, index) => (
                <FormSelectOption
                  isDisabled={option.disabled}
                  key={index}
                  value={option.value}
                  label={option.label}
                />
              ))}
            </FormSelect>
          </FormGroup>

          <FormGroup
            isInline
            label="What days does this lecture occur?"
            isRequired
          >
            <Checkbox
              isChecked={this.state.days.Mon}
              onChange={this.handleDaySelect}
              label="Mon"
              aria-label="Monday"
              id="inlinecheck04"
              name="Mon"
            />
            <Checkbox
              isChecked={this.state.days.Tue}
              onChange={this.handleDaySelect}
              label="Tue"
              aria-label="Tuesday"
              id="inlinecheck05"
              name="Tue"
            />
            <Checkbox
              isChecked={this.state.days.Wed}
              onChange={this.handleDaySelect}
              label="Wed"
              aria-label="Wednesday"
              id="inlinecheck06"
              name="Wed"
            />
            <Checkbox
              isChecked={this.state.days.Thu}
              onChange={this.handleDaySelect}
              label="Thu"
              aria-label="Thursday"
              id="inlinecheck07"
              name="Thu"
            />
            <Checkbox
              isChecked={this.state.days.Fri}
              onChange={this.handleDaySelect}
              label="Fri"
              aria-label="Friday"
              id="inlinecheck08"
              name="Fri"
            />
          </FormGroup>

          <ActionGroup>
            <Button variant="primary" type="submit">
              Submit form
            </Button>
          </ActionGroup>
        </Form>
      </div>
    );
  }
}
