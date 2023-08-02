import React, { useState, useEffect } from 'react'
import './Hero.css';
import HeroContent from '../HeroContent/HeroContent';

import img from '../../img/mobile.png'

export default function Hero() {


    return (
        <div className='HeroConatin'>

            <div className="shapes-container" >
                <div className="shape" data-aos="fade-down-left" data-aos-duration="1500" data-aos-delay="100"></div>
                <div className="shape" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="100"></div>
                <div className="shape" data-aos="fade-up-right" data-aos-duration="1000" data-aos-delay="200"></div>
                <div className="shape" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200"></div>
                <div className="shape" data-aos="fade-down-left" data-aos-duration="1000" data-aos-delay="100"></div>
                <div className="shape" data-aos="fade-down-left" data-aos-duration="1000" data-aos-delay="100"></div>
                <div className="shape" data-aos="fade-down-right" data-aos-duration="500" data-aos-delay="200"></div>
                <div className="shape" data-aos="fade-down-right" data-aos-duration="500" data-aos-delay="100"></div>
                <div className="shape" data-aos="zoom-out" data-aos-duration="2000" data-aos-delay="500"></div>
                <div className="shape" data-aos="fade-up-right" data-aos-duration="500" data-aos-delay="200"></div>
                <div className="shape" data-aos="fade-down-left" data-aos-duration="500" data-aos-delay="100"></div>
                <div className="shape" data-aos="fade-up" data-aos-duration="500" data-aos-delay="0"></div>
                <div className="shape" data-aos="fade-down" data-aos-duration="500" data-aos-delay="0"></div>
                <div className="shape" data-aos="fade-up-right" data-aos-duration="500" data-aos-delay="100"></div>
                <div className="shape" data-aos="fade-down-left" data-aos-duration="500" data-aos-delay="0"></div>
            </div>

            <HeroContent />






        </div>
    );
}
