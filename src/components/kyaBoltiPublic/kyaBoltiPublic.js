import React from 'react';
import moment from "moment"
import { Card } from 'react-bootstrap';
import HowToPlay from './howToPlay';
import QuizDescription from './quizDesc';
import QuizHead from './quizHead';
import SlidingImage from './slidingImage';
import FetchComment from '../comment/fetchComment'
import Comment from '../comment/comment'
import FetchKyaBoltiPublic from './fetchkyaBoltiPublic';
import GameType from '../dashboard/homeDashboard/gameType';


const KyaBoltiPublic = () => {

  const curDate = moment(new Date()).format(' Do MMM YYYY');
 
    return(
    <div>
   <Card >
  <QuizHead curDate={curDate}/>
  <SlidingImage />
  <QuizDescription curDate={curDate}/>
 <HowToPlay curDate={curDate}/>
<FetchKyaBoltiPublic curDate={curDate}/>
<GameType />
  <FetchComment />
  <Comment />
 
   </Card>

    </div>
    )
}




 export default KyaBoltiPublic;
