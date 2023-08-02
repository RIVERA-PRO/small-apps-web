import React, { useState, useEffect } from 'react'
import './Main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faPalette, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

export default function Main() {
    const [scrolled, setScrolled] = useState(false);

    // Cambio de color en navbar al hacer scroll
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 0) {
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
        <div className={scrolled ? "MainContain scrolledMain" : "MainContain"}>

            <div className='mainText'>
                <FontAwesomeIcon icon={faLightbulb} size='3x' className='icon' />

                <h4>Temas Simplificados</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
            </div>

            <div className='mainText'>
                <FontAwesomeIcon icon={faPalette} size='3x' className='icon' />

                <h4>Diseño Poderoso</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
            </div>

            <div className='mainText'>
                <FontAwesomeIcon icon={faPencilAlt} size='3x' className='icon' />
                <h4>Contenido Creativo</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
            </div>

        </div>
    )
}
