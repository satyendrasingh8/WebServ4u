import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import HowToPlay from './howToPlay';
import QuizDescription from './quizDesc';
import QuizHead from './quizHead';
import SlidingImage from './slidingImage';
import moment from "moment"
import FetchComment from '../comment/fetchComment'
import Comment from '../comment/comment'
import FetchFYI from './fetchFYI';
import GameType from '../dashboard/homeDashboard/gameType';
import FYIDetail from './fyiDetail';
import MetaDecorator from '../../utils/metaDecorator';


const FYI = () => {

  const curDate = moment(new Date()).format(' Do MMM YYYY');

 
    return(
    <div>
       <MetaDecorator title={`flipkart FYI For Your Information quiz answers ${curDate}`} description='flipkart FYI For Your Information quiz answers' />
   <Card >
  <QuizHead curDate={curDate} />
  <SlidingImage />
  <QuizDescription curDate={curDate} />
 <HowToPlay curDate={curDate}/>
<FetchFYI curDate={curDate}/>
<GameType />
<FYIDetail curDate={curDate} />
  <FetchComment />
  <Comment />
 
   </Card>

    </div>
    )
}




 export default FYI;
