import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import exitdoor from "./../pngandicons/doorexit.png";
import "./../../styles/NavbarwithSearch.scss";
import { useNavigate } from "react-router-dom";



export default function NavbarwithSearch() {

 const [inputValue ,setInputValue] = useState<string>("");
  
const navigate = useNavigate();


const handleSubmit = (event:any) => {
  event.preventDefault();
  
  const value = inputValue.trim().toLowerCase();

  // İstediğiniz yönlendirme mantığını buraya ekleyin
  if (value === "info") {
    navigate('/Profile');
  } else if (value === "news") {
    navigate('/NewsCard');
  } else if (value === "tasks" || value === "task") {
    navigate('/Tasks');
  } else if (value === "done tasks" || value === "done" || value === "donetasks") {
    navigate('/DoneTasks');
  } else if (value === "person list" || value === "person" || value === "persons") {
    navigate('/PersonList');
  } else if (value === "about us" || value === "about") {
    navigate('/AboutUs');
  } else if (value === "contact") {
    navigate('/Contact');
  } else {
    navigate('/NewsCard'); // Varsayılan yönlendirme
  }
};


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
          <Form onSubmit={handleSubmit}>
            <Form.Control
            
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
              id="form"
              type="text"
              placeholder="Search"
              className="mr-sm-2"
            />
            </Form>
          </Col>
          <Col xs="auto" style={{ justifyContent: "space-between" }}>
            <Nav className="d-flex">
              <Nav.Link href="/Profile" id="Profile" style={{ marginRight: "40px" }}>
                Profile{" "}
              </Nav.Link>
              <Nav.Link href="/Aboutus" id="Aboutus" style={{ marginRight: "40px" }}>
                About Us
              </Nav.Link>
              <Nav.Link href="/Contact" id="Contact">Contact</Nav.Link>
            </Nav>
          </Col>
          <Col xs="auto">
            <Container>
              <Row style={{ justifyContent: "space-between" }}>
                <Col style={{ width: "12px" }}>
                  <img
                    src={exitdoor}
                    alt="Exit"
                    style={{ width: "30px", height: "30px" , marginTop:"10px"  }}
                  />
                </Col>
                <Col >
                  <Nav.Link href="/" id="Exit" >Exit</Nav.Link>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Navbar>
    </div>
  );
}
