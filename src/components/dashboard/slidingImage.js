import React,{useState} from "react";
import {Carousel} from 'react-bootstrap'
import MetaDecorator from "../../utils/metaDecorator"
const content = require('../../dummyData/home.json')

const SlidingImage = () => {
   
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    

  return (
    <div className="text-black">
      <MetaDecorator title={content.slidingImageTitle} description={content.slidingImageDescription} />
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "/images/DailyTrivia1.png"}
          height="500px"
          alt="First slide"
        />
        
      </Carousel.Item>
    
  
    </Carousel>
    </div>
  );
}

export default SlidingImage;
