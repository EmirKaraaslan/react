import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import exitdoor from "./../pngandicons/doorexit.png";
import "./../../styles/NavbarwithSearch.scss";

export default function NavbarwithSearch() {
  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Figtree:ital,wght@0,300..900;1,300..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Mohave:ital,wght@0,300..700;1,300..700&family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>


      <Navbar
        id="navbar"
        data-bs-theme="light"
        style={{
          background:
            "linear-gradient(269.13deg, rgba(245, 218, 255, 0.6) -1.6%, rgba(255, 255, 255, 0) 77.6%)",
          height:"100px"  
        }}
      >
        <Row
          className="d-flex"
          style={{
            width: "100%",
            padding: "2px",
            justifyContent: "space-around",
          }}
        >
          <Col xs="auto">
            <Form.Control
              id="form"
              type="text"
              placeholder="Search"
              className="mr-sm-2"
            />
          </Col>
          <Col xs="auto" style={{ justifyContent: "space-between" }}>
            <Nav className="d-flex">
              <Nav.Link href="#home" id="Profile" style={{ marginRight: "40px" }}>
                Profile{" "}
              </Nav.Link>
              <Nav.Link href="#home" id="Aboutus" style={{ marginRight: "40px" }}>
                About Us
              </Nav.Link>
              <Nav.Link href="#home" id="Contact">Contact</Nav.Link>
            </Nav>
          </Col>
          <Col xs="auto">
            <Container>
              <Row style={{ justifyContent: "space-between" }}>
                <Col style={{ width: "12px" }}>
                  <img
                    src={exitdoor}
                    alt="Exit"
                    style={{ width: "27px", height: "27px"  }}
                  />
                </Col>
                <Col >
                  <Nav.Link href="#home" id="Exit" >Exit</Nav.Link>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Navbar>
    </div>
  );
}
