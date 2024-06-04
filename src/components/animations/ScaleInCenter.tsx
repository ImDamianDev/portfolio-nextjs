'use client'
import { Variants, motion } from 'framer-motion';
import React from 'react';


const cardVariants: Variants = {
  offscreen: {
    x: 0,
  },
  onscreen: {
    x: 100,
    transition: {
      type: "easeOut",
      duration: 0.2
    }
  },
};

export const ScaleInCenter: React.FC<React.PropsWithChildren> = ({ children }) => {

  return (

    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.9 }}
    >
      <motion.div
        variants={cardVariants}
      >

        {children}
      </motion.div>

    </motion.div>

  )
}