import { Button } from "react-bootstrap";
import React from "react";
import {Navbar, NavDropdown,Nav, Image} from 'react-bootstrap'
import {useAuth} from './auth/authContext'


const HeaderNavbar = (props) => {
  const auth = useAuth();
  return (
      
    <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand  href="/"><h5 >WebServ4u</h5></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/about">About</Nav.Link>
   
     
        <Nav.Link href="/contact">Contact</Nav.Link>
        <Nav.Link href="/faq">FAQ</Nav.Link>
      </Nav>
      <Nav>
     
      {
        auth.user ?  
        <NavDropdown title="Admin" id="collasible-nav-dropdown" >
          <NavDropdown.Item href="/createTrivia">Create Trivia</NavDropdown.Item>
          <NavDropdown.Item href="/createFakeOrNot">Create Fake or Not</NavDropdown.Item>
          <NavDropdown.Item href="/createKyaBoltiPublic">Create Kya Bolti Public</NavDropdown.Item>
          <NavDropdown.Item href="/createDaamSahiHai">Create Daam Sahi Hai</NavDropdown.Item>
          <NavDropdown.Item href="/createFYI">Create FYI</NavDropdown.Item>
          <NavDropdown.Item href="/createKaun">Create Kaun? Who did it</NavDropdown.Item>
          <Button style={{marginLeft:"25px",marginTop:"10px"}} onClick={async ()=> await auth.signOut()} > LogOut </Button>
        </NavDropdown> :  <Nav.Link href="/signin">SignIn</Nav.Link>
      }


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
