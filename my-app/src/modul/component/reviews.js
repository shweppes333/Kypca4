import React, { useState, useEffect } from 'react';
import '../style/style.css';
import CommentsCard from './util/commentsCard';
import userOne from '../img/photoUser/userOne.png'
import userTwo from '../img/photoUser/userTwo.png'
import userThre from '../img/photoUser/userThre.png'


const сomments = [
    { rating: '⭐⭐⭐⭐⭐', comment: '"Все было отлично. Никаких проблем с оформлением. Я нашел идеальный дом благодаря вашей помощи!"', photo: userOne, name: 'Анастасия', customer: 'Клиент' },
    { rating: '⭐⭐⭐⭐', comment: '"Отличный сервис! Все вопросы решались быстро и профессионально. Рекомендую всем!"', photo: userTwo, name: 'Евгений', customer: 'Клиент' },
    { rating: '⭐⭐⭐⭐⭐', comment: '"Я был приятно удивлён уровнем сервиса! Команда Realco помогла мне найти идеальный дом в кратчайшие сроки.', photo: userThre, name: 'Александр', customer: 'Работник' },


];

const Reviews = () => {
    const [comments, setComments] = useState(сomments);

    useEffect(() => {

        if (comments.length > 3) {
            const updatedComments = [...comments.slice(1)];
            setComments(updatedComments);
        }
    }, [comments]);

    return (
        <div className='reviews'>
            <div className='titleText'>Что говорят клиенты
                <div className='subtitleText' style={{ textAlign: 'center' }}>Мы ценим отзывы наших клиентов</div>
            </div>
            <div style={{ display: 'flex', gap: '40px' }}>
                {comments.map((comment, index) => (
                    <CommentsCard key={index} rating={comment.rating} comment={comment.comment} photo={comment.photo} name={comment.name} customer={comment.customer} />
                ))}
            </div>
        </div>
    );
}

export default Reviews;