import React from 'react';
import '../../style/style.css';
import bed from "../../img/house/bed.svg"
import square_m from "../../img/house/square_m.svg"

const Card = ({ image, title, price, rooms, meters }) => {
    return (
        <div className="card">
            <img src={image} alt={title} style={{width:'400px'}} />
            <h3>{title}</h3>
            <p style={{fontWeight:'500'}}>{price} руб.</p>
            <div style={{ display: 'flex', gap: "20px" }}>
                <div className='iconCard'>
                    <img src={bed} style={{ width: '16px', height: '24px' }}>
                    </img>
                    {rooms}
                </div>
                <div className='iconCard'>
                    <img src={square_m} style={{ width: '16px', height: '24px' }}>
                    </img>
                    {meters} м²
                </div>
            </div>
        </div>
    );
};

export default Card;