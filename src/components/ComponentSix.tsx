import { motion } from "framer-motion";
import React from "react";

const ComponentSix = () => {
  const text = "Легенда   Продолжается"; // Text you want to animate

  // Variants for bounce effect
  const letterVariants = {
    hidden: { y: 0 }, // Initial state before the animation starts
    visible: {
      y: [-10, 0], // Moves up and comes back to the original position
      transition: {
        type: "spring",
        stiffness: 300, // Controls how springy the bounce is
        damping: 20,
        duration: 1.4, // Speed of one bounce cycle
        repeat: Infinity, // Infinite loop
        repeatDelay: 1.4,
      },
    },
  };

  return (
    <section className="flex flex-col items-center justify-center w-full">
      <div className="w-full bg-white flex items-center justify-center py-32">
        <motion.h3
          className="uppercase text-[#992B2B] hooskai text-[64px] flex"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.05, // Delays the bounce for each letter
              },
            },
          }}
        >
          {text.split("").map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="inline-block"
            >
              {letter === " " ? "\u00A0" : letter} {/* Handle spaces */}
            </motion.span>
          ))}
        </motion.h3>
      </div>
    </section>
  );
};

export default ComponentSix;
