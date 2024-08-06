import React from "react";
import FancySidebar from "./../fancySidebar";
import NavbarwithSearch from "../Navbars/NavbarwithSearch";
import { Card, Container } from "react-bootstrap";
import { url } from "inspector";
import swimmer from "./../pngandicons/swimmer.png"

export default function news() {
  return (
    <div>
      <Container fluid>
        <div
          className="row"
          style={{ border: "2px solid black", justifyContent: "space-between" }}
        >
          <div
            className="col col-md-3"
            style={{  width: "auto", padding: "0px" }}
          >
            <FancySidebar />
          </div>
          <div
            className="col"
            style={{ border: "2px solid red", width: "auto", padding: "0px" }}
          >
            <div className="row" style={{border:"2px solid black" , padding:"0px"}}>
              <NavbarwithSearch />
            </div>

            <div className="row" style={{border:"2px solid red" , padding:"0px"}}>


              <Card style={{padding:"10 px"}}>
                <Card.Body>
                  <Card.Title>Hot Topics</Card.Title>
                  <img src="url('')" style={{width:"1121px", height:"177px"}}/>
                </Card.Body>
              </Card>


            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
