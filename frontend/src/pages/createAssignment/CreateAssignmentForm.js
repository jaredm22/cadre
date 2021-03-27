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

export default class CreateAssignmentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      assignmentType: "",
    };

    this.handleTextInputChange = (event) => {
      const id = event.target.id;
      this.setState({ [id]: event.target.value });
    };

    this.submitHandler = (e) => {
      const { name, assignmentType } = this.state;
    };
  }

  render() {
    const { name, assignmentType } = this.state;

    return (
      <div>
        <Grid className="course-form">
          <Form onSubmit={this.submitHandler}>
            <Row>
              <h2>Create Assignment</h2>
            </Row>

            <Row>
              <Column>
                <FormGroup className="name-input" legendText="Name">
                  <TextInput
                    id="name"
                    value={name}
                    helperText="Please provide the assignment name."
                    onChange={this.handleTextInputChange}
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
                    helperText="Please provide the assignment type. i.e. Programming Assignment"
                    onChange={this.handleTextInputChange}
                  />
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
}
