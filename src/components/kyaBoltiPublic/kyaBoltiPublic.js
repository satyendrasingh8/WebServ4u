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
import PublicDetail from './detail';
import MetaDecorator from '../../utils/metaDecorator';


const KyaBoltiPublic = () => {

  const curDate = moment(new Date()).format(' Do MMM YYYY');
 
    return(
    <div>
       <MetaDecorator title={`kya bolti public flipkart answers  ${curDate}`} description='kya bolti public flipkart answers
       Live Now. If You Are Looking For Fast And Right Flipkart Quiz Answers Here Are All 5 
        Correct Answers To The Quiz.' />
   <Card >
  <QuizHead curDate={curDate}/>
  <SlidingImage />
  <QuizDescription curDate={curDate}/>
 <HowToPlay curDate={curDate}/>
<FetchKyaBoltiPublic curDate={curDate}/>
<GameType />
<PublicDetail curDate={curDate}/>
  <FetchComment />
  <Comment />
 
   </Card>

    </div>
    )
}




 export default KyaBoltiPublic;
