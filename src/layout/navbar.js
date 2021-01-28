import React from "react";
import {Navbar, NavDropdown,Nav, Image} from 'react-bootstrap'


const HeaderNavbar = (props) => {

  return (
      
    <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand  href="/"><h5 >WebServ4u</h5></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/about">About</Nav.Link>
        <NavDropdown title="Flipkart Quiz's" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/flipkart-daily-trivia-quiz">Daily Trivia</NavDropdown.Item>
        <NavDropdown.Item href="/flipkart-fake-or-not-quiz">Fake or Not</NavDropdown.Item>
        <NavDropdown.Item href="/flipkart-kya-bolti-public-quiz">Kya Bolti Public</NavDropdown.Item>
        <NavDropdown.Item href="/flipkart-daam-sahi-hai-quiz">Daam Sahi Hai</NavDropdown.Item>
        <NavDropdown.Item href="/flipkart-for-your-infromation-quiz">FYI</NavDropdown.Item>
        <NavDropdown.Item href="/flipkart-kaun-who-did-it-quiz">Kaun? Who did it</NavDropdown.Item>
      </NavDropdown>
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
