import React from "react";
import { Container, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container className="pt-5">
      <Navbar>
        <Link to="/">
          <Navbar.Brand>Home</Navbar.Brand>
        </Link>
      </Navbar>
    </Container>
  );
};

export default Header;
