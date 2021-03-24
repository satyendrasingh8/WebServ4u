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
import MetaDecorator from '../../utils/metaDecorator';
import TriviaDetail from './triviaDetail';

const TriviaQuiz = () => {

const curDate = moment(new Date()).format(' Do MMM YYYY');
 
    return(
    <div>
       <MetaDecorator title="flipkart trivia today answers" description="Get flipkart trivia today answers updated 
       at 12:00 am to win exciting awards,prizes,gifts,free coupons and many more by answering correctly." />
   <Card >
  
  <QuizHead curDate={curDate} />
  <SlidingImage />
  <QuizDescription curDate={curDate} />
 <HowToPlay curDate={curDate} />

 <FetchedQuiz curDate={curDate}/>
 <GameType />
 <TriviaDetail />
 <FetchComment /> 
          <Comment />

   </Card>

    </div>
    )
}




 export default TriviaQuiz;

