import React from "react";
import { Card, Container } from "react-bootstrap";
const content = require('../../dummyData/home.json')

const HowToPlay = ({curDate}) => {
  return (
    <div >
    <Container fluid>
  
    <Card.Title as="h3">How to play today's flipkart <b>Trivia</b> questions and answers? </Card.Title>
<Card.Body>

<Card.Text>1. first of all Download or Open the <b>Flipkart</b> App in your android phone</Card.Text>
  
<Card.Text>2. Login or signup into <b>Flipkart</b> app  </Card.Text>
<Card.Text>3. Go To <b>Game section</b> in Flipkart app in the bottom-right side of your android app   </Card.Text>
<Card.Text>4. You will see the banner of <b>"Daily Trivia"</b>,"FYI (For Your Information)","Kya Bolti Public",
"Daam Sahi Hai","Fake or Not","Kaun? Who did it?"
  "Beat The Genius","Bigg Buzz","Ladies vs Gentleman","Guess what","Snake Smash",
  "Quiz Time"etc and many more...  </Card.Text>
  <Card.Text>5. choose  today Flipkart <b> Trivia Quiz </b> </Card.Text>
 <Card.Text>6. Answers all <b>Five</b> Questions correctly and win your lucky prize. </Card.Text>
 <Card.Text>7. congratulations!,start playing. </Card.Text>
 <br></br>
 
 <h4 style={{textShadow:"1px 1px black" }}> About flipkart trivia Quiz- </h4> <br></br>
 <Card.Text>Flipkart Trivia today answers is based on general knowledge and offers customers the 
   opportunity to win exciting prizes.

</Card.Text>
 <Card.Text><b>Quiz Name - </b> Daily Trivia  </Card.Text>
 <Card.Text><b>Quiz Prizes - </b> Gems, vouchers, prizes & coupons etc  </Card.Text>
 <Card.Text><b>available - </b> Flipkart App(only mobile app)   </Card.Text>
 <Card.Text><b>Based on - </b> General Knowlwdge  </Card.Text>
 <Card.Text><b>Total Prizes - </b> 1 lakh + prizes  </Card.Text>
 <Card.Text><b>Date - </b> {curDate}  </Card.Text>
</Card.Body>



    </Container>
    </div>
  );
}

export default HowToPlay;
