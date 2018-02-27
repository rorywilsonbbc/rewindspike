import React from "react";
import { Media } from "react-bootstrap";
import "./SearchResult.css";

const getDescription = result => {
  if (result.highlight) {
    if (result.highlight.synopsis) {
      return result.highlight.synopsis;
    }
    if (result.highlight.title) {
      return result.highlight.title;
    }
    if (result.highlight.description) {
      return result.highlight.description;
    }
  }
  return "";
};

const SearchResult = ({ result }) => (
  <Media className="result">
    <Media.Left>img</Media.Left>
    <Media.Body>
      <Media.Heading>{result._source.episodeTitle}</Media.Heading>
      <p>
        <span dangerouslySetInnerHTML={{ __html: getDescription(result) }} />
      </p>
    </Media.Body>
  </Media>
);

export default SearchResult;
