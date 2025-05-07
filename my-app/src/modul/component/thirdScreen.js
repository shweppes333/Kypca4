import React from 'react';
import '../style/style.css';
import imageOne from '../img/IMAGE-1.png';
import imageTwo from '../img/IMAGE-2.png';
import money from '../img/icon/money.svg';
import documentIcon from '../img/icon/documentTwo.svg'; 

const ThirdScreen = () => { 

    const scrollToSection = () => {
        const section = document.getElementById('house');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='therdScreen'>
            <div className='blockTherdScreen'>
                <div className='blockText'>
                    <div style={{ backgroundColor: '#E7E8E3', padding: '2px 10px', borderRadius: '30px', fontSize: '13px', width: '140px', textAlign: 'center' }}>Комфорт прежде всего</div>
                    <div className='titleText'>Лучшие дома для <br />семейного комфорта</div>
                    <div className='subtitleText'>Мы предлагаем только самые качественные варианты для<br /> вашего уюта.</div>
                    <button className='whiteBut' onClick={scrollToSection}>Найти Недвижимость</button>
                </div>
                <img src={imageOne} alt="Изображение 1" />
            </div>
            <div className='blockTherdScreen'> 
                <img src={imageTwo} alt="Изображение 2" />
                <div className='blockText'>
                    <div style={{ backgroundColor: '#E7E8E3', padding: '2px 10px', borderRadius: '30px', fontSize: '13px', width: '100px', textAlign: 'center' }}>Быстро и легко</div>
                    <div className='titleText'>Упрощенный процесс</div>
                    <div className='subtitleText'>Мы заботимся о вашем времени и делаем все возможное для вашего <br />удобства.</div>
                    <div style={{ display: 'flex', gap: '50px' }}>
                        <div>
                            <img src={money} className="iconSvg" alt="Иконка денег" />
                            <h4>Доступные цены</h4>
                            <div className='subtitleText'>Дешевая аренда доступная<br /> всем</div>
                        </div>
                        <div>
                            <img src={documentIcon} className="iconSvg" alt="Иконка документа" /> 
                            <h4>Доступные цены</h4>
                            <div className='subtitleText'>Мы стремимся сделать процесс<br /> максимально простым </div>
                        </div>
                    </div>
                    <button className='whiteBut' onClick={scrollToSection}>Найти Недвижимость</button>
                </div>
            </div>
        </div>
    );
};

export default ThirdScreen; 
