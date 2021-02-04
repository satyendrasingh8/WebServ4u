import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import HowToPlay from './howToPlay';
import QuizDescription from './quizDesc';
import QuizHead from './quizHead';
import SlidingImage from './slidingImage';
import moment from "moment"
import FetchComment from '../comment/fetchComment'
import Comment from '../comment/comment'
import FetchDaamSahiHai from './fetchDaamSahiHai';
import GameType from '../dashboard/homeDashboard/gameType';


const DaamSahiHai = () => {

  const curDate = moment(new Date()).format(' Do MMM YYYY');
 
    return(
    <div>
   <Card >
  <QuizHead curDate={curDate} />
  <SlidingImage />
  <QuizDescription curDate={curDate} />
 <HowToPlay curDate={curDate} />
<FetchDaamSahiHai curDate={curDate} />
<GameType />
  <FetchComment />
  <Comment />
 
   </Card>

    </div>
    )
}




 export default DaamSahiHai;
