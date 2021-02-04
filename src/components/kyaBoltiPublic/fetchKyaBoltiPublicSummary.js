import React from 'react';
import { Card } from 'react-bootstrap';
import asyncMetaDecorator from '../../utils/asyncMetaDecorator';
import MetaDecorator from '../../utils/metaDecorator';




const FetchKyaBoltiPublicSummary = ({data,curDate}) => {
    
    return(
 <div>
   <div key={data.id} style={{marginBottom:"20px"}}>
   <asyncMetaDecorator title={`Flipkart Kya Bolti public Answers Today ${curDate}`} url="https://webserv4u.com/flipkart-kya-bolti-public-quiz" />
   <MetaDecorator title={`Flipkart Kya bolti public Quiz Answers Today ${curDate}`} description="flipkart kya bolti public Quiz answers are given below 
   please notedown and answer them correctly " />
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

export default FetchKyaBoltiPublicSummary;