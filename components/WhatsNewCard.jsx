"use client";

import { motion } from "framer-motion";
import styles from "../styles";

import { fadeIn } from "../utils/motion";

const WhatsNewCard = ({
  id,
  imgUrl,
  title,
  index,
  active,
  handleClick,
  heading,
}) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`relative ${
        active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
      } flex items-center justify-center min-w-[170px] h-[700px]  transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
      style={{ padding: "10px" }}
      onClick={() => handleClick(id)}
    >
      <img
        style={{ padding: "8px" }}
        src={imgUrl}
        alt="planet-04"
        className="absolute w-full h-full object-cover rounded-[24px] "
      />
      {active !== id ? (
        <h3 className=" my-card font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
          {title}
        </h3>
      ) : (
        <div
          style={{ width: "175px" }}
          className="absolute  p-8 flex justify-start bottom-0 flex-col bg-[rgba(0,0,0,0.5)] rounded-[24px] "
        >
          <div
            className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
          >
            <img
              src="/headset.svg"
              alt="headset"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase">
            {heading}
          </p>
          <h2 className="mt-[24px] font-semibold sm:text-[16px] text-[24px] text-white">
            {title}
          </h2>
        </div>
      )}
    </motion.div>
  );
};
export default WhatsNewCard;
