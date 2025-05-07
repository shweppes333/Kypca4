import React, { useEffect } from 'react';
import '../../style/style.css';

const Modal = ({ news, closeModal}) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset'; 
        };
    }, []);

    return (
        <div className="modal">
            <div className="modal-content">
                
                <span className="close" onClick={closeModal}>&times;</span>
                <img src={news.image}></img>
                <h2>{news.title}</h2>
                <p>{news.fullDescriprtion}</p>
            </div>
        </div>
    );
};

export default Modal;