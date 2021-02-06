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
    
    <MetaDecorator title='kya bolti public flipkart answers' description='get daily kya bolti public flipkart answers at webserv4u.com' />
   
    <Card.Header as="h4">Welcome to <a href="http://webserv4u.com/flipkart-trivia-today-answers">
        WebServ4u</a>, If you are looking for
       Today<u style={{color:"green"}}> kya bolti public flipkart answers</u> -
    <span style={{color:"red"}}> {curDate} </span> they are at right place. Answers these Quiz Questions 
    to get Coupon Discount,
    amazing Gifts and earn Flipkart super coins.
    <p >Get kya bolti public answer | 
    kya bolti public flipkart
 {curDate} Quiz </p>
       </Card.Header><br></br>
       <b style={{padding:'16px'}}>get flipkart <b>Kya Bolti Public</b> Quiz answers <span> <b> 
       {curDate} </b> </span> <span style={{color:"red"}}> in
        first instance</span> and win exciting awards,prizes,gifts,free coupons and many more 
        by answering correctly. Get the latest Flipkart Quiz answers: </b>
        <Card.Text as="h6">&nbsp;<br></br>
        <MetaDecorator title={`kya bolti public today answer  ${curDate}`} description='kya bolti public today answer
       Live Now. If You Are Looking For Fast And Right Flipkart Quiz Answers Here Are All 5 
        Correct Answers To The Quiz.' />
        <b> <a href="https://webserv4u.com/kya-bolti-public-flipkart-answers">
        kya bolti public flipkart answers </a> |
        <MetaDecorator title={`kya bolti public answer ${curDate}`}
         description='kya bolti public answer'/>
         <a href="https://webserv4u.com/kya-bolti-public-flipkart-answers">
         kya bolti public answer </a>  |  <a href="https://webserv4u.com/kya-bolti-public-flipkart-answers">
         kya bolti public flipkart </a> | 
          <MetaDecorator title={`kya bolti public season 2 ${curDate}`}
         description="kya bolti public season 2 answers"/>
         <a href="https://webserv4u.com/kya-bolti-public-flipkart-answers">
         kya bolti public season 2 </a> | 
         <MetaDecorator title={`flipkart kya bolti public today ${curDate}`}
         description="flipkart kya bolti public today questions and answers"/>
         <a href="https://webserv4u.com/kya-bolti-public-flipkart-answers">
         flipkart kya bolti public today </a>  | 
         <MetaDecorator title={` kya bolti public today answer ${curDate}`}
         description="kya bolti public today answer"/>
       <a href="https://webserv4u.com/kya-bolti-public-flipkart-answers">
       kya bolti public today answer  </a>  </b> <br></br><br></br>
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