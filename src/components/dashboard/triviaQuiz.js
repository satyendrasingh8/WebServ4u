import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import HowToPlay from './howToPlay';
import QuizDescription from './quizDes';
import QuizHead from './quizHead';
import SlidingImage from './slidingImage';
import FetchedQuiz from './fetchedData';
import FetchComment from '../comment/fetchComment'
import Comment from '../comment/comment'
import GameType from './homeDashboard/gameType';

const TriviaQuiz = () => {


 
    return(
    <div>
   <Card >
  <QuizHead />
  <SlidingImage />
  <QuizDescription />
 <HowToPlay />

 <FetchedQuiz />
 <GameType />
 <FetchComment /> 
          <Comment />

   </Card>

    </div>
    )
}




 export default TriviaQuiz;

