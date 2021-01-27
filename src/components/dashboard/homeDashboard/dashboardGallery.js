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
    <Card.Title>Flipkart Fake Or Not Quiz?</Card.Title>
   
    <Button variant="primary">Answer</Button>
  </Card.Body>
</Card></a>
<a href='/flipkart-daily-trivia-quiz'> 
<Card border="dark" style={{maxWidth:"19rem",margin:"30px"}} >
  <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/DailyTrivia1.png"} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    
    <Button variant="primary">Answer</Button>
  </Card.Body>
</Card></a>
</CardGroup>
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
         <a href='/flipkart-daily-trivia-quiz'> 
<Card border="dark" style={{maxWidth:"19rem",margin:"30px"}}>
  <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/DailyTrivia1.png"} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
   
    <Button variant="primary">Answer</Button>
  </Card.Body>
</Card></a>
<a href='/flipkart-daily-trivia-quiz'> 
<Card border="dark" style={{maxWidth:"19rem",margin:"30px"}} >
  <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/DailyTrivia1.png"} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    
    <Button variant="primary">Answer</Button>
  </Card.Body>
</Card></a>
</CardGroup>      </Card>
        </div>
    )
}

export default DashboardGallery;