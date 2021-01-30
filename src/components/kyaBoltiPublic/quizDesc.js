import React from 'react';
import { Card, Image } from 'react-bootstrap';
import MetaDecorator from "../../utils/metaDecorator"

const QuizDescription = () =>{
    return (
        <div>
              <MetaDecorator title='about flipkart kya bolti public Quiz description' 
    description=' Here you have to get quick live updates for each Kya bolti public Quiz Answer everyday at
    12:00am.' />
     
<Card.Text><br></br>
      Here you have to get quick live updates for each <b>Kya Bolti Public</b> Quiz Question everyday at 12:00am.
      By answering these Quiz Questions you can win many gift vouchers,coupons,gifts,super coins etc.
      &nbsp; <br></br> <Image src="https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png"
      width={60}
      height={60}
      roundedCircle />
      <a href="https://www.flipkart.com/">&nbsp;<b>Flipkart</b> </a>
      <b><i>Kya Bolti Public? Quiz is Back.</i>  </b>Daily Trivia Quiz is generally asks
       General Knowledge based Questions.Flipkart Quiz is started at 12:00Am and ends at 11:59am.
       <b><i>QuizBeater</i></b> provide these answers at 11:50pm daily.By answering them you have to
        get some relevant prize,coupons,gift or super coins  by regular participation in daily quiz.
        <b>Make sure you have to follow our official <a href="#"><b><b>Telegram</b></b> </a> channel to get daily 
          imediate answers for each Quiz  </b>
    </Card.Text>
    <br></br> 
        </div>
    )
}
export default QuizDescription;