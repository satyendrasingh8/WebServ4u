import React from "react";
import { Card, Container } from "react-bootstrap";
import MetaDecorator from "../../utils/metaDecorator"
const HowToPlay = ({curDate}) => {
  return (
    <div >
    <Container fluid>
    <MetaDecorator title='how to play Daam Sahi Hai Who did it Quiz' 
    description='Here are all the steps from beginning to end to play Flipkart daily 
    Daam Sahi Hai Quiz' />
    <Card.Title as="h3">How to play Flipkart<b>Daam Sahi Hai</b> Daily  Quiz ? </Card.Title>
<Card.Body>

<Card.Text>1. first of all Download or Open the <b>Flipkart</b> App in your android phone</Card.Text>
  
<Card.Text>2. Login or signup into <b>flipkart</b> app  </Card.Text>
<Card.Text>3. Go To<b> Game section</b> in Flipkart app in the bottom-right side of your android app   </Card.Text>
<Card.Text>4. You will see the banner of "Daily Trivia","FYI (For Your Information)","Kya Bolti Public",
<b>"Daam Sahi Hai"</b>,"Fake or Not","Kaun? Who did it?"
  "Beat The Genius","Bigg Buzz","Ladies vs Gentleman","Guess what","Snake Smash",
  "Quiz Time"etc and many more...  </Card.Text>
  <Card.Text>5. choose Flipkart <b>Daam Sahi Hai </b> </Card.Text>
 <Card.Text>6. Answers all <b>three</b> Questions correctly and win your lucky prize. </Card.Text>
 <Card.Text>7. congratulations!,start playing. </Card.Text>
 <br></br>
 <h4 style={{textShadow:"1px 1px black" }}> About Flipkart Daam Sahi Hai Quiz - </h4> <br></br>
 <Card.Text><b>Quiz Name - </b> Daam Sahi Hai  </Card.Text>
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
