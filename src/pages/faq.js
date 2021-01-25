import React from "react";
import { Card } from "react-bootstrap";
 import './faq.css';

function FAQ() {
  return (
    <div >
    <Card><div className="faqImg"> 
    <Card.Img  src={process.env.PUBLIC_URL + "/images/DailyTrivia1.png"} 
variant="top" height="500px"   className="d-block w-100" />
    </div>


<Card.Body>
<Card.Title>Q1. What is Flipkart Daily Trivia Quiz?  </Card.Title>
<Card.Text>Ans.  Daily Trivia Quiz is a GK MCQ based Game to enhance your Knowledge
  as well win many amazing prizes , coupons, super coins etc. To get 
  all answers in first please visit <a href="webserv4u.com">WebServ4u.com </a>
  and answers all Questions
   correctly.
   </Card.Text>

<Card.Title>Q2. Where to play Daily Trivia Quiz Game and earn money? </Card.Title>
<Card.Text>Ans. you can play Daily Trivia Quiz Game in  Flipkart App by just downloading it  
  from google play store or google. </Card.Text>


<Card.Title>Q3. Time For Daily Trivia Quiz Game when it conducted? </Card.Title>
<Card.Text>Ans. Daily Trivia Game plays daily as name suggested it starts from 12:00am and end at night 11:59pm.  </Card.Text>




<Card.Title>Q4. What is the age limit to play Daily Trivia Quiz Game? </Card.Title>
<Card.Text>Ans. To participate in this contest You should be at least 20 years or above.  </Card.Text>

<Card.Title>Q5. Where We get fast Answers of Daily Trivia Quiz Game? </Card.Title>
<Card.Text>Ans. Once Flipkart Daily Trivia Quiz Game Questions Are Announced at 12:00am, 
  we should as quik as possible we update it into our site <a href="webserv4u.com">WebServ4u.com </a> </Card.Text>
<Card.Title>Q6. Is Flipkart Quiz's are availble at web? </Card.Title>
<Card.Text>Ans. Flipkart all Quiz's Game are availble at mobile app only not for  web so make sure. </Card.Text>



<br></br><br></br>
<Card.Title style={{color:"#DC143C"}}>So Best of luck By <a href="webserv4u.com">WebServ4u.com </a> Team and hope You all
 win & happy in life. Thanks alot for visiting our site . </Card.Title>
<Card.Text> </Card.Text>






</Card.Body>





    </Card>
    </div>
  );
}

export default FAQ;
