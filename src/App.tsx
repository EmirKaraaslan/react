import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import exitlogo from "./pngandicons/doorexit.png";
import phoneIcon from "./pngandicons/phone-call.png";
import { url } from "inspector";
import Navbar from "./components/Navbars/Navbar";
import Login from "./components/Logins/LoginFirst"; 
import Card from "./components/Cards/ContactCard";
import Register from "./components/Registers/Register";
import BurgerNavbar from "./components/Navbars/burgerNavbar";
import FancySidebar from "./components/fancySidebar";
import { useMediaQuery } from "react-responsive";
import NewsCard from "./components/Cards/NewsCard"
import NavbarwithSearch from "./components/Navbars/NavbarwithSearch";
import NavbarformobileFancysidebar from "./components/Navbars/NavbarformobileFancysidebar";
function App() {

  /**
   *  burada screen daralmasında istediğim tsx dosyasını
   *   kullnmak için reactın sağladığı  'useMediaQuery özellğini kullandım
   * */ 
  const isWideScreen = useMediaQuery({ query: "(min-width:768px)" });
  const isNarrowScreen = useMediaQuery({ query: "(max-width:768px)" });
  return (
    <div className="App">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        {/* <Login/> */}

        {/* {isWideScreen && <Navbar/>}
        {isNarrowScreen && <BurgerNavbar />}
        <Card /> */}
        {/* <Register/> */}
        
        <NewsCard/>
        
          {/* <Navbar/> */}
          {/* <NavbarformobileFancysidebar/> */}
        
        
        
          
      </body>
    </div>
  );
}

export default App;
