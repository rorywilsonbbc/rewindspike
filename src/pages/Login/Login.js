import React from "react";
import { Row, Col } from "react-bootstrap";
import { LoginForm } from "../../components";

const LoginPage = () => (
  <Row>
    <Col sm={8} smOffset={2}>
      <LoginForm />
    </Col>
  </Row>
);

export default LoginPage;
