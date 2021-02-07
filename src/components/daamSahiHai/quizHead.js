import React from 'react';
import { Card,Button } from 'react-bootstrap';
import moment from "moment"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faGithub

} from "@fortawesome/free-brands-svg-icons";
import MetaDecorator from '../../utils/metaDecorator';


const QuizHead = ({curDate}) => {


    return(
  <div>
    
    <MetaDecorator title='flipkart play Daam Sahi Hai' description='flipkart play daam sahi hai' />
   
    <Card.Header as="h4">Welcome to <a href="/">
        WebServ4u</a>, If you are looking for
       Today<u style={{color:"green"}}> flipkart play Daam Sahi Hai</u> -
    <span style={{color:"red"}}> {curDate} </span> they are at right place. Answers these Quiz Questions 
    to get Coupon Discount,
    amazing Gifts and earn Flipkart super coins.
    <p >flipkart play Daam Sahi Hai | 
    flipkart daam sahi hai today answer
 {curDate} Quiz </p>
       </Card.Header><br></br>
       <b style={{padding:'16px'}}>get flipkart <b>Play Daam Sahi Hai </b> Quiz answers <span> <b> 
       {curDate} </b> </span> <span style={{color:"red"}}> in
        first instance</span> and win exciting awards,prizes,gifts,free coupons and many more 
        by answering correctly. Get the latest Flipkart Quiz answers: </b>
        <Card.Text as="h6">&nbsp;<br></br>
        <MetaDecorator title={`flipkart play Daam Sahi Hai ${curDate}`} description='flipkart play Daam Sahi Hai
       Live Now. If You Are Looking For Fast And Right Flipkart Quiz Answers Here Are All 5 
        Correct Answers To The Quiz.' />
        <b> <a href="https://webserv4u.com/flipkart-fake-or-not-today-answer">
        flipkart play Daam Sahi Hai ({curDate}) </a> |
        <MetaDecorator title={`flipkart daam sahi hai today answer ${curDate}`}
         description='flipkart daam sahi hai today answer'/>
         <a href="https://webserv4u.com/flipkart-fake-or-not-today-answer">
         flipkart daam sahi hai today answer {curDate} </a>
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