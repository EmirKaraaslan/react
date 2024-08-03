import React from "react";
import "../../styles/register.scss";
import phoneIcon from "../pngandicons/phone-call.png";

const Login = () => {
  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Figtree:ital,wght@0,300..900;1,300..900&family=Inter:wght@100..900&family=Mohave:ital,wght@0,300..700;1,300..700&display=swap"
        rel="stylesheet"
      ></link>
      <body>
        <div className="container-fluid">
          <div className="row" id="rowGeneral">
            <div className="col-md-1" id="columnModel">
              <div id="greenModal">
                <svg
                  id="greenImage"
                  width="270"
                  height="100vh"
                  viewBox="0 0 244 936"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-29.4355 78.971L111.026 72.2425L233.081 835.864L17.6943 1062.84L5.8467 815.515L-29.4355 78.971Z"
                    fill="#8CA005"
                  />
                  <path
                    d="M0.379414 -159.175L108.911 -158.041L159.684 826.788L-18.9999 1102.07L-14.1283 785.016L0.379414 -159.175Z"
                    fill="#B1E457"
                  />
                </svg>
              </div>
            </div>

            <div className="col-md-10" id="columnWholeCard">
              <div id="columnInnerContainer">
                <h1
                  className="topHeader"
                  style={{ color: "white", fontFamily: "Mohave" }}
                >
                  MyWork
                </h1>
                <div
                  className="card mx-auto my-5"
                  id="cardItself"
                  style={{ backgroundColor: "#212936" }}
                >
                  <p id="welcome">Create a MyWork Account</p>

                  <div className="card-body d-flex flex-column">
                    <div className="container d-flex flex-column">
                      <div className="row" id="row">
                        <div className="col-md-9" id="nameCol">
                          <input
                            type="name"
                            id="name"
                            name="name"
                            placeholder=" Your name"
                            style={{
                              borderColor: "#dfdbdf",
                              borderStyle: "groove",
                              textAlign: "left",
                              border: "0px solid #ccc",
                            }}
                          />
                        </div>

                        <div className="col-md-9" id="emailCol">
                          <div className="form-outline">
                            <form action="submit" method="post">
                              <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your Email"
                                style={{
                                  borderColor: "#dfdbdf",
                                  borderStyle: "groove",
                                  textAlign: "left",
                                  border: "0px solid #ccc",
                                }}
                              />
                            </form>
                          </div>
                        </div>

                        <div className="col-md-10" id="passwordCol">
                          <form action="submit" method="post">
                            <input
                              type="password"
                              id="password"
                              name="Password"
                              placeholder=" Your Password"
                              style={{
                                borderColor: "#dfdbdf",
                                borderStyle: "groove",
                                border: "0px solid #ccc",
                                marginLeft: "0px",
                              }}
                            ></input>
                          </form>
                        </div>

                        <div className="col-md-10" id="confirmPasswordCol">
                          <form action="submit" method="post">
                            <input
                              type="password"
                              id="password"
                              name="Password"
                              placeholder=" Confirm your Password"
                              style={{
                                borderColor: "#dfdbdf",
                                borderStyle: "groove",
                                border: "0px solid #ccc",
                                marginLeft: "0px",
                              }}
                            ></input>
                          </form>
                        </div>

                        <button
                          type="submit"
                          className="btn "
                          id="send-button"
                          style={{
                            lineHeight: "20px",
                            fontSize: "24px",
                            background: "#B1E457",
                            height: "45px",
                            color: "#212936",
                            fontFamily: "Mohave",
                            fontWeight: "500px",
                            marginLeft: "0px",
                          }}
                        >
                          Sign In
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column" style={{ margin: "0" }}>
                <p id="donthaveanaccount">
                  Don't have an account?<span id="signup">Sign Up</span>
                </p>
                <p id="forgotpassword">Forgot password?</p>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Login;
