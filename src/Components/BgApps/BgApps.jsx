import React, { useRef, useEffect, useState } from 'react';
import './BgApps.css'
import { Link as Anchor, useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function BgApps() {
    const [scrolled, setScrolled] = useState(false);

    // Cambio de color en navbar al hacer scroll
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 3300) {
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

    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.autoplay.start();
        }
    }, []);
    return (
        <div className={scrolled ? "BgAppsContain scrolledBGAPPS" : "BgAppsContain"}>

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


            <h2>Es hora de cambiar de opinión</h2>
            <p>Descargue más de 2 millones de humanos. ¡Obtenga aplicaciones pequeñas gratis para siempre!
                Decimos que no mirarás atrás.</p>
            <div className='apps'>
                <Anchor to={`/`} >IPHONE</Anchor>
                <Anchor to={`/`} >ANDROID</Anchor>
                <Anchor to={`/`} >WINDOWS</Anchor>
            </div>


        </div>
    )
}
