import React from "react";
import { Row, Col } from "react-bootstrap";
import { SearchService } from "../../services";
import { RefineSearch, SearchResult } from "../../components";
import queryString from "query-string";
import { withRouter } from "react-router-dom";

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: {}, results: null };
    this.search = new SearchService();
  }

  componentDidMount() {
    const qs = queryString.parse(this.props.location.search);
    this.search
      .getResults(qs.q)
      .then(results => this.setState({ search: qs, results: results }))
      .catch(err => console.log(err));
  }

  render() {
    const results = this.state.results;
    const search = this.state.search;
    return (
      <Row>
        <Col sm={3}>
          <RefineSearch search={search} />
        </Col>
        <Col sm={9}>
          {results && (
            <div>
              <h1>
                Clips ({results.hits.total} results in {results.took} ms)
              </h1>
              {results.hits.hits.map(result => (
                <SearchResult key={result._id} result={result} />
              ))}
            </div>
          )}
        </Col>
      </Row>
    );
  }
}

export default withRouter(SearchPage);
