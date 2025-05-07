import React from 'react';
import '../../style/style.css';


const newsMiniCard = ({ image, category, date, title, description, fullDescriprtion, openModal }) => {
    return (
        <div className="cardNews" onClick={() => openModal({ image, category, date, title, description, fullDescriprtion  })}>
            <img src={image}></img>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', }}>
                <div style={{ backgroundColor: '#FAE8E1', padding: '2px 10px', borderRadius: '30px', fontSize: '13px', width: '50px', textAlign: 'center' }}>{category}</div>
                <div className='date'>{date}</div>
            </div>
            <div style={{ fontWeight: '700' }}>
                {title}
            </div>
            <div style={{ color: '65665C', fontSize: '14px' }}>{description}</div>
            <div style={{display:'flex', alignItems:"center"}}>
                <button className='openModal'>{openModal}Увидеть больше</button>
            </div>
        </div>
    );
};

export default newsMiniCard;