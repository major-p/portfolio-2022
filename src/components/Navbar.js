import React, { Component, Fragment, useEffect , useState} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { animateScroll as scroll, Link } from "react-scroll";
import close from "./../images/close.svg";
import menu from "./../images/menu.svg";
import logo from "./../images/logo.svg";
 function NavBarFixed(props) {
 
  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
        window.removeEventListener('scroll', isSticky);
    };
});


       
/* Method that will fix header after a specific scrollable */
       const isSticky = (e) => {
            const header = document.querySelector('.header-container');
            const scrollTop = window.scrollY;
            scrollTop >= 250 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
        };

      

    const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  

    const [navbar, setNavbar] = useState(false);
    const [navClicked, setNavClicked] = useState(false);
  
    const handleClick = () => {
      setNavClicked(!navClicked);
    };

    const changeNav = () => {
      if (window.scrollY >= 100) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };
  
    window.addEventListener("scroll", changeNav);
    
    return (
    <Fragment>
      <div  
      name="home"
      id="home"> 
      <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
    >
   

   <aside className={sidebarIsOpen ? 'open' : ''}>
         
         <div className="aside-container">
           <div className="aside-top-wrapper">
           <div className="aside-close">
           <button
               onClick={() => setSidebarIsOpen(false)}
               className="close-sidebar"
               type="button"
             >
              <img src={close} className="aside-close" />
             </button>
           </div>
</div>

<div className="nav-container-mobile">
              <ul className={ navClicked ? "nav-list-mobile active" : "nav-list-mobile" }>

          <li>
          <Link
            className={navbar ? "anchor" : "anchor"}
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            delay={100}
            offset={0}
            duration={500}
            onClick={() => setSidebarIsOpen(false)}
          >
            Home</Link>

          </li>
          <li>
          <Link
            className="anchor"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            delay={100}
            offset={0}
            duration={500}
            onClick={() => setSidebarIsOpen(false)}
          >
           About
            </Link>
            </li>
          <li>
          <Link
            className="anchor"
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            delay={100}
            offset={0}
            duration={500}
            onClick={() => setSidebarIsOpen(false)}
          >
       Expertise/Interests
        </Link>
          </li>
         
        
            <li>
            <Link
            className="anchor"
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            delay={100}
            offset={0}
            duration={500}
            onClick={() => setSidebarIsOpen(false)}
          >
         Portfolio
         </Link>
          </li>
          
          <li className="contact-button">
          <Link
            className="contact-text anchor"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            delay={100}
            offset={0}
            duration={500}
            onClick={() => setSidebarIsOpen(false)}
          >
            Contact
            </Link>
            </li>
        </ul>

             </div>
         </div>
        
        
        <br />
       
       </aside>
<div class="mobile-menu">
<div class="mobile-menu-left">
<img src={logo} />
</div>

<div class="mobile-menu-right">
<button
              type="button"
              className="open-sidebar"
              onClick={() => setSidebarIsOpen(true)}
            >
               <img src={menu} className="mobile-icons" />
            </button>
</div>
</div>
    <div className="header-container">
        <div className="header-left">
        <span  onClick={() => scroll.scrollToTop()}   >
          <div data-aos="zoom-in-down" className="logo" >
      <img src={logo} />
          </div>
      
        </span>
      </div>
        
      <div className="header-right">
      
              <div className="nav-container">
              <ul className={ navClicked ? "nav-list active" : "nav-list" }>

          <li>
          <Link
            className={navbar ? "anchor" : "anchor"}
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            delay={100}
            offset={0}
            duration={500}
          >
            Home</Link>

          </li>
          <li>
          <Link
            className="anchor"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            delay={100}
            offset={0}
            duration={500}
          >
           About
            </Link>
            </li>
          <li>
          <Link
            className="anchor"
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            delay={100}
            offset={0}
            duration={500}
          >
       Expertise/Interests
        </Link>
          </li>
                 
        <li>
            <Link
            className="anchor"
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            delay={100}
            offset={0}
            duration={500}
        >
         Portfolio
        </Link>
        </li>
          
        <li className="contact-button">
        <Link
            className="contact-text anchor"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            delay={100}
            offset={0}
            duration={500}
          >
            Contact
        </Link>
            </li>
        </ul>
                 
        </div>
      </div>

        </div>


      </motion.div>

      </div>
        </Fragment>
    
  );
}

export default NavBarFixed;