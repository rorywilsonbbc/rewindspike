import React from "react";
import { withRouter } from "react-router-dom";
import {
  FormGroup,
  FormControl,
  ControlLabel,
  Panel,
  Button,
  Alert
} from "react-bootstrap";
import { Auth } from "../../services";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: false, username: "", password: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    Auth.Authenticate(this.state.username, this.state.password)
      .then(result => {
        if (result) {
          this.props.history.push("/");
        }
      })
      .catch(err => {
        this.setState({ error: true });
      });
  }

  render() {
    return (
      <Panel>
        <Panel.Heading>Log in to BBC Archive Search</Panel.Heading>
        <Panel.Body>
          {this.state.error && (
            <Alert bsStyle="danger">
              Failed to log in. Check your blah blah blah
            </Alert>
          )}
          <form onSubmit={this.handleSubmit}>
            <FormGroup>
              <ControlLabel>Username</ControlLabel>

              <FormControl
                name="username"
                id="username"
                type="text"
                placeholder="Username"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Password</ControlLabel>

              <FormControl
                name="password"
                id="password"
                type="password"
                placeholder="password"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </FormGroup>
            <Button type="submit">Login</Button>
          </form>
        </Panel.Body>
      </Panel>
    );
  }
}

export default withRouter(LoginForm);
