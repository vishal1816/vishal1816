"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn } from "../utils/motion";

const Insight = ({ id, imgUrl, title,image, index, active, handleClick }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`relative ${
        active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
      } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
      onClick={() => handleClick(id)}
    >
      <img
        style={{ padding: "8px" }}
        src={imgUrl}
        alt="planet-04"
        className="absolute w-full h-3/4 object-cover rounded-[24px]"
      />
      {active !== id ? (
        <h3 className=" my-card font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20  lg:origin-[0,0]">
          {title}
        </h3>
      ) : (
        <div
          style={{ width: "213px", marginBottom: "113px" }}
        
          className="absolute bottom-0 p-8 flex justify-start  flex-col bg-[rgba(0,0,0,0.5)] rounded-[24px]"
        >
          <div
            className={`${styles.flexCenter} w-[100px] h-[70px] rounded-[24px] glassmorphism mb-[16px]`}
          >
            <img
              src={image}
              alt="headset"
              className="w-85 h-1/2 object-contain"
            />
          </div>
          <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase">
            
          </p>
          <h2 className="mt-[24px] font-semibold sm:text-[18px] text-[24px] text-white">
            {title}
          </h2>

          <button
            style={{
              color: "white",
              fontSize: 18,
              background: "darkblue",
              outline: "none",
              borderRadius:"5px",
            }}
          >
            <a
              style={{
                color: "white",
                textDecoration:"blink",
              }}
              href="https://codeniatechnologies.com/"
            >
              click
            </a>
          </button>
        </div>
      )}
    </motion.div>
  );
};
export default Insight;
