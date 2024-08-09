import React, { useState } from "react";
import "../../styles/register.scss";
import phoneIcon from "../pngandicons/phone-call.png";
import { auth } from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

/**
 * const Login = () => { ... }
 *
 * kısmının başına React.FC ekledim (React.FunctionComponent)
 * bu şekilde bir bileşeninn props'larını tanımlayarak TypeScript'in
 * tür denetimin kullanmamızı sağlar ve hataları compaile time ' da
 * catch leyebiliriz.
 *
 */

const Register: React.FC = () => {
  /**
   * postmandeki gibi bir backend işi varsa aklımıza ilk gelmesi gereken
   * EN TEMEL BACKEND İŞİ
   * Stateler olmalı , kullanıcının girdisini almak ve bunu saklamak için
   * her girdi için 2 şer (1. state , 2. state ) olarak useState(); ile
   * state belirleriz.
   */

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
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

  const [registerSuccess, setRegisterSuccess] = useState<boolean | null>(null);

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

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setRegisterSuccess(null);

    try {
      // firebase in kendi fonksiyonu
      await createUserWithEmailAndPassword(auth, email, password);

      // giriş doğruysa
      console.log("Login successful");
      setRegisterSuccess(true);
      navigate("/NewsCard");

      // buraya yönledirir
      navigate("/AboutUs");
    } catch (error) {
      console.log("Error: ", error);
      setError((error as Error).message);

      // gitiş hatalıysa loginSuccess i false a setliyor
      setRegisterSuccess(false);
    }
  };

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

            <div className="col-md-10" id="columnWholeCardregister">
              <div id="columnInnerContainer">
                <h1
                  className="topHeader"
                  style={{ color: "white", fontFamily: "Mohave" }}
                >
                  MyWork
                </h1>
                <div
                  className="card mx-auto my-5"
                  id="cardItselfregister"
                  style={{ backgroundColor: "#212936" }}
                >
                  <p id="welcome">Create a MyWork Account</p>

                  <div className="card-body d-flex flex-column">
                    <div className="container d-flex flex-column">
                      <div className="row" id="row">
                        <div className="col-md-9" id="emailCol">
                          <div className="form-outline">
                            {registerSuccess === false && (
                              <div className="loginfailallert">
                                <div
                                  className="col-md-9"
                                  id="loginfailallertcol"
                                >
                                  <p id="registerfailallertmessageUserAlreadyExsist">
                                    User Already Exsist !
                                  </p>
                                </div>
                              </div>
                            )}

                            {password != confirmpassword && (
                              <div className="loginfailallert">
                                <div
                                  className="col-md-9"
                                  id="loginfailallertcol"
                                >
                                  <p id="registerFailallertmessagePasswordsNotMatch">
                                    Passwords are not match
                                  </p>
                                </div>
                              </div>
                            )}
                            <form onSubmit={handleRegister}>
                              <input
                                type="name"
                                id="nameregister"
                                name="name"
                                placeholder=" Your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                style={{
                                  borderColor: "#dfdbdf",
                                  borderStyle: "groove",
                                  textAlign: "left",
                                  border: "0px solid #ccc",
                                }}
                              />

                              <input
                                type="email"
                                id="emailregisiter"
                                name="email"
                                placeholder=" Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{
                                  borderColor: "#dfdbdf",
                                  borderStyle: "groove",
                                  border: "0px solid #ccc",
                                  marginLeft: "0px",
                                }}
                              ></input>

                              <input
                                type="password"
                                id="password"
                                name="Password"
                                placeholder=" Your Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={{
                                  borderColor: "#dfdbdf",
                                  borderStyle: "groove",
                                  border: "0px solid #ccc",
                                  marginLeft: "0px",
                                }}
                              ></input>

                              <input
                                type="password"
                                id="password"
                                name="Password"
                                placeholder=" Confirm your Password"
                                value={confirmpassword}
                                onChange={(e) =>
                                  setConfirmPassword(e.target.value)
                                }
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
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column" style={{ margin: "0" }}>
                <p id="donthaveanaccount">
                  Already have an accounts?
                  <span id="signup">
                    <a href="/" style={{ color: "rgba(88,130,14,1)" }}>
                      Login
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Register;
function push(arg0: string) {
  throw new Error("Function not implemented.");
}
