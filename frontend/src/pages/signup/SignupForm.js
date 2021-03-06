import React, { useState } from "react";
import {
  Form,
  FormGroup,
  TextInput,
  Button,
  Select,
  SelectItem,
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
          history.push({
            pathname: "/schedule/student",
            state: { user: res },
          });
        } else {
          console.log("Unable to create student.");
          console.log(res);
        }
      });
    } else if (user == "Professor") {
      api.createProfessor(email, firstName, lastName).then((res) => {
        if (res != null) {
          history.push({
            pathname: "/schedule/student",
            state: { user: res },
          });
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
    <Form onSubmit={submitHandler} className="signup-page">
      <h2>Create an account</h2>
      <br></br>

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

      <Button variant="primary" type="submit" className="submit">
        Submit
      </Button>
    </Form>
  );
}
