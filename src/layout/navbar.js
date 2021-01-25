import React from "react";
import {Navbar, NavDropdown,Nav, Image} from 'react-bootstrap'


const HeaderNavbar = (props) => {

  return (
      
    <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand  href="/"><h5 style={{color:"blue"}}>WebServ4u</h5></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
        <Nav.Link href="/faq">FAQ</Nav.Link>
      </Nav>
      <Nav>
      
        <Nav.Link href="/disclaimer">Disclaimer</Nav.Link>
        <Nav.Link href="/privacyPolicy">
          PrivacyPolicy
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
}


export default HeaderNavbar;
