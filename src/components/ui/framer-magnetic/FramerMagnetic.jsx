'use client'
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export const FramerMagnetic = ({ children }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const mouseMove = (e) => {
        const { clientX, clientY } = e;
        const { width, height, left, top } = ref.current.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        console.log({ x, y }); // Añade este log
        setPosition({ x, y });
    };

    const mouseLeave = () => {
        console.log("Mouse left"); // Añade este log
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;

    return (
        <motion.div
            onMouseMove={mouseMove}
            onMouseLeave={mouseLeave}
            ref={ref}
            animate={{ x, y }}
            transition={{ type: 'spring', bounce: 0.6}}
        >
            {children}
        </motion.div>
    );
};