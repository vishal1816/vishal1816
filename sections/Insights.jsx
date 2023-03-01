'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import {  TitleText, TypingText } from '../components';
import SimpleSlider3 from './SimpleSlider3';

const Insight = () => {
  const [active] = useState('world-2');

  return (
    <section className={`${styles.paddings}`} id="partner">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="" textStyles="text-center" /> 
 <TitleText title={<>Our Partners</>} textStyles="text-center" /> 
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-4">
        <SimpleSlider3/>
        </div>
      </motion.div>
    </section>
  );
};

export default Insight;



