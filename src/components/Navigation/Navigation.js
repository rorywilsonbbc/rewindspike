import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, MenuItem, NavDropdown } from "react-bootstrap";
import "./Navigation.css";

const Navigation = () => (
  <Navbar className="navbar-rewind">
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">
          <img src="/asp_logo.png" alt="BBC Archive Search" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavDropdown eventKey={2} id="basic-nav-dropdown" title="Nav">
          <li>
            <Link to="/about">About</Link>
          </li>
          <MenuItem divider />
          <li>
            <Link to="/login">Logout</Link>
          </li>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
