import React from 'react'
import Header from '../Pages/Header/Header'
import Footer from '../Components/Footer/Footer'
import Developer from '../Components/Developer/Developer'
import Hero from '../Components/Hero/Hero'
import ButonScroll from '../Components/ButonScroll/ButonScroll'
import Main from '../Components/Main/Main'
import Testimonios from '../Components/Testimonios/Testimonios'
import ImageText from '../Components/ImageText/ImageText'
export default function IndexLayout() {
    return (
        <div>
            <Header />
            <Hero />
            <Main />
            <ImageText />
            <Testimonios />

            <Footer />
            <Developer />
            <ButonScroll />
        </div>
    )
}
