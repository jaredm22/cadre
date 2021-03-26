import React, { useState } from "react";
import {
  Form,
  FormGroup,
  TextInput,
  Button,
  Grid,
  Row,
  Column,
} from "carbon-components-react/";
import api from "../../apiHandle";
import { useHistory } from "react-router-dom";
import "./form.scss";

export default function LoginForm() {
  const [email, handleEmailChange] = useState("");
  const history = useHistory();

  const submitHandler = (event) => {
    api.getStudentByEmail(email).then((res) => {
      console.log(email);
      if (res != null) {
        history.push("/schedule/" + email + "/" + res.id);
      } else {
        console.log(null);
      }
    });

    event.preventDefault();
  };

  return (
    <Grid className="login-form">
      <Form onSubmit={submitHandler}>
        <Row>
          <h2>Welcome to Cadre</h2>
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
          <Button variant="primary" type="submit" className="submit">
            Submit
          </Button>
        </Row>
      </Form>
    </Grid>
  );
}
