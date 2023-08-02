import React from 'react'
import img from '../../img/feature/iphone-ipad.jpg'
import InterfazText from './InterfazText'
export default function InterfazContent() {
    return (
        <div className='InterfazContent'>

            <div className='img2'>
                <img src={img} alt="img" />
            </div>
            <InterfazText />


        </div>
    )
}
