import React from 'react'
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import MetaDecorator from '../../../utils/metaDecorator';


const GameType = () => {

    return (
        <div>
         
      <Card> 
      <Card.Header  style={{textShadow:"1px 1px black" }}><h3>List of Flipkart Daily Quizs</h3></Card.Header>
  <ListGroup variant="flush">
  <MetaDecorator title="flipkart trivia today answers" description="flipkart trivia today answers" />
  <a href='/flipkart-trivia-today-answers'>  <ListGroup.Item>Flipkart Trivia Today Answers</ListGroup.Item></a>
 
  <MetaDecorator title="flipkart fake or not today answers" description="flipkart fake or not today answers" />
  <a href='/flipkart-fake-or-not-today-answer'> <ListGroup.Item>Flipkart Fake or Not today answers</ListGroup.Item></a>
  
  <MetaDecorator title="kya bolti public flipkart answers" description="kya bolti public flipkart answers" />
   <a href="/kya-bolti-public-flipkart-answers"> <ListGroup.Item>Flipkart Kya Bolti Public? Answers</ListGroup.Item></a>
  
   <MetaDecorator title="flipkart daam sahi hai today answers" description="" />
   <a href="/flipkart-daam-sahi-hai-quiz"><ListGroup.Item>Flipkart Daam Sahi Hai? Quiz answers</ListGroup.Item></a>
  
   <MetaDecorator title="flipkart fyi answers" description="" />
   <a href="/flipkart-for-your-infromation-quiz"> <ListGroup.Item>Flipkart For Your Information(FYI) Quiz Answers</ListGroup.Item></a>
  
   <MetaDecorator title="flipkart kaun who did it today answers" description="" />
   <a href='/flipkart-kaun-who-did-it-quiz'>   <ListGroup.Item>Flipkart Kaun? Who Did It? Quiz Answers</ListGroup.Item></a>
  </ListGroup>
      </Card>
        </div>
    )
}

export default GameType;