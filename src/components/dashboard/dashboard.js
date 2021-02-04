import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import MetaDecorator from "../../utils/metaDecorator";
import DashboardGallery from "./homeDashboard/dashboardGallery";
import DashBoardHeader from "./homeDashboard/dashboardHeader";
import moment from "moment"
import GameType from "./homeDashboard/gameType";
const dashboard = require('../../dummyData/home.json')

 const Dashboard = () => {
  const curDate = moment(new Date()).format(' Do MMM YYYY');

  return (
    <Container fluid >   
        <MetaDecorator title={`flipkart quiz answers today ${curDate}`} description='get daily flipkart answers today home page- webserv4u.com' /> 
        <MetaDecorator title={` daily trivia quiz answers today ${curDate}`} description='webserv4u.com | You shopping ' /> 
        <MetaDecorator title={`flipkart kya bolti public quiz answers today ${curDate}`} description='flipkart daily answers win prize' /> 
        <MetaDecorator title={`flipkart FYI quiz answers today ${curDate}`} description='get daily flipkart quiz answers' /> 
        <MetaDecorator title={`flipkart Daam Sahi hai quiz answers today ${curDate}`} description='flipkart daily answers win prize' /> 
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
