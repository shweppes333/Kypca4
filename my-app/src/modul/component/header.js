import React from 'react';
import '../style/header.css';
import { Link } from 'react-router-dom';

const Header = () => {


    return (
        <header className="header">

            <div className="logo">
            </div>
            <div className='navAuth'>
                <nav className="nav">

                    <a href='#home'>Главная</a>
                    <a href='#house'>Недвижимость</a>
                    <a href='#about'>О нас</a>
                    <a href='#contact'>Контакты</a>
                    <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                        <div className='lupa'></div>
                        <a href='#home'>Поиск</a>
                    </div>
                </nav>
                <div className="auth-buttons">
                    <Link to="/authorization">
                        <button className="login-button">Вход</button>
                    </Link>
                    <Link to="/registration">
                        <button className="but">Регистрация</button>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header