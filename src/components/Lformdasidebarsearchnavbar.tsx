import React from "react";
import FancySidebar from "./../components/fancySidebar";
import NavbarwithSearch from "./../components/Navbars/NavbarwithSearch";
import { Container } from "react-bootstrap";
import { url } from "inspector";

// Henüz Responsvie Değil



export default function news() {
  return (
    <Container fluid>
      <div className="flex-container">
        <div className="flex-item sidebar">
          <FancySidebar />
        </div>
        <div className="flex-item content">
          <div className="row navbar-row">
            <NavbarwithSearch />
          </div>
          <div className="row additional-content">
            {/* Diğer içerikler buraya gelecek */}
          </div>
        </div>
      </div>
    </Container>
  );
}
