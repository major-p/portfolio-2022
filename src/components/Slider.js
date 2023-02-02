import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';



const contentVariants = {
  initial: {
    translateY: "10vh",
    opacity: 0,
  },

  animate: {
    translateY: "0vh",
    opacity: 1,
    transition: {
      duration: 2,
      when: "beforeChildren",
      // staggerChildren: 0.4,
    },
  },
};

const childrenVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },

  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      type: "spring",
      delay: 0.5,
    },
  },

  exit: {
    opacity: 0,
    y: -200,
    transition: { duration: 0.2 },
  },
};

const Slider = () => {

  
  // State
  const [showHeadingOne, setShowHeadingOne] = useState(true);
  const [showHeadingTwo, setShowHeadingTwo] = useState(false);

  // Timeout
  useEffect(() => {
    setTimeout(() => {
      if (showHeadingOne) {
        setShowHeadingOne(false);
        setShowHeadingTwo(true);
      } else {
        setShowHeadingOne(true);
        setShowHeadingTwo(false);
      }
    }, 3000);
  }, [showHeadingOne, showHeadingTwo]);



  return (
    <section className="container" >
      <motion.div
        className="slider-container"
        variants={contentVariants}
        initial="initial"
        animate="animate"
      >
      
        <p className="slider-content">
      <span>NG Gardens and Communication</span>   
      <br />
          
        </p>
        {/* Animate Skill Content */}

        <div className="slider-animation">
          <AnimatePresence>
            {showHeadingOne && (
              <motion
                className="animation-content"
                variants={childrenVariants}
                exit="exit"
                animate="animate"
                initial="initial"
              >
              Sapele-Warri Road
              </motion>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showHeadingTwo && (
              <motion
                className="animation-content"
                variants={childrenVariants}
                exit="exit"
                animate="animate"
                initial="initial"
              >
                Sapele, Delta State
              </motion>
            )}
          </AnimatePresence>
          
        </div>
        {/* // */}


      
      </motion.div>
      

   

      <div className="clearfix"></div>
  
  </section>
  );
};

export default Slider;
