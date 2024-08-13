import React, { useState } from "react";
import "../../styles/adminPanel.scss";
import phoneIcon from "../pngandicons/phone-call.png";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

import { auth } from "../firebase/firebase";
import Component from "react-responsive";
import AdminTaskManager from "./../admin/AdminTaskManger";
/**
 * const Login = () => { ... }
 *
 * kısmının başına React.FC ekledim (React.FunctionComponent)
 * bu şekilde bir bileşeninn props'larını tanımlayarak TypeScript'in
 * tür denetimin kullanmamızı sağlar ve hataları compaile time ' da
 * catch leyebiliriz.
 *
 */

const Login: React.FC = ({ ...rest }) => {
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
      navigate("/AdminTaskManager");
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
         
            <div className="col-md-12" id="columnWholeCard">
              <div id="columnInnerContainer">
                <h1
                  className="topHeader"
                  style={{ color: "white", fontFamily: "Mohave" }}
                ></h1>
                <div
                  className="card mx-auto my-7"
                  id="cardItselflogin"
                  style={{ backgroundColor: "#212936" }}
                >
                  <p id="welcome"> ADMIN PANEL</p>
                  <p
                    style={{
                      fontSize: "26px",
                      textAlign: "center",
                      color: "#6C727F",
                      fontFamily: "Mohave",
                    }}
                  ></p>

                  <div
                    className="card-body d-flex flex-column"
                    id="cardbodylogin"
                  >
                    <div className="container d-flex flex-column">
                      <div className="row" id="row">
                        {loginSuccess === null && <p></p>}
                        {loginSuccess === false && (
                          <div className="loginfailallert">
                            <div className="col-md-9" id="loginfailallertcol">
                              <p id="loginfailallertmessage">
                                Incorrect username or password!
                              </p>
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
