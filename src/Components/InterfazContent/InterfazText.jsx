import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faPalette, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import './InterfazContent.css';

export default function InterfazText() {
    return (
        <div className='InterfazText'>
            <div className='textInterfaz'>
                <FontAwesomeIcon icon={faLightbulb} size='3x' className='icon' />
                <h4>Fácil creación de prototipos</h4>
                <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui</p>
            </div>
            <div className='textInterfaz'>
                <FontAwesomeIcon icon={faPalette} size='3x' className='icon' />
                <h4>Puente de sensores</h4>
                <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui</p>
            </div>
            <div className='textInterfaz'>
                <FontAwesomeIcon icon={faPencilAlt} size='3x' className='icon' />
                <h4>Estratega</h4>
                <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui</p>
            </div>
            <div className='textInterfaz'>
                <FontAwesomeIcon icon={faLightbulb} size='3x' className='icon' />
                <h4>Dirección artística</h4>
                <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui</p>
            </div>
        </div>
    );
}
