import React from "react";
import FancySidebar from "./../fancySidebar";
import NavbarwithSearch from "../Navbars/NavbarwithSearch";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import NavbarformobileFancysidebar from "../Navbars/NavbarformobileFancysidebar";
import "./../../styles/Profile.scss";
import { Button } from "bootstrap";

const News = () => {
  const isWideScreen = useMediaQuery({ query: "(min-width: 1024px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1024px)",
  });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 767px)" });
  const isMediumScreen = useMediaQuery({
    query: "(min-width: 480px) and (max-width: 767px)",
  });

  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Figtree:ital,wght@0,300..900;1,300..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Mohave:ital,wght@0,300..700;1,300..700&family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet"
      />
      <Container fluid>
        <div
          className="row"
          style={{  justifyContent: "center" }}
        >
          <div
            className="col col-md-3"
            style={{
              width: "auto",
              padding: "0px",
              // border: "2px solid yellow",
              justifyContent: "center",
            }}
          >
            {isSmallScreen && <NavbarformobileFancysidebar />}
            {isTablet && <NavbarformobileFancysidebar />}
            {isWideScreen && <FancySidebar />}
            <Card />
          </div>
          <div
            className="col"
            style={{
              // border: "2px solid red",
              width: "100%",
              height: "100%",
              padding: "0px",
              justifyContent: "center",
            }}
          >
            <div
              className="row"
              style={{
                // border: "2px solid black",
                padding: "0px",
                justifyContent: "center",
              }}
            >
              {isWideScreen && <NavbarwithSearch />}
            </div>

            <div
              className="row"
              style={{
                // border: "2px solid aqua",
                padding: "0px",
                marginTop: "10px",
                justifyContent: "center",
              }}
            >
              <Card id="cardItself">
                <Card.Body>


                    <Row id="formrow">

                      <p>Change Picture</p>



                    <form action="submit" method="post">
                      <input
                        type="name"
                        id="name"
                        name="name"
                        placeholder="Username"
                        
                      ></input>
                    </form>

                    <form action="submit" method="post">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        
                      ></input>
                    </form>

                    <form action="submit" method="post">
                      <input
                        type="number"
                        id="phonenumber"
                        name="phonenumber"
                        placeholder="Phone number"
                       
                      ></input>
                    </form>

                    <form action="submit" method="post">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="password"
                       
                      ></input>
                    </form>
                    

                    </Row>
                    <Row id="updatebutton">
                    <button className="btn" id="button">Update</button>


                    </Row>
                  
                  

                  
                </Card.Body>
              </Card>
            </div>

          
        
          </div>
        </div>
      </Container>
    </div>
  );
};

export default News;
