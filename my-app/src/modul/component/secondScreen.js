import React from 'react';
import '../style/style.css';
import house from '../img/icon/house.svg'
import documet from '../img/icon/documet.svg'
import key from '../img/icon/key.svg'

const secondScreen = () => {
    return (
        <div id="about"className='secondScreen'>
            <div className='secontTitle'>
                <div className='titleText'>Как это работает</div>
                <div className='subtitleText'>Мы предлагаем простой и удобный процесс поиска недвижимости</div>
            </div>
            <div className='description'>
                <div className='descriptionCard'>
                    <img src={house} className="iconSvg" style={{ marginTop: '30px' }}></img>
                    <h3>Найти недвижимость</h3>
                    <div className='textCard'>Наша платформа предлагает широкий выбор объектов недвижимости, соответствующих<br></br> вашим требованиям и бюджету</div>
                </div>
                <div className='descriptionCard'>
                    <img src={documet} className="iconSvg" style={{ marginTop: '30px' }}></img>
                    <h3>Заключить сделку</h3>
                    <div className='textCard'>Когда вы нашли свою мечту, мы поможем вам пройти все этапы сделки без лишних хлопот</div>
                </div>
                <div className='descriptionCard'>
                    <img src={key} className="iconSvg" style={{ marginTop: '30px' }}></img>
                    <h3>Получить свои ключи</h3>
                    <div className='textCard'>После завершения сделки вы получите<br></br> ключи от вашего нового дома. Мы<br></br> гарантируем, что все будет готово к  переезду</div>
                </div>
            </div>

        </div>
    );
};

export default secondScreen