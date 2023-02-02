import React, { Component } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { animateScroll as scroll } from "react-scroll";
import uiux from "./../images/ui-ux.svg";
import learn from "./../images/learn.png";
import mobile from "./../images/mobile.jpg";
import blockchain from "./../images/blockchain.jpg"
import web from "./../images/web.png"
function Services() {
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
    name="services"
    id="services"
className='services'
    data-aos="" 
  >

<div className="services-container">
<div className="services-left">
<h1>My Areas of Expertise and Interests</h1>
<p>Integrating <b>Brands</b> with digital initiatives to improve customer experience online and offline</p>

<button className="button learn" onClick={() => scroll.scrollToBottom()}>
        <img src={learn} />
        </button>
</div>

<div className="services-right">
<ul className='services-wrapper'>
<li>
<motion.div
          className=""
          variants={boxVariants}
          whileHover="hover"
>
<img src={web} className='service-img'/>

          <p>Web Development<br />
          (Full Stack)</p>
          </motion.div>
        </li>
        <li>
        <motion.div
          className=""
          variants={boxVariants}
          whileHover="hover"
>
<img src={mobile} className='service-img'/>

          <p>Mobile App Development</p>
          </motion.div>
        </li>

        <li>
        <motion.div
          className=""
          variants={boxVariants}
          whileHover="hover"
>
<img src={blockchain} className='service-img'/>

          <p>Block Chain Development</p>
          </motion.div>
        </li>
        <li>
        <motion.div
          className=""
          variants={boxVariants}
          whileHover="hover"
>
<img src={uiux} className='service-img' 
style={{marginTop:`15%`,marginBottom:`10%`}} />

        <p>UI/UX Design</p> 
          </motion.div>
        </li>
        <li>
       
        </li>
        </ul>
</div>

</div>
         
    </section>
  );
}

export default Services;
