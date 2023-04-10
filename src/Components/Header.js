import { useRef } from "react";
import { Link } from "react-router-dom";
import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import {
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Nav,
} from "react-bootstrap";

function Header() {
  return (
    <header>
      <div>
        <Navbar bg="dark" variant={"dark"} expand="lg">
          <Navbar.Brand href="#">Giphy</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/Favourite">
                Favourite
              </Nav.Link>
              <Nav.Link as={Link} to="/Login">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
}

export default Header;
