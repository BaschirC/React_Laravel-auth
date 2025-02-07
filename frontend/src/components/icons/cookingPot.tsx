import React from "react";
import { motion } from "framer-motion";

const AnimatedCookingPot = ({
  size = 16,
  primaryColor = "currentColor",
  isanimating = "false",
}) => {
  return (
    <div
      className='flex items-center justify-center'
      style={{ width: size, height: size }}
    >
      <motion.svg
        xmlns='http://www.w3.org/2000/svg'
        width={size}
        height={size}
        viewBox='0 0 24 24'
        fill='none'
        stroke={primaryColor}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        {/* Base line */}
        <path d='M2 12h20' />

        {/* Pot body */}
        <path d='M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8' />

        {/* Group the lid and handle together in a single motion group */}
        <motion.g
          animate={
            !!isanimating
              ? {
                  y: [-1, 1, -1],
                  rotate: [-4, 1, -6],
                }
              : { y: 0, rotate: 0 }
          }
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ originX: "50%", originY: "50%" }}
        >
          {/* Handle connection */}
          <path d='m4 8 16-4' />

          {/* Lid */}
          <path d='m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8' />
        </motion.g>

        {/* Steam */}
        <motion.path
          d='M12 5v-2'
          stroke={primaryColor}
          strokeOpacity={0.5}
          initial={{ opacity: 0, pathLength: 0 }}
          animate={
            !!isanimating
              ? {
                  opacity: [0, 1, 0],
                  pathLength: [0, 1, 0],
                  y: [-2, -4, -2],
                }
              : {
                  opacity: 0,
                }
          }
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.svg>
    </div>
  );
};

export default AnimatedCookingPot;
