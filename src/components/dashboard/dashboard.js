import React from "react";
import MetaDecorator from "../../utils/metaDecorator";
import DashboardGallery from "./homeDashboard/dashboardGallery";
import DashBoardHeader from "./homeDashboard/dashboardHeader";
import moment from "moment"
import GameType from "./homeDashboard/gameType";
import DashboardDetail from "./homeDashboard/dashboardDetail";
const dashboard = require('../../dummyData/home.json')

 const Dashboard = () => {
  const curDate = moment(new Date()).format(' Do MMM YYYY');

  return (
    <div >   
        
   <div>
  <DashBoardHeader curDate={curDate} />
      <GameType />
      <DashboardGallery />
      <DashboardDetail curDate={curDate} />
   </div>
    
    </div>

  );
}

export default Dashboard;
