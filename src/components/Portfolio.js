import React, { Component } from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import credence from "./../images/projects/credence.svg";
import aztex from "./../images/projects/aztex.jpg";
import ebenco from "./../images/projects/ebenco.png";
import ng from "./../images/projects/ng.png";
import woclink from "./../images/projects/woclink.png";
import photobox from "./../images/projects/photobox.png";
import sambplus from "./../images/projects/sambplus.png";
import ramon from "./../images/projects/ramon.png";
import conorlandon from "./../images/projects/conolandon.ico";
import beka from "./../images/projects/beka.png";
import ud from "./../images/projects/ud.png";


import ContentSnow from "./ContentSnow"

import Carousel from "./Carousel";

function Portfolio() {

  const category= '111';

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
    name="portfolio"
    id="portfolio"
className='portfolio'
    data-aos="fade-up" 
  >
<ContentSnow />

<div className="portfolio-container">
<h1>Some of The Projects I Have Worked On</h1>

<div className='portfolio-back'></div>

<div className='portfolio-front'>

<motion.div
          className="portfolio-items"
          variants={boxVariants}
          whileHover="hover"
>
     <img src={credence}  style={{width:`60%`,marginLeft:`20%`,marginTop:`20px`,marginBottom:`45px`}}/>
          <p>Credence Technology Limited</p>
          <a
                rel="noopener noreferrer"
                href="https://ctechub.com"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
                </a>
          </motion.div>
      
<motion.div
          className="portfolio-items"
          variants={boxVariants}
          whileHover="hover"
          
>
<img src={photobox} style={{width:`60%`,marginLeft:`20%`,marginTop:`40px`,marginBottom:`45px`}} />

          <p>Phot0box</p>
          <a
                rel="noopener noreferrer"
                href="https://www.phot0box.online"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
                </a>
          </motion.div>
        <motion.div
          className="portfolio-items"
          variants={boxVariants}
          whileHover="hover"
>
<img src={ng} style={{width:`40%`,marginLeft:`30%`,marginTop:`20px`}} />

          <p>NG Gardens and Communications</p>
          <a
                rel="noopener noreferrer"
                href="https://majorpstore.000webhostapp.com/catalog.php"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
                </a>
          </motion.div>
       
        <motion.div
          className="portfolio-items"
          variants={boxVariants}
          whileHover="hover"
>
<img src={aztex} style={{width:`50%`,marginLeft:`25%`,marginTop:`0px`,marginBottom:`-12px`}}/>

        <p>Aztex Consults and Solutions</p> 
        <a
                rel="noopener noreferrer"
                href="https://aztexcs.org"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
                </a>
          </motion.div>
       </div>


</div>


<div className="portfolio-container">
  <div className='portfolio-back'></div>

<div className='portfolio-front'>

<motion.div
          className="portfolio-items"
          variants={boxVariants}
          whileHover="hover"
>
<img src={ebenco} style={{width:`50%`,marginLeft:`25%`,marginTop:`10px`,marginBottom:`10px`}}/>

          <p>Ebenco Global Link Ltd.</p>
          <a
                rel="noopener noreferrer"
                href="https://www.ebencogroupltd.com/"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
          </motion.div>
        <motion.div
          className="portfolio-items"
          variants={boxVariants}
          whileHover="hover"
>
<img src={beka} style={{width:`60%`,marginLeft:`20%`,marginTop:`40px`,marginBottom:`25px`}} />

<p>Beka Studios</p>
          <a
                rel="noopener noreferrer"
                href="https://aztexcs.com/beka/"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
                </a>
          </motion.div>
          <motion.div
          className="portfolio-items"
          variants={boxVariants}
          whileHover="hover"
>
<img src={conorlandon} style={{width:`50%`,marginLeft:`25%`,marginTop:`10px`,marginBottom:`-20px`,borderRadius:`5%`}} />

        <p>Conorlandon</p> 
        <a
                rel="noopener noreferrer"
                href="https://conorlandon.com/"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
                </a>
          </motion.div>
          <motion.div
          className="portfolio-items"
          variants={boxVariants}
          whileHover="hover"
>
<img src={sambplus} style={{width:`60%`,marginLeft:`20%`,marginTop:`40px`,marginBottom:`45px`}} />

          <p>Sambplus Media</p>
          <a
                rel="noopener noreferrer"
                href="https://sambmedia.online"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
                </a>
          </motion.div>
       
       </div>

</div>

<Carousel />
    
    </section>
  );
}

export default Portfolio;
