import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header({ darkMode }) {
  return (
    <Navbar
      expand="lg"
      className={darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"}
    >
      <Navbar.Brand as={Link} to="/">
        <h3 className="mx-2">Your Mood</h3>
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/menu">
          Menu
        </Nav.Link>
        <Nav.Link as={Link} to="/contact">
          Contact
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;
