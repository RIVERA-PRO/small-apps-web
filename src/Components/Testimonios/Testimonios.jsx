import React, { useRef, useEffect, useState } from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import 'swiper/swiper-bundle.css';
import img1 from '../../img/testimonial/feature-testimonial-thumb.jpg';

import './Testimonios.css'
export default function Testimonios() {
    const [scrolled, setScrolled] = useState(false);

    // Cambio de color en navbar al hacer scroll
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 2900) {
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
        <div className='TestimoniosConatin'>
            <Swiper
                effect='coverflow'
                grabCursor={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                id='swiper_container2'
            >
                <SwiperSlide id='SwiperSlide2'>
                    <div className={scrolled ? "card-scroll2 scrolled3" : "card-scroll2"}>
                        <img src={img1} alt='img' />
                        <span>Abraham Linkon, Themefisher.com</span>
                        <p>
                            "Lejos, muy lejos, detrás de las montañas de la palabra, lejos de los países Vokalia y Consonantia, viven los textos ciegos.".
                        </p>

                    </div>
                </SwiperSlide>

                <SwiperSlide id='SwiperSlide2'>
                    <div className={scrolled ? "card-scroll2 scrolled3" : "card-scroll2"}>
                        <img src={img1} alt='img' />
                        <span>Abraham Linkon, Themefisher.com</span>
                        <p>
                            "Lejos, muy lejos, detrás de las montañas de la palabra, lejos de los países Vokalia y Consonantia, viven los textos ciegos.".
                        </p>

                    </div>
                </SwiperSlide>

                <SwiperSlide id='SwiperSlide2'>
                    <div className={scrolled ? "card-scroll2 scrolled3" : "card-scroll2"}>
                        <img src={img1} alt='img' />
                        <span>Abraham Linkon, Themefisher.com</span>
                        <p>
                            "Lejos, muy lejos, detrás de las montañas de la palabra, lejos de los países Vokalia y Consonantia, viven los textos ciegos.".
                        </p>

                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    )
}
