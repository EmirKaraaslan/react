import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useMediaQuery } from "react-responsive";
import NewsCard from "./components/Cards/NewsCard";
import AboutUs from "./components/Cards/AboutUs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Logins/LoginFirst";
import Profile from "./components/Cards/Profile";
import ContactCard from "./components/Cards/ContactCard";
import Navbar from "react-bootstrap/esm/Navbar";
import BurgerNavbar from "./components/Navbars/burgerNavbar";
import PersonList from "./components/Cards/PersonList";
import Tasks from "./components/Cards/Tasks";
import DoneTasks from "./components/Cards/DoneTasks";
import NavbarformobileFancysidebar from "./components/Navbars/NavbarformobileFancysidebar";

function App() {
 
  return (
    <div className="App">

    


      {/* Yönlendirme ve sayfa içeriği */}
      <Router>
        {/* Menü ve navbar bileşenlerini buraya ekleyebilirsiniz */}
        <nav>
          {/* Navigasyon linkleri */}

        </nav>

        

        <Routes>
          <Route path="/" element={<NewsCard />} />
          <Route path="/Profile" element={<Profile/>}/>
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Contact" element={<ContactCard/>}/>
          <Route path="/NewsCard" element={<NewsCard/>}/>
          <Route path="/PersonList" element={<PersonList/>}/>
          <Route path="/Tasks" element={<Tasks/>}/>
          <Route path="/DoneTasks" element={<DoneTasks/>}/>
          <Route path="/Exit" element={<Login/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
