import React from "react";
import { Card, Container } from "react-bootstrap";
import MetaDecorator from "../../utils/metaDecorator"

const HowToPlay = ({curDate}) => {
  return (
    <div >
    <Container fluid>
   
    <Card.Title as="h3">How to play Flipkart<b> Kaun? Who did it</b> Quiz  </Card.Title>
<Card.Body>

<Card.Text>1. first of all Download or Open the <b>flipkart</b> App in your android phone</Card.Text>
  
<Card.Text>2. Login or signup into <b>flipkart</b> app  </Card.Text>
<Card.Text>3. Go To <b>Game section</b> in Flipkart app in the bottom-right side of your android app   </Card.Text>
<Card.Text>4. You will see the banner of "Daily Trivia","FYI (For Your Information)","Kya Bolti Public",
"Daam Sahi Hai","Fake or Not",<b>"Kaun? Who did it?"</b>
  "Beat The Genius","Bigg Buzz","Ladies vs Gentleman","Guess what","Snake Smash",
  "Quiz Time"etc and many more...  </Card.Text>
  <Card.Text>5. choose Flipkart <b>Kaun? Who did it </b> </Card.Text>
 <Card.Text>6. Answers all <b>three</b> Questions correctly and win your lucky prize. </Card.Text>
 <Card.Text>7. congratulations!,start playing. </Card.Text>
 <br></br>
 <h4 style={{textShadow:"1px 1px black" }}> About Flipkart Kaun Quiz - </h4> <br></br>
 <Card.Text><b>Quiz Name - </b> Kaun? Who did it  </Card.Text>
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
