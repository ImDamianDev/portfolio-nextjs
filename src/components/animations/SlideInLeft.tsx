'use client'
import { Variants, motion } from 'framer-motion';
import React from 'react';


const cardVariants: Variants = {
  offscreen: {
    x: -50,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 100,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 0.8
    }
  },
};

export const SlideInLeft: React.FC<React.PropsWithChildren> = ({ children }) => {

  return (

    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div
        variants={cardVariants}
      >

        {children}
      </motion.div>

    </motion.div>

  )
}