import React, { useState } from "react";

import {
  Form,
  FormGroup,
  TextInput,
  Select,
  SelectItem,
  TimePicker,
  TimePickerSelect,
  DatePicker,
  DatePickerInput,
  Button,
  Grid,
  Row,
  Column,
} from "carbon-components-react/";

import api from "../../apiHandle";
import "./form.scss";

export default function CreateAssignmentForm(props) {
  let [name, handleNameInput] = useState("");
  let [assignmentType, handleTypeInput] = useState("");
  let [dueDate, handleDueDateInput] = useState("");
  let [dueTime, handleDueTimeInput] = useState("");
  let [dueTimeSelect, handleDueTimeSelect] = useState("");
  let [courseSelect, handleCourseSelect] = useState("");

  const submitHandler = (event) => {
    console.log(name);
    console.log(assignmentType);
    console.log(dueDate);
    console.log(dueTime);
    console.log(dueTimeSelect);
  };

  console.log(props);

  return (
    <div>
      <Grid className="course-form">
        <Form onSubmit={(e) => submitHandler(e)}>
          <Row>
            <h2>Create Assignment</h2>
          </Row>

          <Row>
            <Column>
              <FormGroup className="name-input" legendText="Name">
                <TextInput
                  id="name"
                  value={name}
                  labelText={false}
                  helperText="Please provide the assignment name."
                  onChange={(e) => {
                    handleNameInput(e.target.value);
                  }}
                />
              </FormGroup>
            </Column>

            <Column>
              <FormGroup
                className="assignment-type-input"
                legendText="Assignment Type"
              >
                <TextInput
                  id="assignmentType"
                  value={assignmentType}
                  labelText={false}
                  helperText="Please provide the assignment type. i.e. Programming Assignment"
                  onChange={(e) => {
                    handleTypeInput(e.target.value);
                  }}
                />
              </FormGroup>
            </Column>
          </Row>

          <Row>
            <Column>
              <FormGroup label="due-date-picker" legendText="Due Date">
                <DatePicker datePickerType="simple" dateFormat="yyyy-M-d">
                  <DatePickerInput
                    placeholder="yyyy-m-d"
                    id="due-date-input"
                    value={dueDate}
                    onChange={(e) => handleDueDateInput(e.target.value)}
                  ></DatePickerInput>
                </DatePicker>
              </FormGroup>
            </Column>

            <Column>
              <FormGroup label="due-time-input" legendText="Time Due">
                <TimePicker
                  id="dueTime"
                  value={dueTime}
                  onChange={(e) => handleDueTimeInput(e.target.value)}
                  placeholder="hh:mm"
                  maxLength={5}
                >
                  <TimePickerSelect
                    id="time-picker-select"
                    labelText={"Time of day"}
                    value={dueTimeSelect}
                    onChange={(e) => {
                      handleDueTimeSelect(e.target.value);
                    }}
                  >
                    <SelectItem value="AM" text="AM" />
                    <SelectItem value="PM" text="PM" />
                  </TimePickerSelect>
                </TimePicker>
              </FormGroup>
            </Column>
          </Row>

          <Button variant="primary" type="submit" className="submit">
            Submit
          </Button>
        </Form>
      </Grid>
    </div>
  );
}
