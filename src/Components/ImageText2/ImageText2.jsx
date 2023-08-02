import React, { useState, useEffect } from 'react'
import './ImageText2.css'
import img from '../../img/feature/feature-new-02.jpg'
import testimonial from '../../img/testimonial/feature-testimonial-thumb.jpg'
export default function ImageText2() {
    const [scrolled, setScrolled] = useState(false);

    // Cambio de color en navbar al hacer scroll
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 1200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className={scrolled ? "ImageTextContain scrolledTextContain" : "ImageTextContain"}>


            <div className='ImageText-Text'>
                <h2>Aumente su productividad con aplicaciones pequeñas</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <h5>"InVision es una ventana a todo lo que se está diseñando en Twitter. Reúne todo nuestro mejor trabajo en un solo lugar".</h5>
                <div className='deFlex'>
                    <img src={testimonial} alt="testimonial" />
                    <h6> Jonathan Andrew, Themefisher.com</h6>
                </div>

                <button>Saber Más</button>
            </div>
            <div className='img2'>
                <img src={img} alt="img" />
            </div>


        </div>
    )
}
