import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../style/header.css';


const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();

        const templateParams = {
            email: email,
            message: "Спасибо за подписку на рассылку"
        };

        emailjs.send('service_a68ezpi', 'template_hr60r68', templateParams, 'UIQZS5_mSjDuK6kLi')
            .then(() => {
                alert('Спасибо за подписку на рассылку!');
                ;
            }, (err) => {
                console.error('FAILED...', err);
                alert(`Произошла ошибка. Проверьте правильность данных`);
            });
    };

    return (
        <footer id="contact" className="footer">
            <div className="logo"></div>
            <div className='allLinkFooter'>
                <div className='linkFooter'>
                    <a href="#">Главная</a>
                    <a href="#">Блог</a>
                    <a href="#">Риелторы</a>
                    <a href="#">Контакты</a>
                    <a href="#">FAQs</a>
                </div>
                <div className='linkFooter'>
                    <a href="#house">Недвижимость</a>
                </div>
                <div className='linkFooter'>
                    <a href="#">Сообственный стиль</a>
                    <a href="#">Changelog</a>
                    <a href="#">Политика конфиденциальности</a>
                    <a href="#">404</a>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div>Подписывайся на новости</div>
                    <div className='subtitleText'>
                        Подпишитесь на нашу рассылку, чтобы быть в<br /> курсе новых функций и релизов.
                    </div>
                    <form onSubmit={handleSubscribe}>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <input className="searchFirstScreen" style={{ width: "200px" }} placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}
                            />
                            <button className='but' style={{ height: "40px" }} type="submit">
                                Подписаться
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </footer>
    );
};

export default Footer;