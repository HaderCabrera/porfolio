import React from "react";


import { styles } from "../styles";

import { Tilt } from 'react-tilt'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const ServiceCard = ({ index, name, icon }) => (
  <Tilt className='xs:w-[100px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[2px] rounded-[20px] shadow-card h-[100px]'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 250,
        }}
        className='bg-white-100 rounded-[20px] py-2 px-2 flex justify-evenly items-center flex-col h-full'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-10 h-10 object-contain'
        />

        <h3 className='text-tertiary text-[15px] font-bold text-center'>
          {name}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const Tech = () => {
  return (

    <div className='mt-20 flex flex-wrap justify-center gap-1'>
      {/* Contenedor para el título y subtítulo */}
      <motion.div
        variants={textVariant()}
        className='order-first w-full flex flex-col items-center mb-8'
      >
        <p className={styles.sectionSubText}>Technologies I Have Mastered So Far</p>
        <h2 className={styles.sectionHeadText}>Tech.</h2>
      </motion.div>

      {/* Mapa de tecnologías */}
      {technologies.map((technology, index) => (
        <ServiceCard key={index} index={index} {...technology} />
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
