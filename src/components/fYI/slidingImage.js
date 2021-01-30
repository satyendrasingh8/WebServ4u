import React,{useState} from "react";
import {Carousel} from 'react-bootstrap'

const SlidingImage = () => {
   
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    

  return (
    <div className="text-black">
     
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "/images/4.png"}
          height="500px"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "/images/flipkartgamezone.png"}
          height="500px"
          alt="Flipkart daily Game Zone"
        />

        
      </Carousel.Item >
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "/images/trivia.png"}
          height="500px"
           alt="Third slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default SlidingImage;
