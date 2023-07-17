import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function NavBar() {
  

  return (
    <Navbar bg="transparent" variant="light" fixed="top">
      <Container>
        <Navbar.Brand >Mobile Phones</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/Products">
            Products
          </Nav.Link>
        </Nav>
        <Nav className="justify-content-end">
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;