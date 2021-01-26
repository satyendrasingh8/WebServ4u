import React from 'react'
import { Button, Card, CardGroup, Col, Container, ListGroup, Row } from 'react-bootstrap';


const DashboardGallery = () => {

    return (
        <div>
         
      <Card> 
      <CardGroup>
      <Card border="dark" style={{margin:"30px"}}>
  <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/DailyTrivia1.png"} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Answer</Button>
  </Card.Body>
</Card>
<Card border="dark" style={{margin:"30px"}}>
  <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/DailyTrivia1.png"} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Answer</Button>
  </Card.Body>
</Card>
<Card border="dark" style={{margin:"30px"}} >
  <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/DailyTrivia1.png"} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Answer</Button>
  </Card.Body>
</Card>
</CardGroup>
<CardGroup>
      <Card border="dark" style={{margin:"30px"}}>
  <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/DailyTrivia1.png"} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Answer</Button>
  </Card.Body>
</Card>
<Card border="dark" style={{margin:"30px"}}>
  <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/DailyTrivia1.png"} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Answer</Button>
  </Card.Body>
</Card>
<Card border="dark" style={{margin:"30px"}} >
  <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/DailyTrivia1.png"} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Answer</Button>
  </Card.Body>
</Card>
</CardGroup>
      </Card>
        </div>
    )
}

export default DashboardGallery;