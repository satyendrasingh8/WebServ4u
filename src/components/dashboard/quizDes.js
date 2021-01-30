import React from 'react';
import { Card, Image } from 'react-bootstrap';
import MetaDecorator from "../../utils/metaDecorator"
const content = require('../../dummyData/home.json')

const QuizDescription = () =>{
    return (
        <div>
            <MetaDecorator title={content.quizDescriptionTitle} description={content.quizDescriptionDescription} />
<Card.Text><br></br>
      Here you have to get quick live updates for each <b>Trivia</b> Quiz Question everyday at 11:50pm.
      By answering these Quiz Questions you can win many gift vouchers,coupons,gifts,super coins etc.
      &nbsp; <br></br> <Image src="https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png"
      width={60}
      height={60}
      roundedCircle />
      <a href="https://www.flipkart.com/">&nbsp;<b>Flipkart</b> </a>
      <b><i>daily <b>Trivia</b> Quiz is Back.</i>  </b>Daily <b>Trivia</b> Quiz is generally asks
       General Knowledge based Questions.Flipkart <b>Daily Trivia</b> Quiz is started at 12:00Am and ends at 11:59am.
       <b><i>QuizBeater</i></b> provide these answers at 12:00am daily.By answering them you have to
        get some relevant prize,coupons,gift or super coins  by regular participation in daily quiz.
        <b>Make sure you have to follow our official <a href="#"><b><b>Telegram</b></b> </a> channel to get daily 
          imediate answers for each Quiz  </b>
    </Card.Text>
    <br></br> 
        </div>
    )
}
export default QuizDescription;