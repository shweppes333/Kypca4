import React from 'react';
import '../style/style.css';
import family from '../img/icon/family.svg'

const firstScreen = () => {

    const scrollToSection = () => {
        const section = document.getElementById('house');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='fiveScreen'>
            <div className='fiveScreenBackground'>
                <img src={family} className="iconSvg" ></img>
                <div className='titleText' style={{ color: 'white' }}>Семьи - наш приоритет</div>
                <div className='subtitleText' style={{ color: 'white', fontWeight: '400', marginTop: '0' }}>Мы заботимся о том, чтобы каждая семья нашла идеальное жилье. У нас есть все <br></br>необходимое для комфортной жизни. </div>
                <button className='but' style={{ width: '100px', fontSize: '16px' }} onClick={scrollToSection}>Найти</button>
            </div>

        </div>
    );
};

export default firstScreen