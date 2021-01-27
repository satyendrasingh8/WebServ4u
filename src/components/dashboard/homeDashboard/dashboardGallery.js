import React from 'react'
import { Button, Card, CardGroup, Col, Container, ListGroup, Nav, Row } from 'react-bootstrap';


const DashboardGallery = () => {

    return (
        <div>
         
      <Card> 
      <CardGroup style={{margin:"auto"}}>
        <a href='/flipkart-daily-trivia-quiz'> 
        <Card border="dark" style={{maxWidth:"19rem",margin:"30px"}}>
  <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/DailyTrivia1.png"} />
  <Card.Body>
    <Card.Title >Flipkart Daily Trivia Quiz Answers </Card.Title>
  
    <Button variant="primary">Answer</Button>
  </Card.Body>
</Card>
         </a>
         <a href='/flipkart-fake-or-not-quiz'> 
<Card border="dark" style={{maxWidth:"19rem",margin:"30px"}}>
  <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/DailyTrivia1.png"} />
  <Card.Body>
    <Card.Title>Flipkart Fake Or Not Quiz? Answers</Card.Title>
   
    <Button variant="primary">Answer</Button>
  </Card.Body>
</Card></a>
<a href='/flipkart-kya-bolti-public-quiz'> 
<Card border="dark" style={{maxWidth:"19rem",margin:"30px"}} >
  <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/DailyTrivia1.png"} />
  <Card.Body>
    <Card.Title>Flipkart Kya Bolti Public Quiz? Answers</Card.Title>
    
    <Button variant="primary">Answer</Button>
  </Card.Body>
</Card></a>
</CardGroup>
<CardGroup style={{margin:"auto"}}>
        <a href='/flipkart-daam-sahi-hai-qui'> 
        <Card border="dark" style={{maxWidth:"19rem",margin:"30px"}}>
  <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/DailyTrivia1.png"} />
  <Card.Body>
    <Card.Title >Flipkart Daam Sahi Hai? Quiz Answers </Card.Title>
  
    <Button variant="primary">Answer</Button>
  </Card.Body>
</Card>
         </a>
         <a href='/flipkart-for-your-infromation-quiz'> 
<Card border="dark" style={{maxWidth:"19rem",margin:"30px"}}>
  <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/DailyTrivia1.png"} />
  <Card.Body>
    <Card.Title>Flipkart For Your Information(FYI) Quiz Answers</Card.Title>
   
    <Button variant="primary">Answer</Button>
  </Card.Body>
</Card></a>
<a href='/flipkart-kaun?-who-did-it-quiz'> 
<Card border="dark" style={{maxWidth:"19rem",margin:"30px"}} >
  <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/DailyTrivia1.png"} />
  <Card.Body>
    <Card.Title> Flipkart Kaun? Who did it? Quiz Answers</Card.Title>
    
    <Button variant="primary">Answer</Button>
  </Card.Body>
</Card></a>
</CardGroup>      </Card>
        </div>
    )
}

export default DashboardGallery;