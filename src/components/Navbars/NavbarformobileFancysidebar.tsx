import React from "react";
import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import "./../../styles/NavbarformobileFancysidebar.scss";
import exitdoor from "./../pngandicons/doorexit.png";
export default function NavbarformobileFancysidebar() {
  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Figtree:ital,wght@0,300..900;1,300..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Mohave:ital,wght@0,300..700;1,300..700&family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet"
      />

      <Navbar
        id="navbaritself"
        style={{ backgroundColor: "#f8f9fa !important" }}
        expand="lg"
      >
        <Container id="container">
          <Row id="row">
            <Col>
              <h3 id="mywork">MyWork</h3>
            </Col>
            <Col>
              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                className="custom-toggler"
              />

              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/Profile" id="navlink">Profile</Nav.Link>
                  <Nav.Link href="/AboutUs" id="navlink">About us</Nav.Link>
                  <Nav.Link href="/Contact" id="navlink">Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Col>

            <Col>
              <Nav.Link href="/" id="Exit">
                Exit
              </Nav.Link>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </div>
  );
}
