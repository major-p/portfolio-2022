import React, { Component,useState,useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { animateScroll as scroll } from "react-scroll";
import TextSlide from "./TextSlide";
import major from "./../images/major.png";
import contact from "./../images/contact.svg";
import ContentSnow from "./ContentSnow"

const contentVariants = {
    initial: {
      translateY: "100vh",
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
  
  
function Welcome() {

    return (
     
  
    <section
  
className=''
    data-aos="fade-up" 
    >
<ContentSnow />
        <div className="welcome-container">
        <div className="welcome-left">

        <motion.div
        className="welcome-content"
        variants={contentVariants}
        initial="initial"
        animate="animate"
      >
        <h2 className=""> Hi, I’m Precious </h2>
        <br />
        <h1 >
         I BUILD THINGS THAT WORK
          <motion.span
            drag={true}
            dragConstraints={{ left: 0, top: 0, bottom: 0, right: 0 }}
            className="hand"
            animate={{ rotate: [0, 20, 0, 20, 0, 0, 0, 0, 0, 0] }}
            transition={{ yoyo: Infinity, duration: 1.7 }}
          >
            <span role="img" aria-label="Hand waving">
              👋
            </span>
          </motion.span>{" "}
        </h1>
        <TextSlide />

        <h3>
          {" "}
          From Delta State,{" "}
          <span role="img" aria-label="Nigerian Flag">
            Nigeria
          </span>
        </h3>

        <button className="button" onClick={() => scroll.scrollToBottom()}>
        <img src={contact} />
        </button>
      </motion.div>


        </div>

        <div className="welcome-right">
        <motion.div
        className="r"
        animate={{ translateY: [-20, 0, -20, 0] }}
        transition={{ yoyo: Infinity, duration: 6 }}
      >
        <img src={major} />

      </motion.div>
        </div>

        </div>
         
        </section>
  );
}

export default Welcome;
