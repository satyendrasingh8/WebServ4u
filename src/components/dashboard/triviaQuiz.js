import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import HowToPlay from './howToPlay';
import QuizDescription from './quizDes';
import QuizHead from './quizHead';
import SlidingImage from './slidingImage';
import FetchedQuiz from './fetchedData';
import moment from "moment"
import FetchComment from '../comment/fetchComment'
import Comment from '../comment/comment'
import GameType from './homeDashboard/gameType';

const TriviaQuiz = () => {

const curDate = moment(new Date()).format(' Do MMM YYYY');
 
    return(
    <div>
   <Card >
  <QuizHead curDate={curDate} />
  <SlidingImage />
  <QuizDescription curDate={curDate} />
 <HowToPlay curDate={curDate} />

 <FetchedQuiz curDate={curDate}/>
 <GameType />
 <FetchComment /> 
          <Comment />

   </Card>

    </div>
    )
}




 export default TriviaQuiz;

