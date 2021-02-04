import React from 'react';
import { Card } from 'react-bootstrap';
import asyncMetaDecorator from '../../utils/asyncMetaDecorator';
import MetaDecorator from '../../utils/metaDecorator';



const FetchFakeOrNotSummary = ({data,curDate}) => {
    
    return(
 <div>
   <div key={data.id} style={{marginBottom:"20px"}}>
   <asyncMetaDecorator title='flipkart fake or not quiz answers today' url='https://webserv4u.com/flipkart-fake-or-not-quiz' />
   <MetaDecorator title={`Flipkart fake or not quiz Answers Today ${curDate}`} description='get flipkart fake or not Quiz answers 
   daily in first instance and win exciting 
   awards,prizes,gifts,free coupons and many more by answering correctly' />
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

export default FetchFakeOrNotSummary;