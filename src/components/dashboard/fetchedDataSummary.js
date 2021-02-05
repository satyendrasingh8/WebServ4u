import React from 'react'
import { Card } from 'react-bootstrap';
import asyncMetaDecorator from '../../utils/asyncMetaDecorator';
import MetaDecorator from '../../utils/metaDecorator';



const FetchedDataSummary = ({data,curDate}) => {
    
    return(
 <div>
   <br></br>
   <div key={data.id} style={{marginBottom:"20px"}}>
      <asyncMetaDecorator title={`today flipkart trivia quiz answers ${curDate}`} url='https://webserv4u.com/flipkart-daily-trivia-quiz' />
      <MetaDecorator title={`today flipkart trivia answers ${curDate}`} description='today flipkart trivia answers
       Live Now. You Can Play The Flipkart Daily Trivia
        Play And Win Vouchers, Gems & More. If You Are Looking 
        For Fast And Right Flipkart Quiz Answers Here Are All 5 
        Correct Answers To The Quiz.

' />
 <MetaDecorator title={`flipkart trivia today answer ${curDate}`} description='flipkart trivia today answer
       Live Now. You Can Play The Flipkart Daily Trivia
        Play And Win Vouchers, Gems & More. If You Are Looking 
        For Fast And Right Flipkart Quiz Answers Here Are All 5 
        Correct Answers To The Quiz.

' />
      <Card>
   <b ><Card.Title style={{fontSize:28,paddingTop:'30px'}}><div style={{textShadow:"1px 1px black" }}> {data.quizType}</div>
       </Card.Title> </b>
  <Card.Body>
  <Card.Title> {data.Qus1}  </Card.Title>
    <Card.Text as="h4" className="mb-2 " style={{color:"red"}}> {data.Ans1} </Card.Text>
    <Card.Title>{data.Qus2}  </Card.Title>
    <Card.Text as="h4" className="mb-2" style={{color:"red"}}>{data.Ans2} </Card.Text>
    <Card.Title>{data.Qus3}  </Card.Title>
    <Card.Text as="h4" className="mb-2 " style={{color:"red"}}>{data.Ans3} </Card.Text>
    <Card.Title>{data.Qus4}  </Card.Title>
    <Card.Text as="h4" className="mb-2" style={{color:"red"}}>{data.Ans4} </Card.Text>
    <Card.Title>{data.Qus5}  </Card.Title>
    <Card.Text as="h4" className="mb-2 " style={{color:"red"}}>{data.Ans5} </Card.Text>
     </Card.Body>
</Card> </div>

 </div>
    );
}

export default FetchedDataSummary