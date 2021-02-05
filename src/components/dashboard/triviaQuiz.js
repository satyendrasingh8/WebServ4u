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
   <Card >
   <MetaDecorator title="flipkart trivia today answers" description="webserv4u.com provide flipkart trivia today answers 
    in first instance by playing these quiz answers correctly you must win awesome prize." />
   <MetaDecorator title="today's flipkart trivia questions and answers" description="webserv4u.com provide today flipkart trivia questions and answers 
    in first instance by playing these quiz answers correctly you must win awesome prize." />
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

