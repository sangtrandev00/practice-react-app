import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

export default function MainNavigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Container className="d-flex">
        <Navbar.Brand href="#home">React Project</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink to="">Home</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="shop">Shop</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="blog">Blog</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="about">About</NavLink>
            </Nav.Link>
            <NavLink to="#link"></NavLink>
            <NavDropdown title="Username Avatar" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Username Avatar</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Account</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
