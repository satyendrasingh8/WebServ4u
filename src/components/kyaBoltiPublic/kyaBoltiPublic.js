import React from 'react';
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


 
    return(
    <div>
   <Card >
  <QuizHead />
  <SlidingImage />
  <QuizDescription />
 <HowToPlay />
<FetchKyaBoltiPublic />
<GameType />
  <FetchComment />
  <Comment />
 
   </Card>

    </div>
    )
}




 export default KyaBoltiPublic;
