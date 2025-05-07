import React from 'react';
import '../style/style.css';

const firstScreen = () => {
    return (
        <div id="home" className='firstScreen'>
            <div className='leftScreen'>
                <div style={{
                    display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ backgroundColor: '#E7E8E3', padding: '2px 10px', borderRadius: '30px', fontSize: '13px', width: '190px' }}>Найдите свое идеальное место</div>
                    <div className='bigText'>Найдите дом для своей семьи за считанные минуты</div>
                    <div className='text'> Благодаря поиску мы поможем вам быстро и легко найти доступный и подходящий дом.</div>
                </div>
                <div style={{ display: 'flex', gap: '10px' }} >
                    <input className='searchFirstScreen' placeholder='Поиск'></input>
                    <button className='but' style={{ width: '120px' }}>Найти</button>
                </div>

            </div>
            <div className='imageFirstScreen'></div>

        </div>
    );
};

export default firstScreen