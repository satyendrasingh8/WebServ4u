import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import HowToPlay from './howToPlay';
import QuizDescription from './quizDesc';
import QuizHead from './quizHead';
import SlidingImage from './slidingImage';
import moment from "moment"
import FetchComment from '../comment/fetchComment'
import Comment from '../comment/comment'
import FetchKaunWhoDidIt from './fetchKaun';
import GameType from '../dashboard/homeDashboard/gameType';
import MetaDecorator from '../../utils/metaDecorator';
import KaunDetail from './kaunDetail';



const Kaun = () => {

  const curDate = moment(new Date()).format(' Do MMM YYYY');
 
    return(
    <div>
        <MetaDecorator title={`flipkart kaun who did it quiz answers ${curDate}`} 
    description='Here are all the steps from beginning to end to play Flipkart daily 
    kaun? who did it Quiz' />
   <Card >
  <QuizHead curDate={curDate} />
  <SlidingImage />
  <QuizDescription curDate={curDate} />
 <HowToPlay curDate={curDate} />
<FetchKaunWhoDidIt curDate={curDate} />
<GameType />
<KaunDetail curDate={curDate} />
  <FetchComment />
  <Comment />
 
   </Card>

    </div>
    )
}




 export default Kaun;
