import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import HowToPlay from './howToPlay';
import QuizDescription from './quizDesc';
import QuizHead from './quizHead';
import SlidingImage from './slidingImage';
import moment from "moment"
import FetchComment from '../comment/fetchComment'
import Comment from '../comment/comment'
import FetchFakeOrNot from './fetchFakeOrNot';
import GameType from '../dashboard/homeDashboard/gameType';

const FakeOrNot = () => {

  const curDate = moment(new Date()).format(' Do MMM YYYY');
 
    return(
    <div>
   <Card >
  <QuizHead curDate={curDate} />
  <SlidingImage />
  <QuizDescription curDate={curDate} />
 <HowToPlay curDate={curDate} />
<FetchFakeOrNot curDate={curDate}  />
<GameType />
  <FetchComment />
  <Comment />
 
   </Card>

    </div>
    )
}




 export default FakeOrNot;
