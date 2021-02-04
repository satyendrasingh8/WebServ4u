
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
   
      <Card.Header as="h3"> Get Daily Flipkart <b style={{color:"red"}}>Trivia</b> Quiz answers
    <span style={{color:"red"}}> {curDate}</span>.Answers these Quiz Questions to get Coupon Discount,
    amazing Gifts and earn Flipkart super coins.
       </Card.Header><br></br>
       <Card.Subtitle>get flipkart <b>Daily Trivia</b> Quiz answers <span> <b> 
       {curDate} </b> </span> <span style={{color:"red"}}> in
        first instance</span> and win exciting awards,prizes,gifts,free coupons and many more 
        by answering correctly. Get the latest Flipkart Quiz answers: </Card.Subtitle>
        <Card.Text as="h4">&nbsp; Join us: &nbsp;&nbsp; </Card.Text>
     <Card.Subtitle>  <a  href="https://t.me/FlipkartDailyQuiz" ><Button>
  <FontAwesomeIcon icon={faTelegram} size="2x"  />Join Telegram  </ Button>
</a><br></br><br></br>
<a  href="https://github.com/satyendrasingh8" ><Button variant="dark">
  <FontAwesomeIcon icon={faGithub} size="2x"  /><b> Follow on Github  </b> </ Button>
</a><br></br>
 </Card.Subtitle>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

 <Card.Link href="/"><b><i>WebServ4u.com</i> </b></Card.Link>
     
  </div>
    );
}

export default QuizHead;