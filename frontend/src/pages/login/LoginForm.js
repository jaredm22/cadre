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

    this.handleTextInputChange = (event) => {
      const id = event.target.id;
      this.setState({ [id]: event.target.value });
    };

    this.submitHandler = () => {
      const { email } = this.state;
      const { history } = this.props.props;

      api.getStudentByEmail(email).then((res) => {
        if (res != null) {
          console.log(res);
          history.push("/schedule" + email);
        } else {
          console.log(null);
        }
      });
    };
  }

  render() {
    const { email } = this.state;
    console.log(this.props);

    return (
      <Grid className="form">
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
                  placeholdertext="Email"
                  labelText={false}
                  onChange={this.handleTextInputChange}
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
}
