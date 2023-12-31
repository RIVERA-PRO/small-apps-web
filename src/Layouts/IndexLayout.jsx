import React from 'react'
import Header from '../Pages/Header/Header'
import Footer from '../Components/Footer/Footer'
import Developer from '../Components/Developer/Developer'
import Hero from '../Components/Hero/Hero'
import ButonScroll from '../Components/ButonScroll/ButonScroll'
import Main from '../Components/Main/Main'
import Testimonios from '../Components/Testimonios/Testimonios'
import ImageText from '../Components/ImageText/ImageText'
import ImageText2 from '../Components/ImageText2/ImageText2'
import InterfazContain from '../Components/InterfazContent/InterfazContain'
import BgContain from '../Components/BgContain/BgContain'
import BgApps from '../Components/BgApps/BgApps'
export default function IndexLayout() {
    return (
        <div>
            <Header />
            <Hero />
            <Main />
            <ImageText />
            <ImageText2 />
            <InterfazContain />
            <BgContain />

            <Testimonios />
            <BgApps />
            <Footer />
            <Developer />
            <ButonScroll />
        </div>
    )
}
