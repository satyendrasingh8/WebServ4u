import React from 'react';
import { Card, Image } from 'react-bootstrap';
import MetaDecorator from '../../utils/metaDecorator';


const QuizDescription = ({curDate}) =>{
    return (
        <div>
                         
            <Card.Text><br></br>
      Here you have to get quick live updates for each flipkart <b> Fake or Not </b> Quiz Question everyday &nbsp;
      <span> 
       { curDate}  at 12:05Am  </span>.
      By answering these Quiz Questions you can win many gift vouchers,coupons,gifts,super coins etc.
      &nbsp; <br></br> <Image src="https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png"
      width={60}
      height={60}
      roundedCircle />
      <a href="https://www.flipkart.com/">&nbsp;<b>Flipkart</b> </a>
      <b><i>daily flipkart <b>Fake or Not </b> Quiz is Back.</i>  </b>flipkart <b>Fake or Not </b> today answer is generally asks
       General Knowledge based Questions.Flipkart <b>Daily Fake or Not </b> today Quiz is started 
       <span> <b> 
       {curDate}  at 12:00Am </b> </span> and ends at  <span> <b> 
       {curDate}  at 11:59pm </b> </span> .
       <b><i>Webserv4u</i></b> provide these answers at {curDate} 12:05am daily.By answering them you have to
        get some relevant prize,coupons,gift or super coins  by regular participation in daily quiz.
        <b>Make sure you have to follow our official <a href="https://t.me/FlipkartDailyQuiz"><b><b>Telegram</b></b> </a> channel to get daily 
          imediate answers for each Quiz  </b>
    </Card.Text>
    <br></br> 
        </div>
    )
}
export default QuizDescription;