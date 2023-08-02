import React, { useRef, useEffect, useState } from 'react';
import './BgContain.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'; // Importa el ícono que deseas usar

export default function BgContain() {
    const [scrolled, setScrolled] = useState(false);

    // Cambio de color en navbar al hacer scroll
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 2400) {
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
        <div className={scrolled ? "BgContain scrolledBG" : "BgContain"}>

            <div className='BgContainText'>
                <h2>Mira nuestro video promocional</h2>
                <p>Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamús</p>
                <FontAwesomeIcon icon={faPlayCircle} size="2x" className="play-icon" />

            </div>

        </div>
    )
}
