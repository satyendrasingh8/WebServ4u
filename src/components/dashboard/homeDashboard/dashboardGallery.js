import React from 'react'
import { Button, Card, CardGroup, Col, Container, ListGroup, Nav, Row } from 'react-bootstrap';
import MetaDecorator from '../../../utils/metaDecorator';


const DashboardGallery = () => {

    return (
        <div>
         
      <Card style={{textAlign:'center'}}> 
      <CardGroup style={{margin:"auto"}}>
        
      <MetaDecorator title="flipkart trivia today answers" description="flipkart trivia today answers" />
        <a href='/flipkart-trivia-today-answers'> 
        <Card border="dark" style={{maxWidth:"19rem",margin:"30px"}}>
  <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/DailyTrivia1.png"} />
  <Card.Body>
    <Card.Title >Flipkart Trivia Today Answers </Card.Title>
  
    <Button variant="primary">Answer</Button>
  </Card.Body>
</Card>
         </a>

         <MetaDecorator title="flipkart fake or not today answer" description="flipkart fake or not today answer" />
         <a href='/flipkart-fake-or-not-today-answer'> 
<Card border="dark" style={{maxWidth:"19rem",margin:"30px"}}>
  <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/1.png"} />
  <Card.Body>
    <Card.Title>Flipkart Fake Or Not Quiz? Answers</Card.Title>
   
    <Button variant="primary">Answer</Button>
  </Card.Body>
</Card></a>

<MetaDecorator title="kya bolti public flipkart answers" description="kya bolti public flipkart answers" />
<a href='/kya-bolti-public-flipkart-answers'> 
<Card border="dark" style={{maxWidth:"19rem",margin:"30px"}} >
  <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/2.png"} />
  <Card.Body>
    <Card.Title>Flipkart Kya Bolti Public Quiz? Answers</Card.Title>
    
    <Button variant="primary">Answer</Button>
  </Card.Body>
</Card></a>

<MetaDecorator title="flipkart daam Sahi hai today answer" description="flipkart daam sahi hai today answer" />
</CardGroup>
<CardGroup style={{margin:"auto"}}>
        <a href='/flipkart-daam-sahi-hai-quiz'> 
        <Card border="dark" style={{maxWidth:"19rem",margin:"30px"}}>
  <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/3.png"} />
  <Card.Body>
    <Card.Title >Flipkart Daam Sahi Hai? Quiz Answers </Card.Title>
  
    <Button variant="primary">Answer</Button>
  </Card.Body>
</Card>
         </a>

         <MetaDecorator title="flipkart fYI today answer" description="flipkart FYI today answer" />
  <a href='/flipkart-for-your-infromation-quiz'> 
<Card border="dark" style={{maxWidth:"19rem",margin:"30px"}}>
  <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/4.png"} />
  <Card.Body>
    <Card.Title>Flipkart For Your Information(FYI) Quiz Answers</Card.Title>
   
    <Button variant="primary">Answer</Button>
  </Card.Body>
</Card></a>

<MetaDecorator title="flipkart kaun who did it answer" description="flipkart kaun who did it answer" />
<a href='/flipkart-kaun-who-did-it-quiz'> 
<Card border="dark" style={{maxWidth:"19rem",margin:"30px"}} >
  <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/5.png"} />
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