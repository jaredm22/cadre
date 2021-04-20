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

export default function LoginForm() {
  const [email, handleEmailChange] = useState("");
  const [user, handleUserSelect] = useState("Student");
  const history = useHistory();

  const submitHandler = (event) => {
    if (user == "Student") {
      api.getStudentByEmail(email).then((res) => {
        if (res != null) {
          console.log(res);
          history.push({
            pathname: "/schedule/student",
            state: { user: res },
          });
        } else {
          alert("No user found. Redirecting to create account page.");
          history.push("/signup");
          console.log("Unable to find student with this email.");
          console.log(res);
        }
      });
    } else if (user == "Professor") {
      api.getProfessorByEmail(email).then((res) => {
        if (res != null) {
          history.push({
            pathname: "/schedule/professor",
            state: { user: res },
          });
        } else {
          alert("No user found. Redirecting to create account page.");
          history.push("/signup");
          console.log("Unable to find professor with this email.");
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
    <Form onSubmit={submitHandler} className="login-page">
      <h2>Welcome to Cadre</h2>
      <br></br>
      <p>To view an example schedule, enter</p>
      <p>email jmin@bu.edu and select Student.</p>
      <br></br>
      <br></br>
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
