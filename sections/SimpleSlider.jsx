
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { whatsnew } from "../constants";
import { WhatsNewCard } from "../components";
import { useState } from "react";

const SimpleSlider = () => {
  const [active, setActive] = useState("world-2");
  var settings = {

    infinite: false,
    speed:500,
    slidesToShow: 4,
    slidesToScroll: 4,
    
  };
  return (
    <Slider style={{ margin:"10px", width: "100%"  }}
    {...settings}>
          {whatsnew.map((item, index) => {
            return (
               <>
                 <WhatsNewCard
                  index={index}
                   {...item}
                 key={item.id}
                 id={item.id}
                  active={active}
                  title={item.title}
                  heading={item.heading}
                 handleClick={setActive}
               />
             </>
             
            );
         })}
         </Slider>
  );
};

export default SimpleSlider;
