import React from "react";
import {
  Form,
  FormGroup,
  TextInput,
  ActionGroup,
  Button,
} from "@patternfly/react-core";
import api from "../../apiHandle";
import "@patternfly/react-styles/css/components/Form/form.css";
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
      <div className="form">
        <Form isHorizontal onSubmit={this.submitHandler}>
          <h2>Login</h2>

          <FormGroup
            label="Email"
            isRequired
            fieldId="horizontal-form-name"
            helperText="Please enter your email (For privacy during testing, please enter email as FirstInitialLastName@bu.edu (eg. John Smith - jsmith@bu.edu)"
          >
            <TextInput
              value={email}
              isRequired
              type="text"
              id="horizontal-form-name"
              aria-describedby="horizontal-form-name-helper"
              name="horizontal-form-name"
              onChange={this.handleEmailChange}
            />
          </FormGroup>

          {/* <FormGroup label="School" fieldId="horizontal-form-title">
                    <FormSelect
                        value={this.state.school}
                        onChange={this.onSchoolChange}
                        id="horzontal-form-title"
                        name="horizontal-form-title"
                        aria-label="School"
                    >
                        {this.schoolOptions.map((option, index) => (
                        <FormSelectOption isDisabled={option.disabled} key={index} value={option.value} label={option.label} />
                        ))}
                    </FormSelect>
                </FormGroup> */}

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
