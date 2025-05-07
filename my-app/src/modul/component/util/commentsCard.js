import React from 'react';
import '../../style/style.css';

const commentsCard = ({ rating, comment, photo, name, customer }) => {
    return (
        <div className="comments">
            <div className='ratingCommentReviewCard'>
                <div>{rating}</div>
                <div className='commentCardReview'>{comment}</div>
            </div>
            <div className='clientReviews'>
                <img src={photo} alt={photo} style={{ width: '50px' }} />
                <div>
                    <div className='nameCommentReview'>{name}</div>
                    <div className='customerCommentReview'>{customer}</div>
                </div>
            </div>
        </div>
    );
};

export default commentsCard;