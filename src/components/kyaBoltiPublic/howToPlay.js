import React from "react";
import { Card, Container } from "react-bootstrap";
import MetaDecorator from "../../utils/metaDecorator"
const HowToPlay = ({curDate}) => {
  return (
    <div >
    <Container fluid>
    <MetaDecorator title='how to play flipkart Kya Bolti Public Quiz' 
    description='Here are all the steps from beginning to end to play Flipkart daily 
    Kya Bolti Public Quiz' />
    <Card.Title as="h3">How to play  Flipkart <b>Kya Bolti Public</b> Daily  Quiz ? </Card.Title>
<Card.Body>

<Card.Text>1. first of all Download or Open the <b>flipkart</b> App in your android phone</Card.Text>
  
<Card.Text>2. Login or signup into <b>flipkart</b> app  </Card.Text>
<Card.Text>3. Go To <b>Game section</b> in Flipkart app in the bottom-right side of your android app   </Card.Text>
<Card.Text>4. You will see the banner of "Daily Trivia","FYI (For Your Information)","Kaun? who did it",
"Daam Sahi Hai","Fake or Not",<b>"Kya Bolti Public"</b>
  "Beat The Genius","Bigg Buzz","Ladies vs Gentleman","Guess what","Snake Smash",
  "Quiz Time"etc and many more...  </Card.Text>
  <Card.Text>5. choose Flipkart <b>Kya Bolti Public </b> </Card.Text>
 <Card.Text>6. Answers all <b>Three</b> Questions correctly and win your lucky prize. </Card.Text>
 <Card.Text>7. congratulations!,start playing. </Card.Text>
 <br></br>
 <h4 style={{textShadow:"1px 1px black" }}> About Flipkart Kya Bolti Public Quiz - </h4> <br></br>
 <Card.Text><b>Quiz Name - </b> Kya Bolti Public  </Card.Text>
 <Card.Text><b>Quiz Prizes - </b> superCoins  </Card.Text>
 <Card.Text><b>available - </b> Flipkart App(only mobile app)   </Card.Text>
 <Card.Text><b>Based on - </b> opinion and poll  </Card.Text>
 <Card.Text><b>Date - </b> {curDate}  </Card.Text>
</Card.Body>



    </Container>
    </div>
  );
}

export default HowToPlay;
