import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export const HomeNav = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
      sticky="top"
    >
      <Container>
        <Navbar.Brand href="/">Eke Dhoriye Din</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/all">All Posts</Nav.Link>
            <Nav.Link href="/active">Active Posts</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="My Account" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/account">My Posts</NavDropdown.Item>
              <NavDropdown.Item href="/account/posts">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
