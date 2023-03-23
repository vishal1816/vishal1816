import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { insights } from "../constants";
import { InsightCard } from "../components";
import { useState } from "react";

const SimpleSlider3 = () => {
  const [active, setActive] = useState("world-2");
  var settings = {
    infinite: 'false',
    speed:500,
    
    arrows: false,
    slidesToShow: 4,
    slidesToScroll:4,
  
  };
  return (
    <Slider style={{ margin:"10px", width: "100%"  }}
    {...settings}>
          {insights.map((item, index) => {
            return (
               <>
               <div>
               <InsightCard
                  index={index}
                   {...item}
                 key={item.id}
                 id={item.id}
                  active={active}
                  title={item.title}
                 handleClick={setActive}
               />
               </div>
                
             </>
             
            );
         })}
         </Slider>
  );
};

export default SimpleSlider3;
