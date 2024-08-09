import React, { useState } from "react";
import "../../styles/login.scss";
import phoneIcon from "../pngandicons/phone-call.png";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { auth } from "../firebase/firebase";
/**
 * const Login = () => { ... }
 *
 * kısmının başına React.FC ekledim (React.FunctionComponent)
 * bu şekilde bir bileşeninn props'larını tanımlayarak TypeScript'in
 * tür denetimin kullanmamızı sağlar ve hataları compaile time ' da
 * catch leyebiliriz.
 *
 */

const Login: React.FC = () => {
  /**
   * postmandeki gibi bir backend işi varsa aklımıza ilk gelmesi gereken
   * EN TEMEL BACKEND İŞİ
   * Stateler olmalı , kullanıcının girdisini almak ve bunu saklamak için
   * her girdi için 2 şer (1. state , 2. state ) olarak useState(); ile
   * state belirleriz.
   */

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  // login doğruysa useNavigate() fonksiyonunu kullnamak için bunu tanımlıyorum
  const navigate = useNavigate();

  /**
   * yanlışsa card ' ın içine farklı
   * bir component eklemk istediğim için bunu öncelikle
   * backend ' de işartelemeliyim  ve html içinde bu işaret böyleyse bunu
   * yap demek için bir işaretleyici yaratmam lazım bunu da bir tip
   * state olarak oluşturacağım
   */

  const [loginSuccess, setLoginSuccess] = useState<boolean | null>();

  /**
   * HandleLogin fonksiyonu
   * firebase in kendi fonksiyonunu kullanmamız için hazırlamamız
   * gereken bir fonksiyon yapısı  ASYNC bir fonksyiondur
   *
   * Async Function : işlemleri asenkron yapmamızı sağlar ve yaygın
   * olarak  "await"
   * keywordu ile kullanılır genelde API çağrılarını çekmek için
   * async function lar tercih edilir çünkü bir işlem gerçekleşirken
   * arka planda farklı bir iş gerçekleşeceği için asenkron bir işlem.
   */

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginSuccess(null);

    try {
      // firebase in kendi fonksiyonu
      await signInWithEmailAndPassword(auth, email, password);
      // giriş doğruysa
      console.log("Login successful");
      setLoginSuccess(true);

      // buraya yönledirir
      navigate("/NewsCard");
    } catch (error) {
      console.log("Error: ", error);
      setError((error as Error).message);

      // gitiş hatalıysa loginSuccess i false a setliyor
      setLoginSuccess(false);
    }
  };

  return (
    <div>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Figtree:ital,wght@0,300..900;1,300..900&family=Inter:wght@100..900&family=Mohave:ital,wght@0,300..700;1,300..700&display=swap"
        rel="stylesheet"
      ></link>
      <body id="bodylogin" style={{ height: "100vh" }}>
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
                  id="cardItselflogin"
                  style={{ backgroundColor: "#212936" }}
                >
                  <p id="welcome">Welcome!</p>
                  <p
                    style={{
                      fontSize: "26px",
                      textAlign: "center",
                      color: "#6C727F",
                      fontFamily: "Mohave",
                    }}
                  >
                    Sign in to your account
                  </p>

                  <div
                    className="card-body d-flex flex-column"
                    id="cardbodylogin"
                  >
                    <div className="container d-flex flex-column">
                      <div className="row" id="row">
                        {loginSuccess === null && (
                          <p></p>
                        ) }
                        {loginSuccess === false && (
                          <div className="loginfailallert" >
                            <div className="col-md-9" id="loginfailallertcol">
                              <p id="loginfailallertmessage">Incorrect username or password!</p>
                            </div>
                          </div>
                        )}
                        
                        <div className="col-md-9" id="emailCol">
                          <div className="form-outline">
                            <form onSubmit={handleLogin}>
                              <input
                                type="email"
                                id="emaillogin"
                                name="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            

                            
                            <input
                              type="password"
                              id="password"
                              name="Password"
                              placeholder="Password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              style={{
                                borderColor: "#dfdbdf",
                                borderStyle: "groove",
                                border: "0px solid #ccc",
                                marginLeft: "0px",
                              }}
                            ></input>

<button
                           type="submit"
                          className="btn "
                          id="send-button"
                          style={{
                            lineHeight: "20px",
                            fontSize: "24px",
                            height: "45px",
                            fontFamily: "Mohave",
                            fontWeight: "500px",
                            marginLeft: "0px",
                          }}
                        >
                          Login
                        </button>
                          </form>
                          </div>
                        </div>

                        
                         
                       

                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="columnlogin" style={{ margin: "0" }}>
                <p id="donthaveanaccount">
                  Don't have an account?
                  <span id="signup">
                    <a href="/Register" style={{color:"rgba(88,130,14,1)"}}>Sign Up</a>
                  </span>
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
function push(arg0: string) {
  throw new Error("Function not implemented.");
}
