import React, { Component } from 'react';
import graphics from '../images/graphics.svg';
import editorial from './../images/editorial.svg';
import UiUx from './../images/ui-ux.svg';
import comments from './../images/comment-box.png';
import commenter from './../images/commenter.jpg'
import Carousel from './Carousel';

function Testimonials() {

    return (
     
    <section
    name="testimonials"
    id="testimonails"
className='testimonials'
    data-aos="flip-up" 
  >

<div className="testimonials-container">

<div className='testimonials-top'>
    <h2>Testimonials</h2>
    <p>
    We can set different placement option on each element, 
    the principle is pretty simple, each anchor-placement option contains two words i.e. top-center.
    </p>
</div>

<div className='testimonials-bottom'>

 <Carousel />

                             </div>


</div>
         
    </section>
  );
}

export default Testimonials;
