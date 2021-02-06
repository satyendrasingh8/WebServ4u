import React from 'react'
import { Button, Card } from 'react-bootstrap';
import moment from "moment"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faGithub

} from "@fortawesome/free-brands-svg-icons";
import MetaDecorator from '../../../utils/metaDecorator';

const DashBoardHeader = ({curDate}) => {

    return (
        <div>
     <MetaDecorator title='flipkart fake or not fake description' description='flipkart fake or not today answer' />
   
   <Card.Header as="h4">Welcome to <a href="http://webserv4u.com/flipkart-trivia-today-answers">
       WebServ4u</a>, If you are looking for
      <u style={{color:"green"}}> Flipkart Daily Quiz Answers</u> -
   <span style={{color:"red"}}> {curDate} </span> they are at right place. Answers these Quiz Questions 
   to get Coupon Discount,
   amazing Gifts and earn Flipkart super coins.
   <p >flipkart fake or not today answer | 
   kya bolti public flipkart answers | flipkart trivia today answers
{curDate} Quiz </p>
      </Card.Header><br></br>
      <b style={{padding:'16px'}}>get flipkart <b>fake or not c</b> Quiz answers <span> <b> 
      {curDate} </b> </span> <span style={{color:"red"}}> in
       first instance</span> and win exciting awards,prizes,gifts,free coupons and many more 
       by answering correctly. Get the latest Flipkart Quiz answers: </b>
       <Card.Text as="h6">&nbsp;<br></br>
       <MetaDecorator title={`flipkart trivia today answers ${curDate}`} description='flipkart trivia today answers
      Live Now. If You Are Looking For Fast And Right Flipkart Quiz Answers Here Are All 5 
       Correct Answers To The Quiz.' />
       <b> <a href="https://webserv4u.com/flipkart-trivia-today-answers">
       flipkart fake or not today answer </a> |
       <MetaDecorator title={`kya bolti public flipkart answers ${curDate}`}
        description='kya bolti public flipkart answers'/>
        <a href="https://webserv4u.com/kya-bolti-public-flipkart-answers">
        kya bolti public flipkart answers </a>  |  <a href="https://webserv4u.com/flipkart-fake-or-not-today-answer">
        flipkart quiz fake or not </a> 
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
    )
}

export default DashBoardHeader;