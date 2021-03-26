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
import "./form.css";

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
    <Grid className="form">
      <Form onSubmit={submitHandler}>
        <Row>
          <h2>View your Schedule</h2>
        </Row>

        <Row>
          <Column>
            <FormGroup className="email-input" legendText="Email">
              <TextInput
                id="email"
                value={email}
                placeholdertext="Email"
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
