import React from "react";
import { withRouter } from "react-router-dom";
import {
  FormGroup,
  InputGroup,
  FormControl,
  Glyphicon,
  Button
} from "react-bootstrap";

class HomeSearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { q: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push({
      pathname: "/search",
      search: `?q=${this.state.q}`
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup>
          <InputGroup>
            <InputGroup.Addon>
              <Glyphicon glyph="search" />
            </InputGroup.Addon>
            <FormControl
              name="q"
              id="q"
              type="text"
              placeholder="Search for..."
              value={this.state.value}
              onChange={this.handleChange}
            />
          </InputGroup>
        </FormGroup>
        <Button type="submit">
          <Glyphicon glyph="search" /> Search
        </Button>
      </form>
    );
  }
}

export default withRouter(HomeSearchForm);
