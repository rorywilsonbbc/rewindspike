import React from "react";
import {
  Panel,
  FormGroup,
  InputGroup,
  FormControl,
  Glyphicon,
  Button
} from "react-bootstrap";
import { withRouter } from "react-router-dom";

class RefineSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { q: props.search.q };

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
      <Panel>
        <Panel.Heading>Refine Search</Panel.Heading>
        <Panel.Body>
          <form onSubmit={this.handleSubmit}>
            <FormGroup>
              <InputGroup>
                <FormControl
                  name="q"
                  id="q"
                  type="text"
                  placeholder="Search for..."
                  value={this.state.q}
                  onChange={this.handleChange}
                />
                <InputGroup.Button>
                  <Button type="submit">
                    <Glyphicon glyph="search" />
                  </Button>
                </InputGroup.Button>
              </InputGroup>
            </FormGroup>
          </form>
        </Panel.Body>
      </Panel>
    );
  }
}

export default withRouter(RefineSearch);
