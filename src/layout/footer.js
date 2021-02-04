import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faGithub,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";
  import './footer.css'
import { Col, ProgressBar, Row } from "react-bootstrap";

function Footer() {
  
  return (
    <div>

   <footer className="bg-dark text-white text-center text-lg-start">
   <br></br>
  <div className="container p-4">
    <div className="row">

      <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h5 className="text-uppercase">Our Services</h5><br></br>
   <Row> 
  <Col>
  <ProgressBar label='95%' animated now={95} />
  <br></br>
 <b style={{textShadow:"1px 1px blue" }}>Client Retention</b>
  <p style={{fontFamily:"courier",
    textIndent:"10px"}}>Great Partnerships, work together to deliver success.
    every step on the way...
  </p>
  </Col>
   
   <Col> 
   <ProgressBar label='92%' animated now={92} />
   <br></br>
 <b style={{textShadow:"1px 1px blue" }}>Member Satisfaction</b>
  <p style={{fontFamily:"courier",
    textIndent:"10px"}}> Enhancing the club experience. The power of your club lies in your members.
  </p>
</Col>
<Col>
<ProgressBar label='85%' animated now={85} /><br></br>
 <b style={{textShadow:"1px 1px blue" }}>Net Promotor Score</b>
  <p style={{fontFamily:"courier",
    textIndent:"10px"}}> Our unWavering focus on our customers 
    success speaks for itself.
  </p>

 </Col>
   </Row>
      
      </div>
      
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
       
      </div>
      
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
    
        <br></br>
        <ul className="list-unstyled">
          <Row> 
     <Col><li>
            <a href="/about" >About</a>
          </li><br></br>
          <li>
            <a href="/faq" >FAQ</a>
          </li><br></br>
          <li>
            <a href="/disclaimer" >Disclaimer</a>
          </li><br></br>
          <li>
            <a href="/privacyPolicy" >PrivacyPolicy</a>
          </li><br></br>
          <li>
            <a href="/termsAndCondition" >Terms&condition</a>
          </li><br></br>
          <li>
            <a href="/" >Complaint</a>
          </li><br></br>  </Col>
    

    <Col> <ul className="list-unstyled mb-0">
          <li><a  href="https://github.com/satyendrasingh8" >
  <FontAwesomeIcon icon={faGithub} size="2x"  /><b>  Github  </b> 
</a> </li><br></br>
         
<li>
          <a href="https://www.linkedin.com/in/satyendra-singh-98985a196/"
  className=" social">
  <FontAwesomeIcon icon={faLinkedin} size="2x" /><b> LinkedIn  </b> 
</a>          </li><br></br>
          <li>
          <a href=""
  className="youtube social">
  <FontAwesomeIcon icon={faYoutube} size="2x" /><b> Youtube  </b> 
</a>          </li><br></br>
          <li>
          <a href=""
  className="facebook social">
  <FontAwesomeIcon icon={faFacebook} size="2x" /><b> Facebook  </b> 
</a>
          </li><br></br>
          <li>
          <a href="" className="twitter social">
  <FontAwesomeIcon icon={faTwitter} size="2x" /><b> Twitter  </b> 
</a>
          </li><br></br>
          
          <li>
          <a href=""
  className="instagram social">
  <FontAwesomeIcon icon={faInstagram} size="2x" /><b> Instagram </b> 
</a>
          </li><br></br>
        </ul> </Col>
          </Row>
        </ul>
      </div>
      
    </div>

  </div>


  
  <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
  All rights are Reserved.  © 2020-21 Copyright:&nbsp;
    <a className="text-blue" href="/">WebServ4u.com</a>
  </div>

</footer>
    </div>
  );
}

export default Footer;
