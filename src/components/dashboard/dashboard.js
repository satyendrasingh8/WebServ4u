import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import MetaDecorator from "../../utils/metaDecorator";
import HomeContent from "./homeContent";
const dashboard = require('../../dummyData/home.json')

 const Dashboard = () => {
  return (
    <Container fluid >   
    <MetaDecorator title={dashboard.title} description={dashboard.description} /> 
   <HomeContent />
    
    </Container>

  );
}

export default Dashboard;
