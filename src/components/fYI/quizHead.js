import React from 'react';
import { Card,Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faGithub

} from "@fortawesome/free-brands-svg-icons";
import MetaDecorator from '../../utils/metaDecorator';


const QuizHead = ({curDate}) => {


    return(
  <div>
    
    <MetaDecorator title='flipkart FYI For Your Information quiz answers' description='flipkart FYI For Your Information quiz answers' />
   
   <Card.Header as="h4">Welcome to <a href="/">
       WebServ4u</a>, If you are looking for
      Today<u style={{color:"green"}}> flipkart FYI For Your Information </u> -
   <span style={{color:"red"}}> {curDate} </span> they are at right place. Answers these Quiz Questions 
   to get Coupon Discount,
   amazing Gifts and earn Flipkart super coins.
   <p >flipkart FYI For Your Information quiz answer | 
   flipkart FYI answers
{curDate} Quiz </p>
      </Card.Header><br></br>
      <b style={{padding:'16px'}}>get flipkart <b> FYI For Your Information </b> Quiz answers <span> <b> 
      {curDate} </b> </span> <span style={{color:"red"}}> in
       first instance</span> and win exciting awards,prizes,gifts,free coupons and many more 
       by answering correctly. Get the latest Flipkart Quiz answers: </b>
       <Card.Text as="h6">&nbsp;<br></br>
       <b> <a href="https://webserv4u.com/flipkart-fyi-for-your-information-quiz-answers">
       flipkart FYI For Your Information quiz answers </a> |
      
        <a href="https://webserv4u.com/flipkart-fyi-for-your-information-quiz-answers">
        flipkart today FYI answers </a>  |  <a href="https://webserv4u.com/flipkart-fyi-for-your-information-quiz-answers">
        flipkart FYI </a> | 
      
        <a href="https://webserv4u.com/flipkart-fyi-for-your-information-quiz-answers">
        flipkart FYI today </a>
         </b> <br></br><br></br>
        Join us: &nbsp;&nbsp; </Card.Text><br></br>
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