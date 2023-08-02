import React, { useState, useEffect } from 'react'
import InterfazContent from './InterfazContent'
import InterfazTitle from './InterfazTitle'
import './InterfazContent.css'
export default function InterfazContain() {
    const [scrolled, setScrolled] = useState(false);

    // Cambio de color en navbar al hacer scroll
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 1800) {
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
        <div className={scrolled ? "InterfazContain scrolledInterfaz" : "InterfazContain"}>
            <InterfazTitle />
            <InterfazContent />

        </div>
    )
}
