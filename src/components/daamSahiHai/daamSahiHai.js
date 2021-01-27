import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import HowToPlay from './howToPlay';
import QuizDescription from './quizDesc';
import QuizHead from './quizHead';
import SlidingImage from './slidingImage';

import FetchComment from '../comment/fetchComment'
import Comment from '../comment/comment'
import FetchDaamSahiHai from './fetchDaamSahiHai';


const DaamSahiHai = () => {


 
    return(
    <div>
   <Card >
  <QuizHead />
  <SlidingImage />
  <QuizDescription />
 <HowToPlay />
<FetchDaamSahiHai />
  <FetchComment />
  <Comment />
 
   </Card>

    </div>
    )
}




 export default DaamSahiHai;
