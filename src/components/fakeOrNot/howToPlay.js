import React from "react";
import { Card, Container } from "react-bootstrap";
import MetaDecorator from "../../utils/metaDecorator"

const HowToPlay = ({curDate}) => {
  return (
    <div >
    <Container fluid>
   
    <Card.Title as="h3">How to play Flipkart <b>Fake or Not?</b> Quiz today </Card.Title>
<Card.Body>

<Card.Text>1. first of all Download or Open the <b>Flipkart</b> App in your android phone</Card.Text>
  
<Card.Text>2. Login or signup into <b>Flipkart</b> app  </Card.Text>
<Card.Text>3. Go To <b>Game section</b> in Flipkart app in the bottom-right side of your android app   </Card.Text>
<Card.Text>4. You will see the banner of "Daily Trivia",<b>"Fake or Not</b>,"Kya Bolti Public",
"Daam Sahi Hai","FYI (For Your Information)","Kaun? Who did it?"
  "Beat The Genius","Bigg Buzz","Ladies vs Gentleman","Guess what","Snake Smash",
  "Quiz Time"etc and many more...  </Card.Text>
  <Card.Text>5. choose Flipkart <b>Fake or Not? </b> </Card.Text>
 <Card.Text>6. Answers all three Questions correctly and win your lucky prize. </Card.Text>
 <Card.Text>7. congratulations!,start playing. </Card.Text>
 <br></br>
 <h4 style={{textShadow:"1px 1px black" }}> About Flipkart Fake or Not Quiz - </h4> <br></br>
 <Card.Text><b>Quiz Name - </b> Fake or Not  </Card.Text>
 <Card.Text><b>Quiz Prizes - </b> supercoins  </Card.Text>
 <Card.Text><b>available - </b> Flipkart App(only mobile app)   </Card.Text>
 <Card.Text><b>Based on - </b> General Knowlwdge  </Card.Text>
 <Card.Text><b>Date - </b> {curDate}  </Card.Text>
</Card.Body>



    </Container>
    </div>
  );
}

export default HowToPlay;
