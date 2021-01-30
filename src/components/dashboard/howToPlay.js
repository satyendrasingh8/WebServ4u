import React from "react";
import { Card, Container } from "react-bootstrap";
import MetaDecorator from "../../utils/metaDecorator"
const content = require('../../dummyData/home.json')

const HowToPlay = () => {
  return (
    <div >
    <Container fluid>
   <MetaDecorator title={content.howToPlayTitle} description={content.howToPlayDescription} />
    <Card.Title as="h3">How to play Flipkart Daily<b>Trivia</b>  Quiz? </Card.Title>
<Card.Body>

<Card.Text>1. first of all Download or Open the <b>Flipkart</b> App in your android phone</Card.Text>
  
<Card.Text>2. Login or signup into <b>Flipkart</b> app  </Card.Text>
<Card.Text>3. Go To <b>Game section</b> in Flipkart app in the bottom-right side of your android app   </Card.Text>
<Card.Text>4. You will see the banner of <b>"Daily Trivia"</b>,"FYI (For Your Information)","Kya Bolti Public",
"Daam Sahi Hai","Fake or Not","Kaun? Who did it?"
  "Beat The Genius","Bigg Buzz","Ladies vs Gentleman","Guess what","Snake Smash",
  "Quiz Time"etc and many more...  </Card.Text>
  <Card.Text>5. choose Flipkart <b>Daily Trivia Quiz </b> </Card.Text>
 <Card.Text>6. Answers all <b>Five</b> Questions correctly and win your lucky prize. </Card.Text>
 <Card.Text>7. congratulations!,start playing. </Card.Text>
</Card.Body>



    </Container>
    </div>
  );
}

export default HowToPlay;
