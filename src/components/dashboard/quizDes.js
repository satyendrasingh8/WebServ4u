import React from 'react';
import { Card, Image } from 'react-bootstrap';
const content = require('../../dummyData/home.json')


const QuizDescription = ({curDate}) =>{
    return (
        <div>
           
<Card.Text><br></br>
      Here you have to get quick live updates for each flipkart <b>Trivia</b> Quiz Question and answers everyday &nbsp;
      <span> 
       { curDate}  at 12:05Am  </span>.<p style={{padding:'15px'}}>
      By answering these Quiz Questions you can win many gift vouchers,coupons,gifts,super coins etc.&nbsp;
      <a href="http://webserv4u.com/flipkart-trivia-today-answers">
       Flipkart Trivia </a>  is a trivia event available in the games section of the application.
       As the name clearly implies, participants will be asked a range of trivia questions and answers you
        will need to answer them right to earn rewards.
       The rewards for these contests are usually free vouchers or Flipkart
       <a href="https://webserv4u.com/flipkart-trivia-today-answers"> Supercoins</a>.
    <br></br>   The <b><a href="http://webserv4u.com/flipkart-trivia-today-answers">
    flipkart Trivia quiz </a></b> winners are also limited to <b> 50,000 </b> participants so it becomes important
        to participate as soon as you can.
     You can participate at any time you want but the later you join the contest, your chances of 
      winning goes down. The contest is only valid in India and is open only to consumers and not
       retailers of the products.

Flipkart reserves the right to terminate, withdraw, suspend, amend, extend, modify, add or remove 
portions of the contest. Participants are not bound in any way to participate and Flipkart reserves the 
right
 to declare the winner. The contest is
 subject to force majeure circumstances and Flipkart reserves the right to disqualify participants.</p>
      &nbsp; <br></br> <Image src="https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png"
      width={60}
      height={60}
      roundedCircle />
      <a href="https://www.flipkart.com/">&nbsp;<b>Flipkart</b> </a>
      <b><i>today flipkart <b>Trivia</b> Quiz is Back.</i>  </b>Flipkart <b>Trivia</b> Quiz is generally asks
       General Knowledge based Questions.Flipkart <b>Daily Trivia</b> Quiz game is started 
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