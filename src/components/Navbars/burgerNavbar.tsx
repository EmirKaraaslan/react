import React from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button, Dropdown } from 'react-bootstrap';
import exitLogo from './../pngandicons/doorexit.png'
const MyNavbar = () => {
  return (
    <Navbar style={{ backgroundColor: '#f8f9fa !important' }} expand="lg">
      <Container>
        <Navbar.Brand href="#">MyWork</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Profile</Nav.Link>
            <Nav.Link href="#">About us</Nav.Link>
            <Nav.Item>
              <Button style={{color:'black',backgroundColor:'#9D9DFF' , borderColor:'#9D9DFF'}}>Contact</Button>
            </Nav.Item>
            <Nav.Item>
              
                  <img src={exitLogo} style={{width:'20px' , height:'20px'}} alt="exitLogo"/>
                  <label>Exit</label>
                
            </Nav.Item>
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
