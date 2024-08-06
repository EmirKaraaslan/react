import React from "react";
import FancySidebar from "./../fancySidebar";
import NavbarwithSearch from "../Navbars/NavbarwithSearch";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import NavbarformobileFancysidebar from "../Navbars/NavbarformobileFancysidebar";
import "./../../styles/NewsCard.scss";

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
          style={{ border: "2px solid black", justifyContent: "center" }}
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
                border: "2px solid black",
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
                  <Row>
                    <h3 id="hottopics">Hot Topics</h3>
                  </Row>
                  <Row>
                    <img
                      src="https://s3-alpha-sig.figma.com/img/c135/07ee/72a692f482624d3fa5e8a9100c1f5a55?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f~f70R8RpHk08ZVZLg9FOM5nC5-URCNPwnhXO4mvD~kRqCH0lJ7Fkl-Cd-TQ3ssynKYa~K2smI2SRcJFVVa6pkOJfcpOM9eYGpdShiIQw~5-LV9rLixmhiWFspJ15CksoPqVpw4-5OxfKdQSH1KuqxP3DL5pvQCrbmZt7ZlNN1w60DmjwpMntQYROj6KPrwFjuUeP87OCAsps25q99UB4wlOEKGWznugvsc6yPgLKNmfcxTKw-KafFUCl5tgNCurjAF-V-0lT4z7A7xdcuUcLJ8rdBYBjxgmmmSTUZd89DiwtdLXPmSVuce8MkVm7tufke9dHR4OpgczL0zn6sVyHw__"
                      style={{
                        objectFit: "cover",
                        height: "200px",
                        borderRadius: "20px",
                      }}
                    />
                  </Row>

                  <Row>
                    <h3 id="latestnews">Latest News</h3>
                    <CardGroup id="cardgroup">
                      <Card id="triplecard" style={{ marginRight: "40px" }}>
                        <Card.Img
                          src="https://s3-alpha-sig.figma.com/img/ec3c/803e/f50679911c8d5f88354ce492d1a3d0f1?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XbfRPgPqBsxONdzOc9u4~O4la5xBj-hhyWLwgwCs68oL3ykurMv3RgGq5sCz93A5VA2iDkHsV1RPzNkIs1bzP1Ds3-cpK1QXCtKUqStr8c0PoqJOlvBYEm-GBSo9IoM89Dgs-MPNnZztUlAn9K0KgVYcP6gmo3EJl7Dr2tgX3D~ZJ7eZnzAm8bynRe8-M3WDImvs8ZX7fheW8gqFHgaKXIRTTTdsMCYQKhqDoKHGpF3tcbt-fw3t4lrPEfkArGqIgBjtopoPSzvebzQSD5MJfmTVpYlCTJbhWguQnl7br28-tYc9YF~EQ6ScBbjoA5e7edrYs1FnGxAB3bwTrtUcBQ__"
                          style={{ objectFit: "cover", height: "150px" }}
                        />
                        <Card.Body>
                          <Card.Title id="cardtitle">
                            News Title Lorem Ipsum
                          </Card.Title>
                        </Card.Body>
                      </Card>
                      <Card id="triplecard" style={{ marginRight: "40px" }}>
                        <Card.Img
                          src="https://s3-alpha-sig.figma.com/img/f81c/7ff0/b1ac69e4af5f4897efc992e15f3c534f?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WG7Yl0xR8kL8gDLxaoOWDe3MsfbuKm5xv3pI-Yo9NNYNASaVKDodaZuxUsADDmYCfgmGKAmJRwYycaFiEcvOXuPRYcd-LBAI-eAbdzPwP8j8CaoohboqePjWimBqIHUz6SF8ENNUJ4B8YjN4Y735DSul2JElUeJwTYRtwBLouYjJM6rs8XD82W~~Kwd85VG2A9gxm3783u1gvl0pyfDWUtBjnuiI2K49TTSQXaQAs68zGj5o-xiSI3IGz7SQogUx99J6VbGKBT1sRu6lhf0pEcGt2IzXDGejohjpXTf8t1JWD0b-A~xSInhNnlSB1L5juxr~97wM8RkOkAQGhl0wIg__"
                          style={{ objectFit: "cover", height: "150px" }}
                        />
                        <Card.Body>
                          <Card.Title id="cardtitle">
                            News Title Lorem Ipsum
                          </Card.Title>
                        </Card.Body>
                      </Card>
                      <Card id="triplecard">
                        <Card.Img
                          src="https://s3-alpha-sig.figma.com/img/41f8/42a8/d233417bdc89c29b126daeb91e63ee2a?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FdHtwBDgJwtOkllmpaLCrant~EctWfxPw48~WfQqo7ufqDVauC8YNIz7mRNnrjdEHgQ-~ARYooWY6R2MWI-H3TycDtzLc~-0H0Wsumce573vnMN66~wDYtI6V5k-JYaO-~sftuFLFlrjDA4ASZwrg33ffq0hQonoNItPfsrKsDb7SHPFhmZBBWLd1PlUcYdQdWzcRkYIQXZLbc9~IRzOmV05S73bh4qEorRyheo1N772Cq4rucg4c4rIlvxXeCymJp~dbBIRY~IhxqDUAg~UY9DxPtzTM97H8X835ng2Al5LxZaiDhWsIfbneFgNpa4Z4NRllY68LwK4quNwNem-Hw__"
                          style={{ objectFit: "cover", height: "150px" }}
                        />
                        <Card.Body>
                          <Card.Title id="cardtitle">
                            News Title Lorem Ipsum
                          </Card.Title>
                        </Card.Body>
                      </Card>
                    </CardGroup>
                  </Row>
                </Card.Body>
              </Card>
            </div>

            <div
              className="row"
              style={{
                // border: "2px solid aqua",
                marginTop: "4%",
                justifyContent: "center",
              }}
            >
              <div

                id="resizer"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap:"wrap",
                  
                  gap: "1rem",
                }}
              >
                <div
                  className="col"
                  style={{
                    border: "2px solid green",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Container  id="TaskCard">
                  <Row md={12}>
                    <Row id="line">
                      <p>
                        ------------------------------------------------------------------------------------------
                      </p>
                    </Row>
                    <Row id="taskattributes">
                      <Col>
                        <p>Task Title</p>
                      </Col>
                      <Col>
                        <p>Task Description</p>
                      </Col>
                      <Col>
                        <p>Status</p>
                      </Col>
                    </Row>
                    <Row id="line">
                      <p>
                        ------------------------------------------------------------------------------------------
                      </p>
                    </Row>
                    <Row id="taskproperties">
                      <Col>
                        <p>Home Page Redesign</p>
                      </Col>
                      <Col>
                        <p>Lorem Ipsum dollars</p>
                      </Col>
                      <Col>
                        <p style={{ color: "rgba(33, 150, 83, 1)" }}>
                          {" "}
                          * In Progress
                        </p>
                      </Col>
                    </Row>
                  </Row>
                  </Container>
                </div>
                <div
                  className="col"
                  style={{
                    border: "2px solid green",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Container id="PersonsCard">
                  <Row md={12}>
                    <Row id="line">
                      <p>
                        ------------------------------------------------------------------------------------------
                      </p>
                    </Row>
                    <Row id="personTitle" style={{ textAlign: "left" }}>
                      <p>Persons</p>
                    </Row>
                    <Row id="line">
                      <p>
                        ------------------------------------------------------------------------------------------
                      </p>
                    </Row>
                    <Row id="personName" style={{ textAlign: "left" }}>
                      <p>Cüneyt</p>
                      <p>Bayram</p>
                      <p>Ali</p>
                      <p>Gökhan</p>
                      <p>Yahya</p>
                    </Row>
                  </Row>
                  </Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default News;
