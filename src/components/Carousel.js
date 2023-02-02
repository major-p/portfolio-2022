import React, { Component } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import './../css/slider.css';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import credence from "./../images/projects/credence.svg";
import aztex from "./../images/projects/aztex.jpg";
import ebenco from "./../images/projects/ebenco.png";
import ng from "./../images/projects/ng.png";
import woclink from "./../images/projects/woclink.png";
import ragric from "./../images/projects/ragric.png";
import sambplus from "./../images/projects/sambplus.png";
import ramon from "./../images/projects/ramon.png";
import conorlandon from "./../images/projects/conolandon.ico";

const boxVariants = {
    hover: {
      scale: 1.06,
      transition: {
        type: "spring",
      },
    },
  };
  

export default class Carousel extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
    
<div className="portfolio-container-mobile">
<h1>Some of The Projects I Have Worked On</h1>
       
        <Slider {...settings}>
 
        <div className='portfolio-back'></div>

          <motion.div
          className="portfolio-items"
          variants={boxVariants}
          whileHover="hover"
>
<img src={woclink} style={{width:`30%`,marginLeft:`35%`,marginTop:`10px`,marginBottom:`27px`}}/>

          <p>Woclink</p>
          <a
                rel="noopener noreferrer"
                href="http://woclink.com/"
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
<img src={ragric} style={{width:`30%`,marginLeft:`35%`,marginTop:`10px`,marginBottom:`27px`}}/>

          <p>RAGIINC</p>
          <a
                rel="noopener noreferrer"
                href="https://www.figma.com/file/ZBxt8QW6KAd87XDyQC4gSN/RAGRIC?node-id=597%3A421"
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
<img src={ebenco} style={{width:`50%`,marginLeft:`25%`,marginTop:`10px`,marginBottom:`27px`}}/>

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
<img src={ramon} style={{width:`40%`,marginLeft:`30%`,marginTop:`10px`,marginBottom:`0px`,borderRadius:`7%`,marginBottom:`27px`}} />

          <p>Ramon Crypto Investment</p>
          <a
                rel="noopener noreferrer"
                href="https://ramoncrypto.com/"
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
     <img src={credence}  style={{width:`60%`,marginLeft:`20%`,marginTop:`30px`,marginBottom:`57px`}}/>
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
<img src={conorlandon} style={{width:`30%`,marginLeft:`35%`,marginTop:`10px`,marginBottom:`30px`,borderRadius:`5%`}} />

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
<img src={ng} style={{width:`40%`,marginLeft:`30%`,marginTop:`20px`,marginBottom:`42px`}} />

          <p>NG Gardens and Communications</p>
          <a
                rel="noopener noreferrer"
                href="https://nggardens.online"
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
<img src={aztex} style={{width:`50%`,marginLeft:`25%`,marginTop:`-2px`,marginBottom:`-15px`}}/>

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
  
      
        <motion.div
          className="portfolio-items"
          variants={boxVariants}
          whileHover="hover"
>
<img src={sambplus} style={{width:`60%`,marginLeft:`20%`,marginTop:`40px`,marginBottom:`67px`}} />

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
       
    
       
       
           
        </Slider>

      </div>
    );
  }
}