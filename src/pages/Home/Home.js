import React from "react";
import { Row, Col } from "react-bootstrap";
import { HomeSearchForm } from "../../components";
import "./Home.css";

const HomePage = () => (
  <Row>
    <Col sm={8} smOffset={2}>
      <div className="home">
        <h1>Search the BBC archives</h1>
        <p>
          Instantly uncover the most relevant news, video, image or audio for
          your story from 5,717,265 archive assets.
        </p>
        <HomeSearchForm />
      </div>
    </Col>
  </Row>
);

export default HomePage;
