
import React from 'react';
import { Card,Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faGithub

} from "@fortawesome/free-brands-svg-icons";
import MetaDecorator from '../../utils/metaDecorator'
const header=require('../../dummyData/home.json')

const QuizHead = ({curDate}) => {


    return(
  <div>
    <MetaDecorator title={header.headerTitle} description={header.headerDescription} />
   
      <Card.Header as="h4">Welcome to <a href="http://webserv4u.com/flipkart-trivia-today-answers">
        WebServ4u</a>, If you are looking for
       Today<b style={{color:"green"}}> flipkart Trivia</b> Quiz-
    <span style={{color:"red"}}> {curDate} </span> they are at right place. Answers these Quiz Questions to get Coupon Discount,
    amazing Gifts and earn Flipkart super coins.
    <p >Get today flipkart trivia quiz answers | 
    Today’s Answers Of Flipkart {curDate} Quiz </p>
       </Card.Header><br></br>
       <b style={{padding:'16px'}}>get flipkart <b>Trivia</b>today Quiz answers <span> <b> 
       {curDate} </b> </span> <span style={{color:"red"}}> in
        first instance</span> and win exciting awards,prizes,gifts,free coupons and many more 
        by answering correctly. Get the latest Flipkart Quiz answers: </b>
        <Card.Text as="h6">&nbsp;<br></br>
        <MetaDecorator title={`flipkart trivia today  ${curDate}`} description='flipkart trivia today answer
       Live Now. If You Are Looking For Fast And Right Flipkart Quiz Answers Here Are All 5 
        Correct Answers To The Quiz.' />
        <b> <a href="http://webserv4u.com/flipkart-trivia-today-answers">
        flipkart trivia today </a> |
        <MetaDecorator title={`flipkart trivia today answer ${curDate}`}
         description='flipkart trivia today answer'/>
         <a href="https://webserv4u.com/flipkart-trivia-today-answers">
          flipkart trivia today answer </a>  |  <a href="https://webserv4u.com/flipkart-trivia-today-answers">
          flipkart trivia questions and answers </a> | 
          <MetaDecorator title={`today's flipkart trivia questions and answers ${curDate}`}
         description="today's flipkart trivia questions and answers"/>
         <a href="https://webserv4u.com/flipkart-trivia-today-answers">
         today's flipkart trivia questions and answers </a> | 
         <MetaDecorator title={`today flipkart trivia quiz answers ${curDate}`}
         description="today's flipkart trivia questions and answers"/>
         <a href="https://webserv4u.com/flipkart-trivia-today-answers">
         today flipkart trivia quiz answers </a>  | 
         <MetaDecorator title={` today flipkart trivia answers ${curDate}`}
         description="today flipkart trivia answers"/>
       <a href="https://webserv4u.com/flipkart-trivia-today-answers">
       today flipkart trivia answers  </a>  </b> <br></br><br></br>
         Join us: &nbsp;&nbsp; </Card.Text>
     <Card.Subtitle>  <a  href="https://t.me/FlipkartDailyQuiz" ><Button>
  <FontAwesomeIcon icon={faTelegram} size="2x"  />Join Telegram  </ Button>
</a><br></br><br></br>
<a  href="https://github.com/satyendrasingh8" ><Button variant="dark">
  <FontAwesomeIcon icon={faGithub} size="2x"  /><b> Follow on Github  </b> </ Button>
</a><br></br>
 </Card.Subtitle>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

     
  </div>
    );
}

export default QuizHead;