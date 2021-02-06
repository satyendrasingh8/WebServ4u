import React from 'react'
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';


const GameType = () => {

    return (
        <div>
         
      <Card> 
      <Card.Header  style={{textShadow:"1px 1px black" }}><h3>List of Flipkart Daily Quizs</h3></Card.Header>
  <ListGroup variant="flush">
  <a href='/flipkart-trivia-today-answers'>  <ListGroup.Item>Flipkart Trivia Today Answers</ListGroup.Item></a>
  <a href='/flipkart-fake-or-not-quiz'> <ListGroup.Item>Flipkart Fake or Not? Answers</ListGroup.Item></a>
   <a href="/kya-bolti-public-flipkart-answers"> <ListGroup.Item>Flipkart Kya Bolti Public? Answers</ListGroup.Item></a>
   <a href="/flipkart-daam-sahi-hai-quiz"><ListGroup.Item>Flipkart Daam Sahi Hai? Quiz answers</ListGroup.Item></a>
   <a href="/flipkart-for-your-infromation-quiz"> <ListGroup.Item>Flipkart For Your Information(FYI) Quiz Answers</ListGroup.Item></a>
   <a href='/flipkart-kaun-who-did-it-quiz'>   <ListGroup.Item>Flipkart Kaun? Who Did It? Quiz Answers</ListGroup.Item></a>
  </ListGroup>
      </Card>
        </div>
    )
}

export default GameType;