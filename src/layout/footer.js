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
  import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Col, Row } from "react-bootstrap";

function Footer() {
  const percentage = 96;
  const percentage2 = 90;
  const percentage3 = 85;
  return (
    <div>

   <footer className="bg-dark text-white text-center text-lg-start">
   <br></br>
  <div className="container p-4">
    <div className="row">

      <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h5 className="text-uppercase">Our Services</h5>
   <Row> 
  <Col>
  <CircularProgressbar
  value={percentage}
  text={`${percentage}%`}
  styles={{
    // Customize the root svg element
    root: {},
    // Customize the path, i.e. the "completed progress"
    path: {
      // Path color
      stroke: `rgba(62, 152, 199, ${percentage / 100})`,
      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
      strokeLinecap: 'butt',
      // Customize transition animation
      transition: 'stroke-dashoffset 0.5s ease 0s',
      // Rotate the path
      transform: 'rotate(0.25turn)',
      transformOrigin: 'center center',
    },
    // Customize the circle behind the path, i.e. the "total progress"
    trail: {
      // Trail color
      stroke: '#d6d6d6',
      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
      strokeLinecap: 'butt',
      // Rotate the trail
      transform: 'rotate(0.25turn)',
      transformOrigin: 'center center',
    },
    // Customize the text
    text: {
      // Text color
      fill: '#f88',
      // Text size
      fontSize: '16px',
    },
    // Customize background - only used when the `background` prop is true
    background: {
      fill: '#3e98c7',
    },
  }}
/>
<br></br><br></br>
 <b>Client Retention</b>
  <p>Great Partnerships, work together to deliver success.
    every step on the way...
  </p>
  </Col>
   
   <Col><CircularProgressbar
  value={percentage}
  text={`${percentage2}%`}
  styles={{
    // Customize the root svg element
    root: {},
    // Customize the path, i.e. the "completed progress"
    path: {
      // Path color
      stroke: `rgba(62, 152, 199, ${percentage / 100})`,
      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
      strokeLinecap: 'butt',
      // Customize transition animation
      transition: 'stroke-dashoffset 0.5s ease 0s',
      // Rotate the path
      transform: 'rotate(0.25turn)',
      transformOrigin: 'center center',
    },
    // Customize the circle behind the path, i.e. the "total progress"
    trail: {
      // Trail color
      stroke: '#d6d6d6',
      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
      strokeLinecap: 'butt',
      // Rotate the trail
      transform: 'rotate(0.25turn)',
      transformOrigin: 'center center',
    },
    // Customize the text
    text: {
      // Text color
      fill: '#f88',
      // Text size
      fontSize: '16px',
    },
    // Customize background - only used when the `background` prop is true
    background: {
      fill: '#3e98c7',
    },
  }}
/> 
<br></br><br></br>
 <b>Member Satisfaction</b>
  <p> Enhancing the club experience. The power of your club lies in your members.
  </p>
</Col>
<Col><CircularProgressbar
  value={percentage}
  text={`${percentage3}%`}
  styles={{
    // Customize the root svg element
    root: {},
    // Customize the path, i.e. the "completed progress"
    path: {
      // Path color
      stroke: `rgba(62, 152, 199, ${percentage / 100})`,
      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
      strokeLinecap: 'butt',
      // Customize transition animation
      transition: 'stroke-dashoffset 3.5s ease 3s',
      // Rotate the path
      transform: 'rotate(0.25turn)',
      transformOrigin: 'center center',
    },
    // Customize the circle behind the path, i.e. the "total progress"
    trail: {
      // Trail color
      stroke: '#d6d6d6',
      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
      strokeLinecap: 'butt',
      // Rotate the trail
      transform: 'rotate(0.25turn)',
      transformOrigin: 'center center',
    },
    // Customize the text
    text: {
      // Text color
      fill: '#f88',
      // Text size
      fontSize: '16px',
    },
    // Customize background - only used when the `background` prop is true
    background: {
      fill: '#3e98c7',
    },
  }}
/>
<br></br><br></br>
 <b>Net Promotor Score</b>
  <p> Our unWavering focus on our customers 
    success speaks for itself.
  </p>

 </Col>
   </Row>
      
      </div>
      
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase">Contact</h5>

        <ul className="list-unstyled mb-0">
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
        </ul>
      </div>
      
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase mb-0">Links</h5>
        <br></br>
        <ul className="list-unstyled">
          <li>
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
          </li><br></br>
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
