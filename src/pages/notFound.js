import React from "react";
import { Card } from "react-bootstrap";
import MetaDecorator from "../utils/metaDecorator";
const notFound = require('../dummyData/notFound.json')

function NotFound() {
  return (
    <div >
      <MetaDecorator title={notFound.title} description={notFound.description} />
    <Card style={{height:'1200px'}}>
    <h2><p> Error 404! </p> </h2>
    </Card>
    </div>
  );
}

export default NotFound;
