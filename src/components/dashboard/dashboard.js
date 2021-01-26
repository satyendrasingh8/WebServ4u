import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import MetaDecorator from "../../utils/metaDecorator";
import DashboardGallery from "./homeDashboard/dashboardGallery";
import DashBoardHeader from "./homeDashboard/dashboardHeader";
import GameType from "./homeDashboard/gameType";
const dashboard = require('../../dummyData/home.json')

 const Dashboard = () => {
  return (
    <Container fluid >   
    <MetaDecorator title={dashboard.title} description={dashboard.description} /> 
   <Card>
  <DashBoardHeader />
      <GameType />
      <DashboardGallery />
   </Card>
    
    </Container>

  );
}

export default Dashboard;
