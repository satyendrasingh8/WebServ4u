import React from 'react'
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';



const GameType = () => {

    return (
        <div>
         
      <Card> 
      <Card.Header  style={{textShadow:"1px 1px black" }}><h3>List of Flipkart Daily Quizs</h3></Card.Header>
  <ListGroup variant="flush">
 
  <a href='/flipkart-trivia-today-answers'>  <ListGroup.Item>Flipkart Trivia Today Answers</ListGroup.Item></a>
 
 
  <a href='/flipkart-fake-or-not-today-answer'> <ListGroup.Item>Flipkart Fake or Not today answers</ListGroup.Item></a>
  
  
   <a href="/kya-bolti-public-flipkart-answers"> <ListGroup.Item> Kya Bolti Public Flipkart Answers</ListGroup.Item></a>
  
  
   <a href="/flipkart-play-daam-sahi-hai"><ListGroup.Item> Flipkart Play Daam Sahi Hai </ListGroup.Item></a>
  
  
   <a href="/flipkart-fyi-for-your-information-quiz-answers"> <ListGroup.Item>flipkart FYI For Your Information quiz answers</ListGroup.Item></a>
  
  
   <a href='/flipkart-kaun-who-did-it-quiz-answers'>   <ListGroup.Item>flipkart kaun who did it quiz answers</ListGroup.Item></a>
  </ListGroup>
      </Card>
        </div>
    )
}

export default GameType;