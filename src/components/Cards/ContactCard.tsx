import React from "react";
import phoneIcon from "../pngandicons/phone-call.png";
import "../../styles/contact.scss";
import { useMediaQuery } from "react-responsive";
import Navbar from "./../Navbars/Navbar";
import BurgerNavbar from "../Navbars/burgerNavbar";
import NavbarformobileFancysidebar from "../Navbars/NavbarformobileFancysidebar";

export default function Card() {
  const isWideScreen = useMediaQuery({ query: "(min-width: 769px)" });
  const isNarrowScreen = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <body>
      <div>
        {isWideScreen && <Navbar />}
        {isNarrowScreen && <BurgerNavbar />}

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mohave:ital,wght@0,300..700;1,300..700&display=swap"
          rel="stylesheet"
        ></link>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        ></link>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        ></link>

        <link
          href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Figtree:ital,wght@0,300..900;1,300..900&family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossOrigin="anonymous"
        />
        <div
          className="card mx-auto my-5 d-flex flex-column"
          id="cardItselfcontact"
          style={{ backgroundColor: "#fcf5f7" }}
        >
          <div className="card-body d-flex flex-column" id="cardbodycontact">
            <div className="container d-flex flex-column">
              <div className="row" id="row">
                <div className="col-md-6">
                  <h5
                    id="getintouch"
                    style={{
                      fontSize: "40px",
                      fontFamily: "Figtree",
                      fontWeight: "800",
                      textAlign: "left",
                    }}
                  >
                    Get in{" "}
                    <span
                      style={{
                        fontFamily: "Figtree",
                        color: "#ab6def",
                        fontWeight: "800",
                      }}
                    >
                      Touch
                    </span>
                  </h5>
                  <p style={{ fontSize: "12px", textAlign: "left" }}>
                    Enim tempor eget pharetra facilis sed maecans adipicscin.Eu
                    leo molstie non id blanditt netus.
                  </p>

                  <form action="submit" method="post">
                    <input
                      type="name"
                      id="namecontact"
                      name="name"
                      placeholder="Name *"
                      style={{
                        borderColor: "#dfdbdf",
                        borderStyle: "groove",
                        textAlign: "left",
                        border: "1px solid #ccc",
                      }}
                    ></input>
                  </form>

                  <form action="submit" method="post">
                    <input
                      type="email"
                      id="emailcontact"
                      name="email"
                      placeholder="Email"
                      style={{
                        borderColor: "#dfdbdf",
                        borderStyle: "groove",
                        border: "1px solid #ccc",
                      }}
                    ></input>
                  </form>

                  <form action="submit" method="post">
                    <input
                      type="number"
                      id="phonenumbercontact"
                      name="phonenumber"
                      placeholder="Phone number"
                      style={{
                        borderColor: "#dfdbdf",
                        borderStyle: "groove",
                        border: "1px solid #ccc",
                      }}
                    ></input>
                  </form>

                  <button
                    type="submit"
                    className="btn "
                    id="send-button"
                    style={{
                      background: "#a46ff2",
                      width: "300px",
                      height: "35px",
                      color: "white",
                      fontFamily: "",
                    }}
                  >
                    SEND
                  </button>

                  <div
                    className="container mt-4"
                    id="secondContainer"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <ul className="nav nav-pills d-flex justify-content-center ">
                      <li className="nav-item" id="phoneIconcontact">
                        <svg
                          width="29"
                          height="29"
                          viewBox="0 0 29 29"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.2039 0.424255V2.35269C18.1113 2.35269 19.8982 2.8348 21.5647 3.79902C23.1508 4.74315 24.4157 6.00869 25.3594 7.59563C26.3231 9.26292 26.805 11.0507 26.805 12.9591H28.7324C28.7324 10.6892 28.1602 8.57994 27.0158 6.63141C25.9115 4.74315 24.4157 3.2466 22.5284 2.14177C20.5809 0.99676 18.4727 0.424255 16.2039 0.424255ZM6.23538 3.31691C5.69328 3.31691 5.22146 3.48766 4.8199 3.82915L1.7179 6.99299L1.80825 6.93273C1.30631 7.35458 0.975027 7.87686 0.814406 8.49959C0.673862 9.12231 0.714017 9.72495 0.934872 10.3075C1.49705 11.8743 2.24996 13.4814 3.19361 15.1286C4.51874 17.3985 6.09484 19.4374 7.92191 21.2453C10.8532 24.1983 14.4973 26.5285 18.8542 28.2359H18.8843C19.4666 28.4368 20.0488 28.477 20.6311 28.3565C21.2334 28.2359 21.7655 27.9748 22.2273 27.573L25.269 24.5297C25.6706 24.128 25.8714 23.6358 25.8714 23.0533C25.8714 22.4506 25.6706 21.9484 25.269 21.5467L21.3238 17.5693C20.9222 17.1675 20.4203 16.9666 19.8179 16.9666C19.2156 16.9666 18.7137 17.1675 18.3121 17.5693L16.4148 19.4977C14.8889 18.7745 13.5637 17.8806 12.4394 16.816C11.315 15.7312 10.4216 14.4155 9.75901 12.8687L11.6865 10.9403C12.1081 10.4983 12.3189 9.97604 12.3189 9.37341C12.3189 8.75068 12.078 8.24849 11.5961 7.86682L11.6865 7.95721L7.65086 3.82915C7.2493 3.48766 6.77748 3.31691 6.23538 3.31691ZM16.2039 4.28113V6.20957C17.4287 6.20957 18.553 6.51088 19.577 7.11352C20.621 7.71616 21.4442 8.53976 22.0466 9.58433C22.6489 10.6088 22.95 11.7337 22.95 12.9591H24.8775C24.8775 11.3922 24.486 9.93587 23.703 8.58998C22.9199 7.28427 21.8759 6.2397 20.5708 5.45627C19.2256 4.67284 17.77 4.28113 16.2039 4.28113ZM6.23538 5.24535C6.29561 5.24535 6.36588 5.27548 6.4462 5.33574L10.3915 9.37341C10.4115 9.45376 10.3915 9.52407 10.3312 9.58433L7.47016 12.4167L7.68097 13.0194L8.07249 13.8631C8.39373 14.546 8.76517 15.2089 9.1868 15.8518C9.76905 16.7557 10.4115 17.5291 11.1143 18.1719C12.0579 19.0959 13.1923 19.9396 14.5174 20.703C15.18 21.0846 15.7422 21.3659 16.2039 21.5467L16.8063 21.8179L19.7276 18.8951C19.7677 18.8549 19.7979 18.8348 19.8179 18.8348C19.838 18.8348 19.8681 18.8549 19.9083 18.8951L23.974 22.9629C24.0142 23.003 24.0342 23.0332 24.0342 23.0533C24.0342 23.0533 24.0142 23.0733 23.974 23.1135L20.9624 26.0966C20.5206 26.4782 20.0388 26.5787 19.5168 26.3979C15.4209 24.8109 12.0077 22.6415 9.27715 19.8894C7.59062 18.202 6.11491 16.2836 4.85002 14.1342C3.94652 12.5875 3.24381 11.0909 2.74186 9.64459V9.61446C2.66155 9.43367 2.65151 9.22275 2.71175 8.98169C2.77198 8.72055 2.88241 8.51967 3.04303 8.37906L6.02456 5.33574C6.0848 5.27548 6.15507 5.24535 6.23538 5.24535ZM16.2039 8.138V10.0664C17.0071 10.0664 17.6897 10.3477 18.2519 10.9101C18.814 11.4726 19.0951 12.1556 19.0951 12.9591H21.0226C21.0226 12.0953 20.8017 11.2918 20.36 10.5485C19.9384 9.8053 19.3561 9.22275 18.6133 8.8009C17.8704 8.35897 17.0673 8.138 16.2039 8.138Z"
                            fill="black"
                          />
                        </svg>
                      </li>

                      <li className="nav-item">
                        <svg
                          id="fax"
                          width="24"
                          height="26"
                          viewBox="0 0 24 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.0625 0.640625V5.5625H6.09375V3.59375H0.1875V21.3125H2.15625V22.2969C2.15625 23.0967 2.44336 23.7837 3.01758 24.3579C3.6123 24.9526 4.30957 25.25 5.10938 25.25C5.90918 25.25 6.59619 24.9526 7.17041 24.3579C7.76514 23.7837 8.0625 23.0967 8.0625 22.2969V21.3125H23.8125V5.5625H19.875V0.640625H8.0625ZM10.0312 2.60938H17.9062V7.53125H10.0312V2.60938ZM2.15625 5.5625H4.125V19.3438H2.15625V5.5625ZM6.09375 7.53125H8.0625V9.5H19.875V7.53125H21.8438V19.3438H6.09375V7.53125ZM9.04688 11.4688V13.4375H11.0156V11.4688H9.04688ZM12.9844 11.4688V13.4375H14.9531V11.4688H12.9844ZM16.9219 11.4688V13.4375H18.8906V11.4688H16.9219ZM9.04688 15.4062V17.375H11.0156V15.4062H9.04688ZM12.9844 15.4062V17.375H14.9531V15.4062H12.9844ZM16.9219 15.4062V17.375H18.8906V15.4062H16.9219ZM4.125 21.3125H6.09375V22.2969C6.09375 22.5635 5.99121 22.7993 5.78613 23.0044C5.60156 23.189 5.37598 23.2812 5.10938 23.2812C4.84277 23.2812 4.60693 23.189 4.40186 23.0044C4.21729 22.7993 4.125 22.5635 4.125 22.2969V21.3125Z"
                            fill="black"
                          />
                        </svg>
                      </li>
                      <li className="nav-item">
                        <svg
                          id="mailicon"
                          width="26"
                          height="24"
                          viewBox="0 0 26 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.95455 0.625V2.59624L0.75 6.63565V23.375H25.5682V6.63565L19.3636 2.59624V0.625H6.95455ZM9.02273 2.69318H17.2955V10.6428L13.1591 13.3249L9.02273 10.6428V2.69318ZM10.0568 4.76136V6.82955H16.2614V4.76136H10.0568ZM6.95455 5.0522V9.28551L3.6907 7.18501L6.95455 5.0522ZM19.3636 5.0522L22.6275 7.18501L19.3636 9.28551V5.0522ZM10.0568 7.86364V9.93182H16.2614V7.86364H10.0568ZM2.81818 9.09162L13.1591 15.7809L23.5 9.09162V21.3068H2.81818V9.09162Z"
                            fill="black"
                          />
                        </svg>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4" id="harita">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7933.061869747894!2d106.80969804080183!3d-6.193453765073586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f79cf7858835%3A0xaf6e1a646a61bf2a!2sKebon%20kacang%2042!5e0!3m2!1str!2str!4v1721918486513!5m2!1str!2strhttps://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7933.061869747894!2d106.80969804080183!3d-6.193453765073586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f79cf7858835%3A0xaf6e1a646a61bf2a!2sKebon%20kacang%2042!5e0!3m2!1str!2str!4v1721918486513!5m2!1str!2str"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
