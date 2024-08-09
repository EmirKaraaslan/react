import React from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button, Dropdown } from 'react-bootstrap';
import exitLogo from './../pngandicons/doorexit.png'
const MyNavbar = () => {
  return (
    <Navbar style={{ backgroundColor: '#f8f9fa !important' }} expand="lg">
      <Container>
        <Navbar.Brand href="#">MyWork</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-navburger" >
          <Nav className="me-auto">
            <Nav.Link href="/Profile" >Profile</Nav.Link>
            <Nav.Link href="/AboutUs">About us</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
            
            <Nav.Item>
              
                  <img src={exitLogo} style={{width:'20px' , height:'20px'}} alt="exitLogo"/>
                  <a className="nav-link " id="exitburger" href="/" >Exit</a>

                
            </Nav.Item>
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
