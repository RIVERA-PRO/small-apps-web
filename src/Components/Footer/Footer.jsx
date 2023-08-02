import React, { useState, useEffect } from 'react'
import './Footer.css'
import { Link as Anchor, useNavigate, useLocation } from "react-router-dom";

import logo from '../../img/logo-alt.png'
export default function Footer() {

    const [scrolled, setScrolled] = useState(false);

    // Cambio de color en navbar al hacer scroll
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 3600) {
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
        <div className='FooterContain'>

            <div className={scrolled ? "footerText scrolledFooter " : "footerText"}>
                <div className='logo'>
                    <Anchor to={`/`} ><img src={logo} alt="logo" /></Anchor>
                </div>


                <p>Lejos, muy lejos, detrás de las montañas de la palabra, lejos de los países Vokalia y Consonantia, viven los textos ciegos. Separados viven en Bookmarksgrove</p>
                <div class="redes-sociales-footer">

                    <a href="#"><i class='fa fa-instagram'></i></a>
                    <a href="#"> <i class='fa fa-linkedin'></i></a>
                    <a href="#"><i class='fa fa-twitter'></i></a>
                </div>
            </div>

            <div className={scrolled ? "footerText scrolledFooter " : "footerText"}>
                <h3>PRODUCTO</h3>

                <Anchor to={`/`} >Equipo</Anchor>
                <Anchor to={`/`} >Blogs</Anchor>
                <Anchor to={`/`} >Preguntas frecuentes</Anchor>
                <Anchor to={`/`} >Términos</Anchor>
            </div>

            <div className={scrolled ? "footerText scrolledFooter " : "footerText"}>
                <h3>RECURSOS</h3>
                <Anchor to={`/`} >Regístrese</Anchor>
                <Anchor to={`/`} >Acceso</Anchor>
                <Anchor to={`/`} >Inversor </Anchor>
                <Anchor to={`/`} >Carrera </Anchor>

            </div>

            <div className={scrolled ? "footerText scrolledFooter " : "footerText"}>
                <h3>
                    BOLETIN INFORMATIVO</h3>
                <p>Muy, muy lejos, detrás de la palabra montañas, lejos de los países.</p>

                <form action="" className='form-footer'>
                    <input type="email" placeholder='Introducir correo elecronico' />
                    <button>Suscribir</button>
                </form>


            </div>

        </div>
    )
}
