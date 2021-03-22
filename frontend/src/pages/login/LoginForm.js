import React from "react";
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
import "./form.css";

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
    };

    this.handleEmailChange = (email) => {
      this.setState({ email });
    };

    this.submitHandler = () => {
      const { email } = this.state;
      api.getStudentByEmail(email).then((res) => console.log(res));
    };
  }

  render() {
    const { email } = this.state;

    return (
      <Grid>
        <Form onSubmit={this.submitHandler}>
          <Row>
            <h2>View your Schedule</h2>
          </Row>

          <Row>
            <Column>
              <FormGroup className="email-input" legendText="Email">
                <TextInput
                  id="email"
                  value={email}
                  placeholderText="Email"
                  onChange={this.handleEmailChange}
                />
              </FormGroup>
            </Column>
          </Row>
        </Form>

        <Button variant="primary" type="submit" className="submit">
          Submit
        </Button>
      </Grid>
    );
  }
}
