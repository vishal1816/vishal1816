"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles";
import { whatsnew } from "../constants";
import { staggerContainer } from "../utils/motion";
import { WhatsNewCard, TypingText } from "../components";
import { fadeIn } from "../utils/motion";
import SimpleSlider from "./SimpleSlider";

const WhatsNew = () => {
  const [active, setActive] = useState("world-2");
  return (
    <>
      <section className={`${styles.paddings}`} id="explore">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto flex flex-col`}
        >
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="flex-[0.95] flex justify-center flex-col"
          >
            <TypingText title="| Whats new?" />
          </motion.div>

          <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-4">

              <SimpleSlider />
            </div>
         
    
        </motion.div>
      </section>
    </>
  );
};
export default WhatsNew;