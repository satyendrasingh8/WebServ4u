import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faGithub

} from "@fortawesome/free-brands-svg-icons";
import MetaDecorator from '../../../utils/metaDecorator';

const DashBoardHeader = ({curDate}) => {

    return (
        <div>
     <MetaDecorator title='flipkart daily Quiz Home Page' description='flipkartdaily quiz today answer home page' />
   
   <Card.Header as="h4">Welcome to <a href="/">
       WebServ4u</a>, If you are looking for
      <u style={{color:"green"}}> Flipkart Daily Quiz Answers</u> -
   <span style={{color:"red"}}> {curDate} </span> they are at right place. Answers these Quiz Questions 
   to get Coupon Discount,
   amazing Gifts and earn Flipkart super coins.
  
      </Card.Header><br></br>
      <b style={{padding:'16px'}}>get flipkart <b>Daily Quiz answers</b>  <span> <b> 
      {curDate} </b> </span> <span style={{color:"red"}}> in
       first instance</span> and win exciting awards,prizes,gifts,free coupons and many more 
       by answering correctly. Get the latest Flipkart Quiz answers: </b>
       <Card.Text as="h6">&nbsp;<br></br>
       <a href='/flipkart-trivia-today-answers'>  Flipkart Trivia Today Answers</a> |
 
 
 <a href='/flipkart-fake-or-not-today-answer'> Flipkart Fake or Not today answers</a> |
 
 
  <a href="/kya-bolti-public-flipkart-answers">  Kya Bolti Public Flipkart Answers</a> |
 
 
  <a href="/flipkart-play-daam-sahi-hai"> Flipkart Play Daam Sahi Hai</a> |
 
 
  <a href="/flipkart-fyi-for-your-information-quiz-answers">flipkart FYI For Your Information quiz answers</a>
  |
 
  <a href='/flipkart-kaun-who-did-it-quiz-answers'>   flipkart kaun who did it quiz answers</a>
      <br></br> <br></br>
      
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