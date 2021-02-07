import React from 'react';
import { Card } from 'react-bootstrap';
import asyncMetaDecorator from '../../utils/asyncMetaDecorator';
import MetaDecorator from '../../utils/metaDecorator';



const FetchDaamSahiHaiSummary = ({data,curDate}) => {
    
    return(
 <div>
   <div key={data.id} style={{marginBottom:"20px"}}>
   <asyncMetaDecorator title={`Flipkart play Daam Sahi Hai Quiz Answers Today ${curDate}`} url='https://webserv4u.com/flipkart-daam-sahi-hai-quiz' />
   <MetaDecorator title={`flipkart daam sahi hai today answer ${curDate}`} description='flipkart daily Daam Sahi Hai Quiz is Back.
    Daily Daam Sahi Hai Quiz is generally asks
    General Knowledge based Questions.Flipkart Quiz is started at 12:00Am and ends at 11:59am' />
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

export default FetchDaamSahiHaiSummary;