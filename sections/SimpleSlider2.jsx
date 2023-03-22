import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { trackWorlds } from "../constants";
import { WorldCard } from "../components";
import { useState } from "react";

const SimpleSlider2 = () => {
  const [active, setActive] = useState("world-2");
  var settings = {
    infinite: false,
    speed:500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    
  };
  return (
    <Slider style={{ margin:"10px", width: "100%"  }}
    {...settings}>
          {trackWorlds.map((item, index) => {
            return (
               <>
               <div>
               <WorldCard
                  index={index}
                   {...item}
                 key={item.id}
                 id={item.id}
                  active={active}
                  title={item.title}
                  heading={item.heading}
                 handleClick={setActive}
               />
               </div>
                
             </>
             
            );
         })}
         </Slider>
  );
};

export default SimpleSlider2;
