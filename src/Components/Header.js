import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar expand="xxl" className="mb-3 navbar-col">
        <Container fluid>
          <Navbar.Brand className="color-white" as={Link} to="/">
            Giphy
          </Navbar.Brand>
          <Navbar.Toggle
            style={{
              fontSize: "15px",
              color: "black",
              backgroundColor: "white",
            }}
            aria-controls="offcanvasNavbar-expand"
          />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand"
            aria-labelledby="offcanvasNavbarLabel-expand"
            placement="end"
            style={{ backgroundColor: "white" }}
          >
            <Offcanvas.Header
              style={{ backgroundColor: "white", color: "black" }}
              closeButton
            >
              <Offcanvas.Title id="offcanvasNavbarLabel-expand">
                Giphy
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body style={{ backgroundColor: "black" }}>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/" className="nav-link">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/favourite" className="nav-link">
                  Favourite
                </Nav.Link>
                <Nav.Link as={Link} to="/contactUs" className="nav-link">
                  ContactUs
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
