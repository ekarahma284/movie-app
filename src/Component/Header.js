import React from "react";
import { Navbar, Container } from "react-bootstrap";

const Header = ({ title }) => {
  return (
    <Navbar variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>{title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
