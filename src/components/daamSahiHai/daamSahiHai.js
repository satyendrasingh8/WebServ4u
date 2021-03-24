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
import DaamDetail from './daamDetail'
import MetaDecorator from '../../utils/metaDecorator';

const DaamSahiHai = () => {

  const curDate = moment(new Date()).format(' Do MMM YYYY');
 
    return(
    <div>
          <MetaDecorator title={`flipkart play daam sahi hai  ${curDate}`}
     description=' Flipkart play Daam Sahi  Hai Quiz answers : play and win OPPO A11K smartphone, 
     supercoins, and more - Quiz - webserv4u.com Daily.' />
   <Card >
  <QuizHead curDate={curDate} />
  <SlidingImage />
  <QuizDescription curDate={curDate} />
 <HowToPlay curDate={curDate} />
<FetchDaamSahiHai curDate={curDate} />
<GameType />
<DaamDetail />
  <FetchComment />
  <Comment />
 
   </Card>

    </div>
    )
}




 export default DaamSahiHai;
