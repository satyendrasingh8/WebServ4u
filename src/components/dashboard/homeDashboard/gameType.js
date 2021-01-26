import React from 'react'
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';


const GameType = () => {

    return (
        <div>
         
      <Card> 
      <Card.Header style={{textShadow:"1px 1px black" }}>List of Flipkart Daily Quizs</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item>Flipkart Daily Trivia Quiz Answers</ListGroup.Item>
    <ListGroup.Item>Flipkart Fake or Not?</ListGroup.Item>
    <ListGroup.Item>Flipkart Kya Bolti Public</ListGroup.Item>
    <ListGroup.Item>Flipkart Daam Sahi Hai</ListGroup.Item>
    <ListGroup.Item>Flipkart For Your Information(FYI)</ListGroup.Item>
    <ListGroup.Item>Flipkart Kaun? Who Did It?</ListGroup.Item>
  </ListGroup>
      </Card>
        </div>
    )
}

export default GameType;