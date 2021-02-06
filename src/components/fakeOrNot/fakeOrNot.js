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
import MetaDecorator from '../../utils/metaDecorator';
import FakeDetail from './fakeDetail';

const FakeOrNot = () => {

  const curDate = moment(new Date()).format(' Do MMM YYYY');
 
    return(
    <div>
      <MetaDecorator title={`flipkart fake or not today answer ${curDate}`} description='Flipkart Fake or Not today
 Answers... Dear viewers Fake or Not Fake is live now.You will get here fastest correct answers with the trust of webserv4u.com' />
   <Card >
  <QuizHead curDate={curDate} />
  <SlidingImage />
  <QuizDescription curDate={curDate} />
 <HowToPlay curDate={curDate} />
<FetchFakeOrNot curDate={curDate}  />
<GameType />
<FakeDetail curDate={curDate}/>
  <FetchComment />
  <Comment />
 
   </Card>

    </div>
    )
}




 export default FakeOrNot;
