import React, { Component,useState,useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { animateScroll as scroll } from "react-scroll";
import TextSlide from "./TextSlide";
import major from "./../images/major2.png";
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
  
  
function About() {

    const boxVariants = {
        hover: {
          scale: 1.06,
          transition: {
            type: "spring",
          },
        },
      };
      
    return (
     
  
    <section
    name="about"
    id="about"
className='about'
    data-aos="zoom-in" 
    >
<ContentSnow />
        <div className="about-container">
        <div className="about-left">

        <img src={major} />



        </div>

        <div className="about-right">
       <h1>Who's This Guy?</h1>

       <p>
       A very ambitious and versatile Technology Enthisiast with a passion, committment and a great flare for Technology.
       </p>
       <p>
He is quite phenomenal with a variety of programing languages such as JavaScript and PHP with versatile understanding of complex front-end and back-end data functions and analysis.
</p>
<p>
Well experienced with genius and amazing problem solving approach and powerful technology skills.
</p>
<p>
Further more, putting ideas into < codes /> is one of his hobbies and undertaking challenging tasks is not left out.
He is currently working as a Senior Web Developer at Aztex Consult and Solutions which is where his passion for development converge.
</p>
<p>
Outside work, he loves meeting people and seeing movies. He also has great flare for teaching people(coding) and also for playing musical instrument.
I would love to know you so don't hesitate to get in touch.
       </p>

       <h1 className='space'> Languages I Speak</h1>

<div className="expertise-container">
<motion.div
        className="r"
        animate={{ translateY: [-20, 10, -20, 0] }}
        transition={{ yoyo: Infinity, duration: 6 }}
      >
<ul className='expertise-wrapper'>
    

<li>
<motion.div
          className="portfolio-pic pic1"
          variants={boxVariants}
          whileHover="hover"
          
>
          <i className="fab html fa-html5" ></i> 
          <p>HTML5</p>
          </motion.div>
        </li>
        <li>
        <motion.div
          className="portfolio-pic pic1"
          variants={boxVariants}
          whileHover="hover"
>
          <i className="fab css fa-css3"></i>
          <p>CSS3</p>
          </motion.div>
        </li>

        <li>
        <motion.div
          className="portfolio-pic pic1"
          variants={boxVariants}
          whileHover="hover"
>
          <i className="fab bootstrap fa-bootstrap"></i>
          <p>Bootstrap</p>
          </motion.div>
        </li>
        <li>
        <motion.div
          className="portfolio-pic pic1"
          variants={boxVariants}
          whileHover="hover"
>
          <i className="fab javascript fa-js"></i>
          <p>Javascript</p>
          </motion.div>
        </li>
        <li>
        <motion.div
          className="portfolio-pic pic1"
          variants={boxVariants}
          whileHover="hover"
>
          <i className="fab sass fa-php"></i>
          <p>PHP</p>
          </motion.div>
        </li>
        <li>
        <motion.div
          className="portfolio-pic pic1"
          variants={boxVariants}
          whileHover="hover"
>
          <i className="fab sass fas fa-database"></i>
          <p>SQL</p>
          </motion.div>
        </li>
        <li>
        <motion.div
          className="portfolio-pic pic1"
          variants={boxVariants}
          whileHover="hover"
>
          <i className="fab react fa-react"></i>
          <p>React</p>
          </motion.div>
        </li>
        <li>
        <motion.div
          className="portfolio-pic pic1"
          variants={boxVariants}
          whileHover="hover"
>
          <i className="fab react fa-react"></i>
          <p>React Native</p>
          </motion.div>
        </li>

</ul>

</motion.div>
</div>

        </div>

        </div>
         
        </section>
  );
}

export default About;
