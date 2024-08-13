import React, { useEffect, useState } from "react";
import FancySidebar from "./../fancySidebar";
import NavbarwithSearch from "../Navbars/NavbarwithSearch";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import NavbarformobileFancysidebar from "../Navbars/NavbarformobileFancysidebar";
import "./../../styles/NewsCard.scss";
import { error } from "console";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";

/**
 *
 * * öncelikle postmana atacağımız get in dönüşünde alacağımız veriye uygun
 * bir veri tipi oluşturmamız  gerekiyor  bunu başka bir dosyada interface
 * olarak yazdım "news.tsx" içinde  bunu buraya newsItem olarak import ettim
 *
 * ve news olarak kullandığım objenin bu tipte olduğunu alttaki satırda gösterdim
 */

interface NewsItem {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: {
    id: null | number | string;
  };
  title: string;
  url: string;
  urlToImage: string;
}

interface ApiResponse {
  articles: NewsItem[];
}

console.log("geldim");

const News: React.FC = () => {
  const isWideScreen = useMediaQuery({ query: "(min-width: 1024px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1024px)",
  });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 767px)" });

  //Postman den haber çekme

  /**
   * öncelikle postmana atacağımız get in dönüşünde alacağımız veriye uygun
   * bir veri tipi oluşturmamız  gerekiyor  bunu başka bir dosyada interface
   * olarak yazdım "news.tsx" içinde
   *
   * bu notada bir state yaratacağız iki paametresi olacak
   * ilki gelen ham veriyi tutacak ikincisi de gelen veriyi setlemek için kullanılacak
   *
   */

  /**
   * Use State Hook 'u nedir?
   *
   *
   * state yani durum yönetimi için kullanılır
   *
   * DURUM DEĞİŞKENİ(1.)
   * ilk tip (selectedNews) bileşenin güncel durumunu saklar
   *  bu örnekte tip olarak NewsItem ve null olabilir(çünkü array içinde seçim
   * yapmak için açtığımız için null ' u göz arda edemeyiz)
   * initial stat'de bir şey vermedik ve null dedik
   *
   * DURUM GÜNCELLEYİCİ FONKSİYON(2.)
   * ikinci tip birinci tipi yani durum değişkenini güncellemek
   * için kullanılır bu fonksiyon çağırıldığında durum güncellenir ve
   * komponent tekrardan render edilir
   *
   *
   */
  const [selectedNews1, setSelectedNews1] = useState<NewsItem | null>(null);
  const [selectedNews2, setSelectedNews2] = useState<NewsItem | null>(null);
  const [selectedNews3, setSelectedNews3] = useState<NewsItem | null>(null);
  const [selectedNew4, setSelectedNews4] = useState<NewsItem | null>(null);

  /**
   * gelen veriyi çekmek , çözümlemek/açmak (fetch)
   * ve gelen veriyi defacto standart olan json tipine dönüştürmek için
   * bir fonkison yazıyoruz (bu tür veri çekme (db de dahil) işleri için
   * her zaman bir error catch yazıyoruz)
   */

  useEffect(() => {
    fetch(
      ""
    )
      .then((response) => response.json())
      .then((data: ApiResponse) => {
        console.log("Fetched data : ", data);
        setSelectedNews1(data.articles[41]);
        setSelectedNews2(data.articles[19]);
        setSelectedNews3(data.articles[39]);
        setSelectedNews4(data.articles[24]);
      })
      .catch((error) => console.log("Error fetching news faild cause:", error));
  }, []);

  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Figtree:ital,wght@0,300..900;1,300..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Mohave:ital,wght@0,300..700;1,300..700&family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet"
      />
      <body id="newscardbody">
      <Container fluid>
        <div className="row"  id="newscardwholecontainer" style={{ justifyContent: "center" }}>
          <div
            className="col col-md-3" id="fancysidebarcolumn"
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
                padding: "0px",
                justifyContent: "center",
                width:"100%",
                // border:"2px solid red"
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
              <Card id="cardItselfnewscard">
                <Card.Body>
                  <Row>
                    <h3 id="hottopics">Hot Topics</h3>
                  </Row>

                  {selectedNews1 ? (

                    
                    
                    <div style={{ position: "relative" }}>
                      <h4 id="newtitle" >{selectedNews1.title} 

                        
                      </h4>
                      <img
                        src={selectedNews1.urlToImage}
                        style={{
                          objectFit: "cover",
                          height: "300px",
                          width: "100%",
                          borderRadius: "20px",
                          
                        }}
                        alt={selectedNews1.title}
                      />
                      <div
                        style={{
                          position:"absolute",
                          bottom: "0",
                          left: "0",
                          right: "0",
                          background:"transparent",
                          color: "white",
                          
                        }}
                      >
                        
                        <p id="newsdescription">{selectedNews1.content}</p>
                      </div>
                    </div>
                  ) : (
                    <p>No news exists</p>
                  )}

                  {selectedNews2 && selectedNews3 && selectedNew4  ? ( 

                  <Row>
                    <h3 id="latestnews">Latest News</h3>
                    <CardGroup id="cardgroup">
                      <Card id="triplecard" style={{ marginRight: "40px" }}>
                        <Card.Img
                          src={selectedNews2.urlToImage}
                          style={{ objectFit: "cover", height: "150px" }}
                        />
                        <Card.Body>
                          <Card.Title id="cardtitle">
                            {selectedNews2.title}
                          </Card.Title>
                        </Card.Body>
                      </Card>
                      <Card id="triplecard" style={{ marginRight: "40px" }}>
                        <Card.Img
                          src={selectedNews3.urlToImage}
                          style={{ objectFit: "cover", height: "150px" }}
                        />
                        <Card.Body>
                          <Card.Title id="cardtitle">
                            {selectedNews3.title}
                          </Card.Title>
                        </Card.Body>
                      </Card>
                      <Card id="triplecard">
                        <Card.Img
                          src={selectedNew4.urlToImage}
                          style={{ objectFit: "cover", height: "150px" }}
                        />
                        <Card.Body>
                          <Card.Title id="cardtitle">
                            {selectedNew4.title}
                          </Card.Title>
                        </Card.Body>
                      </Card>
                    </CardGroup>
                  </Row>
                  ) 
                  : (
                    <p>No news exsist</p>
                  )

                  
                                  

}
                </Card.Body>
              </Card>
            </div>

            <div
              className="row "
              style={{
                // border: "2px solid aqua",
                marginTop: "4%",
                width:"auto",
                justifyContent: "center",
              }}
            >
              <div
                id="resizer"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  

                  gap: "1rem",
                }}
              >
                <div
                  className="col"
                  style={{
                    //// sizing problem
                    // border: "2px solid green",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Container id="TaskCard">
                    <Row md={8}>
                      <Row id="line">
                        <p>
                          -----------------------------------------------------
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
                          -----------------------------------------------------
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
                
               
                  <Container id="PersonsCard">
                    <Row md={12}>
                      <Row id="line">
                        <p>
                          -----------------------------------------------------
                        </p>
                      </Row>
                      <Row id="personTitle" style={{ textAlign: "left" }}>
                        <p>Persons</p>
                      </Row>
                      <Row id="line">
                        <p>
                          -----------------------------------------------------
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
      </body>
    </div>
  );
};

export default News;
