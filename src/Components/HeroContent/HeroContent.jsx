import React from 'react'
import './HeroContent.css'
import img from '../../img/mobile.png'
export default function HeroContent() {


    return (
        <div className='HeroContent'>

            <div className='HeroContentText'>
                <h1>
                    Muestra tu aplicación con Small Apps</h1>
                <p>Además de su hermoso diseño. Laapp es un marco central increíblemente rico para que muestres tu aplicación.</p>
                <button>Descargar ahora</button>
            </div>
            <div className='img'>
                <img src={img} alt="img" />
            </div>

        </div>


    )
}
