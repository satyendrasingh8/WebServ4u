import React ,{useEffect, useState,useRef} from 'react';
import Mountain from '../images/mountain.jpg';
import me from '../images/img_bg.jpg';
import Typical from 'react-typical' 
import { Carousel,Card,Container,Row,Col, InputGroup, FormControl, Form,Button } from 'react-bootstrap';
 import './about.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
 faYoutube,
  faTelegram,
  faGithub,
  faLinkedin

} from "@fortawesome/free-brands-svg-icons";
import MetaDecorator from '../utils/metaDecorator'
const content = require('../dummyData/pages.json')

function About() {


  return (<div>
    <MetaDecorator title={content.aboutTitle} description={content.aboutDescription} />
  <Carousel >

  <Carousel.Item  >
  <img 
  width="100%"
  height="500"
src={Mountain} />
    <Carousel.Caption>
      
    <b> <div> Welcome To</div></b>
    <b> <b></b> <h5 >  <b>
      <div style={{textShadow:"1px 1px black" }}><a href="https://WebServ4u.com">  <Typical
        steps={['', 1500, 'WebServ4u.com', 2600,]}
        loop={Infinity}
        wrapper="p"
        
      />
  </a></div> </b></h5></b>
    </Carousel.Caption>
  </Carousel.Item>

</Carousel>

<Card className="Acard"> 

<p>
  <b><div style={{textShadow:"1px 1px black" }}><h3>WELCOME ! </h3></div> </b>
</p>
<p><b> To a creative studio that loves to learn, collaborate and create.</b>  </p>
<p> 
<i>"The <b>mission</b> of our <b>blog </b> is to encourage a thoughtful life that leads to feelings of 
belonging and hope in both myself and my readers by exposure to a variety of ideas,
experiences, and real-life stories . <b>Laughter</b> is always <b>Welcome</b>".</i>
</p>
<p>We wite because,feel compelled to write. Our blog is for like-interested people
  who want to live a mindful, introspective life as well the 
  <b> occasional laugh. </b> </p>
<br></br>
<br></br><br></br>
<h4 style={{textShadow:"1px 1px black" }}> About me</h4>
<p style={{textShadow:".5px .5px black" }}> Hi! I'm <b>Satyendra</b>, from
 Chitrakoot,UttarPradesh India.
  I'm currently pursuing Bachelor of Technology from <b>Computer
     Science and Enginnering </b> from JK institue of applied physics and Technology university of
     allahabad, Prayagraj UttarPradesh. 
  I'm a passionate <b> Developer</b> in <b>Web</b> as well as in <b>Mobile App </b>. and crazy about 
  exploring new technology. </p>
  <p>Join with us to become <a href="https://blog.webserv4u.com/">masters in computer science specializations </a>
  &nbsp; <a href="https://www.quora.com/profile/Satyendra-Singh-1913">Quora</a> &nbsp;
   <a href="https://satyendrasingh8.medium.com/"> medium.com</a>&nbsp; 
   <a href="https://in.pinterest.com/webserv4u/_created/"> pinterest.com</a>
  </p>
  <p style={{fontFamily:"courier",
    textIndent:"10px"}}> This is basically a blogging website in which we will provide answers of each Quiz that 
    will be organising by Flipkart Game Session.</p>
</Card>

<Card className="outer-card">
<b><h2><div style={{textShadow:"1px 1px black" }}>Meet Our Teem</div>  </h2></b>
<br></br><br></br>
  <Row>
<Col md="6" lg="6" xl="6">
<div className="container"><Card   style={{ width: '18rem' }}>
  <Card.Img
  height="200px"
  variant="top" src={me} />
  <Card.Body className="bg-light">
    <Card.Title  ><b> 
      <div style={{textShadow:"1px 1px black" }}>Satyendra Singh</div></b></Card.Title>
    <Card.Subtitle>
      Developer | Managing Director </Card.Subtitle><br></br>
    <Card.Text><div style={{fontFamily:"courier",
    textIndent:"10px"
 
  }}>
      " A collaborative explosion of creative fueled by a community of amazing
      Developers and designers. So come be our friend and 
      see if we mean it.
      <a href="https://blog.webserv4u.com/"> blog.webserv4u.com </a>" 
      
      </div>
    </Card.Text>
  </Card.Body>
</Card></div>
</Col>
<Col md="6" lg="6" xl="6">

<div className="container"> <Card  style={{ width: '18rem' }}>
  <Card.Img
   height="230px"
  variant="top" src="https://trustyathartha.in/static/media/r.acd6f040.jpg" />
   <Card.Body className="bg-light">
    <Card.Title  ><b> 
      <div style={{textShadow:"1px 1px black" }}>Raj Patel</div></b></Card.Title>
    <Card.Subtitle>
      Developer | Freelancer | Project Manager </Card.Subtitle><br></br>
    <Card.Text><div style={{fontFamily:"courier",
    textIndent:"10px"
 
  }}>
      " Complete IT solutions Websites | Mobile Apps 
      | College Projects Visit my official website 
      MyWebians.com 
      "</div>
    </Card.Text>
    
  </Card.Body>
</Card></div>

</Col>


  </Row>


</Card>
<br></br>

<Card className="outer-card">
  <Card.Title as="h2"><h2><div style={{textShadow:"1px 1px black" }}> Our Mission</div> </h2> </Card.Title>
<Row>

<Col sm="6" md="6" lg="4" xl="4" >
<Card className="Acard misson-card" >
  <Card.Body>
    <Card.Title><div style={{textShadow:"1px 1px black" }}> Flexibility</div> </Card.Title>
    
    <Card.Text><div style={{fontFamily:"courier",
    textIndent:"10px"
 
  }}>
 Build tools that can be leveraged across a wide range of projects and ease.
      
      </div>
    </Card.Text>
  </Card.Body>
</Card>
</Col>
<Col sm="6" md="6" lg="4" xl="4">
<Card className="Acard misson-card" >
  <Card.Body>
    <Card.Title><div style={{textShadow:"1px 1px black" }}> Support</div> </Card.Title>
    
    <Card.Text><div style={{fontFamily:"courier",
    textIndent:"10px"
 
  }}>
      Deliver excellent support through training, detailed docs
      and community
      
      </div>
    </Card.Text>
  </Card.Body>
</Card>
</Col>
<Col sm="6" md="6" lg="4" xl="4">
<Card className="Acard misson-card" >
  <Card.Body>
    <Card.Title><div style={{textShadow:"1px 1px black" }}> creativity</div> </Card.Title>
    
    <Card.Text><div style={{fontFamily:"courier",
    textIndent:"10px"
 
  }}>
     Empower creative expression in a fun way  by making our tools intuitive and highly 
     capable. 
      
      </div>
    </Card.Text>
  </Card.Body>
</Card>
</Col>


</Row>
<Row>

<Col sm="6" md="6" lg="4" xl="4" >
<Card className="Acard misson-card" >
  <Card.Body>
    <Card.Title><div style={{textShadow:"1px 1px black" }}> Integrity!</div> </Card.Title>
    
    <Card.Text><div style={{fontFamily:"courier",
    textIndent:"10px"
 
  }}>
    Maintain reputation of integrityn and reliability and focused around our users requirement.
      
      </div>
    </Card.Text>
  </Card.Body>
</Card>
</Col>
<Col sm="6" md="6" lg="4" xl="4">
<Card className="Acard misson-card" >
  <Card.Body>
    <Card.Title><div style={{textShadow:"1px 1px black" }}> Stability</div> </Card.Title>
    
    <Card.Text><div style={{fontFamily:"courier",
    textIndent:"10px"
 
  }}>
      Avoid the common frailties of open
      source projects while also keeping the tools very accesible.
      
      </div>
    </Card.Text>
  </Card.Body>
</Card>
</Col>
<Col sm="6" md="6" lg="4" xl="4">
<Card className="Acard misson-card" >
  <Card.Body>
    <Card.Title><div style={{textShadow:"1px 1px black" }}> Innovation</div> </Card.Title>
    
    <Card.Text><div style={{fontFamily:"courier",
    textIndent:"10px"
 
  }}>
     Try to create world class-tools that standup to the most rigorous
     implementation.
      
      </div>
    </Card.Text>
  </Card.Body>
</Card>
</Col>


</Row>
</Card>

<Card className="outer-card">
  <Card.Title as="h3"><div style={{textShadow:"1px 1px black" }}> Contact Info  </div> </Card.Title>
<Row width="100%">

<Col  md="9" lg="10" xl="10" >
<Card className="Acard misson-card" >
  <Card.Body>
    <Card.Title><div style={{textShadow:"1px 1px black" }}>Join the Ideaware Team! </div></Card.Title>
    
    <Card.Text>
      Subscribe and get our latest news update and many more.
    </Card.Text>
  </Card.Body>
  <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Enter email"  required />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Button variant="primary" type="submit">
    Subscribe
  </Button>
</Form>
</Card>
</Col>


</Row>

<Row width="100%">

<Col  md="9" lg="10" xl="10" >
<Card className="Acard misson-card"  >
  <Card.Body>
    <Card.Title><div style={{textShadow:"1px 1px black" }}>Stay in Touch! </div></Card.Title>
    
  
  </Card.Body>
  <a  href="https://t.me/FlipkartDailyQuiz" ><Button variant="info">
  <FontAwesomeIcon icon={faTelegram} size="4x"  /> &nbsp;<b> Join our Telegram Group</b>  </ Button>
</a>
<br></br>
<a  href="https://www.linkedin.com/in/satyendra-singh-98985a196/" ><Button variant="info">
  <FontAwesomeIcon icon={faLinkedin} size="4x"  />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;<b> Follow on LinkedIn  </b>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; </ Button>
</a>
<br></br>
<a  href="" ><Button variant="danger">
  <FontAwesomeIcon icon={faYoutube} size="4x"  /> &nbsp;<b> Join our Youtube channel</b>  </ Button>
</a><br></br>
<a  href="https://github.com/satyendrasingh8" ><Button variant="dark">
  <FontAwesomeIcon icon={faGithub} size="4x"  />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;<b> Follow on Github  </b>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; </ Button>
</a>

</Card>
</Col>


</Row>
 </Card>



   </div>
  );
}


export default About;
