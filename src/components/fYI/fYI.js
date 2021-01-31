import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import HowToPlay from './howToPlay';
import QuizDescription from './quizDesc';
import QuizHead from './quizHead';
import SlidingImage from './slidingImage';

import FetchComment from '../comment/fetchComment'
import Comment from '../comment/comment'
import FetchFYI from './fetchFYI';
import GameType from '../dashboard/homeDashboard/gameType';


const FYI = () => {


 
    return(
    <div>
   <Card >
  <QuizHead />
  <SlidingImage />
  <QuizDescription />
 <HowToPlay />
<FetchFYI />
<GameType />
  <FetchComment />
  <Comment />
 
   </Card>

    </div>
    )
}




 export default FYI;
