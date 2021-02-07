import React from 'react'
import { Button, Card, CardGroup, Col, Container, ListGroup, Nav, Row } from 'react-bootstrap';
import MetaDecorator from '../../../utils/metaDecorator';


const DashboardGallery = () => {

    return (
        <div>
         
      <Card style={{textAlign:'center'}}> 
      <CardGroup style={{margin:"auto"}}>
        
      
        <a href='/flipkart-trivia-today-answers'> 
        <Card border="dark" style={{maxWidth:"19rem",margin:"30px"}}>
  <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/DailyTrivia1.png"} />
  <Card.Body>
    <Card.Title >Flipkart Trivia Today Answers </Card.Title>
  
    <Button variant="primary">Answer</Button>
  </Card.Body>
</Card>
         </a>

      
         <a href='/flipkart-fake-or-not-today-answer'> 
<Card border="dark" style={{maxWidth:"19rem",margin:"30px"}}>
  <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/1.png"} />
  <Card.Body>
    <Card.Title>Flipkart Fake Or Not Quiz? Answers</Card.Title>
   
    <Button variant="primary">Answer</Button>
  </Card.Body>
</Card></a>


<a href='/kya-bolti-public-flipkart-answers'> 
<Card border="dark" style={{maxWidth:"19rem",margin:"30px"}} >
  <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/2.png"} />
  <Card.Body>
    <Card.Title> Kya Bolti Public Flipkart Answers</Card.Title>
    
    <Button variant="primary">Answer</Button>
  </Card.Body>
</Card></a>


</CardGroup>
<CardGroup style={{margin:"auto"}}>
        <a href='/flipkart-play-daam-sahi-hai'> 
        <Card border="dark" style={{maxWidth:"19rem",margin:"30px"}}>
  <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/3.png"} />
  <Card.Body>
    <Card.Title >Flipkart Play Daam Sahi Hai </Card.Title>
  
    <Button variant="primary">Answer</Button>
  </Card.Body>
</Card>
         </a>

         
  <a href='flipkart-fyi-for-your-information-quiz-answers'> 
<Card border="dark" style={{maxWidth:"19rem",margin:"30px"}}>
  <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/4.png"} />
  <Card.Body>
    <Card.Title>flipkart FYI For Your Information quiz answers</Card.Title>
   
    <Button variant="primary">Answer</Button>
  </Card.Body>
</Card></a>


<a href='/flipkart-kaun-who-did-it-quiz-answers'> 
<Card border="dark" style={{maxWidth:"19rem",margin:"30px"}} >
  <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/5.png"} />
  <Card.Body>
    <Card.Title> flipkart kaun who did it quiz answers</Card.Title>
    
    <Button variant="primary">Answer</Button>
  </Card.Body>
</Card></a>
</CardGroup>      </Card>
        </div>
    )
}

export default DashboardGallery;