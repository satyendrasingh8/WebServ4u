import React from 'react'
import { Button, Card } from 'react-bootstrap';
import moment from "moment"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faGithub

} from "@fortawesome/free-brands-svg-icons";

const DashBoardHeader = () => {

    return (
        <div>
      <Card> 
      <Card.Header as="h3"> Get Daily Flipkart  Quiz answers updated at <i> 12:00am.</i>
    <span style={{color:"red"}}> {moment(new Date()).format('Do MMM YYYY')}</span>.Answers these Quiz Answers to get Coupon Discount,
    amazing Gifts and earn Flipkart super coins.
       </Card.Header><br></br>
       <Card.Subtitle>get flipkart Quiz answers daily<span style={{color:"red"}}> in
        first instance</span> and win exciting awards,prizes,gifts,free coupons and many more 
        by answering correctly </Card.Subtitle>
        <Card.Text as="h4">&nbsp; Join us: &nbsp;&nbsp; </Card.Text>
     <Card.Subtitle>  <a  href="https://t.me/FlipkartDailyQuiz" ><Button>
  <FontAwesomeIcon icon={faTelegram} size="2x"  />Join Telegram  </ Button>
</a><br></br><br></br>
<a  href="https://github.com/satyendrasingh8" ><Button variant="dark">
  <FontAwesomeIcon icon={faGithub} size="2x"  /><b> Follow on Github  </b> </ Button>
</a><br></br>
 </Card.Subtitle>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

 <Card.Link href="/"><b><i>WebServ4u.com</i> </b></Card.Link>
 <br></br>
      </Card>
        </div>
    )
}

export default DashBoardHeader;