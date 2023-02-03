// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
// import styles from "../styles";
// import { whatsnew } from "../constants";
// import { WhatsNewCard } from "../components";
// import { useState } from "react";

// const SimpleSlider = () => {
//   const [active, setActive] = useState("world-2");
//   return (
//     <Carousel style={{ background: "white", color: "red", width: "100%" }}>
//       {whatsnew.map((item, index) => {
//         return (
//           <>
//             <WhatsNewCard
//               index={index}
//               {...item}
//               key={item.id}
//               id={item.id}
//               active={active}
//               title={item.title}
//               handleClick={setActive}
//             />
//           </>
//         );
//       })}
//     </Carousel>
//   );
// };
// export default SimpleSlider;

// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
// import { whatsnew } from "../constants";
// import { WhatsNewCard } from "../components";
// import { useState } from "react";

// const SimpleSlider = () => {
//   const [active, setActive] = useState("world-2");
//         return (
//             <Carousel>
//                 <div>

//                 {whatsnew.map((world, index) => (
//               <WhatsNewCard
//                 key={world.id}
//                 {...world}
//                 index={index}
//                 active={active}
//                 handleClick={setActive}
//               />
//             ))}

//                 </div>
//             </Carousel>
//         );

// };
// export default SimpleSlider;

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

    infinite: true,
    speed:500,
    slidesToShow: 6,
    slidesToScroll: 6,
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
                 handleClick={setActive}
               />
             </>
             
            );
         })}
         </Slider>
  );
};

export default SimpleSlider;