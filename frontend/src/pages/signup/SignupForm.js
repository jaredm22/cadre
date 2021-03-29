import React, { useState } from "react";
import {
  Form,
  FormGroup,
  TextInput,
  Button,
  Select,
  SelectItem,
  Grid,
  Row,
  Column,
} from "carbon-components-react/";
import api from "../../apiHandle";
import { useHistory } from "react-router-dom";
import "./form.scss";

export default function SignupForm() {
  const [email, handleEmailChange] = useState("");
  const [firstName, handleFirstNameChange] = useState("");
  const [lastName, handleLastNameChange] = useState("");
  const [user, handleUserSelect] = useState("Student");
  const history = useHistory();

  const submitHandler = (event) => {
    if (user == "Student") {
      api.createStudent(email, firstName, lastName).then((res) => {
        if (res != null) {
          console.log(res);
          history.push("/schedule/student/" + email + "/" + res.id);
        } else {
          console.log("Unable to create student.");
          console.log(res);
        }
      });
    } else if (user == "Professor") {
      api.createProfessor(email, firstName, lastName).then((res) => {
        if (res != null) {
          history.push("/schedule/professor/" + email + "/" + res.id);
        } else {
          console.log("Unable to create professor.");
          console.log(res);
        }
      });
    }
    event.preventDefault();
  };

  const userTypeOptions = [
    { text: "Choose your role", value: "placeholder-item" },
    { text: "Professor", value: "Professor" },
    { text: "Student", value: "Student" },
  ];

  return (
    <Grid className="signup-form">
      <Form onSubmit={submitHandler}>
        <Row>
          <h2>Create an account</h2>
        </Row>
        <br></br>

        <Row>
          <Column>
            <FormGroup className="email-input" legendText="Email">
              <TextInput
                id="email"
                value={email}
                placeholdertext="Email"
                helperText="Please enter your email to view your schedule."
                labelText={false}
                onChange={(e) => {
                  handleEmailChange(e.target.value);
                }}
              />
            </FormGroup>
          </Column>
        </Row>

        <Row>
          <Column>
            <FormGroup className="firstname-input" legendText="First Name">
              <TextInput
                id="firstName"
                value={firstName}
                placeholdertext="First Name"
                helperText="Please enter your first name."
                labelText={false}
                onChange={(e) => {
                  handleFirstNameChange(e.target.value);
                }}
              />
            </FormGroup>
          </Column>

          <Column>
            <FormGroup className="lastName-input" legendText="Last Name">
              <TextInput
                id="lastName"
                value={lastName}
                placeholdertext="Last Name"
                helperText="Please enter your last name."
                labelText={false}
                onChange={(e) => {
                  handleLastNameChange(e.target.value);
                }}
              />
            </FormGroup>
          </Column>
        </Row>

        <Row>
          <Column>
            <FormGroup label="user-type-select" legendText="Account Type">
              <Select
                value={user}
                onChange={(e) => {
                  handleUserSelect(e.target.value);
                }}
                hideLabel={true}
                id="lectureStyle"
              >
                {userTypeOptions.map((option) => (
                  <SelectItem text={option.text} value={option.value} />
                ))}
              </Select>
            </FormGroup>
          </Column>
        </Row>

        <Row>
          <Button variant="primary" type="submit" className="submit">
            Submit
          </Button>
        </Row>
      </Form>
    </Grid>
  );
}
