import React from 'react';
import { Card } from 'react-bootstrap';
import HowToPlay from './howToPlay';
import QuizDescription from './quizDesc';
import QuizHead from './quizHead';
import SlidingImage from './slidingImage';
import FetchComment from '../comment/fetchComment'
import Comment from '../comment/comment'
import FetchKyaBoltiPublic from './fetchkyaBoltiPublic';


const KyaBoltiPublic = () => {


 
    return(
    <div>
   <Card >
  <QuizHead />
  <SlidingImage />
  <QuizDescription />
 <HowToPlay />
<FetchKyaBoltiPublic />
  <FetchComment />
  <Comment />
 
   </Card>

    </div>
    )
}




 export default KyaBoltiPublic;
