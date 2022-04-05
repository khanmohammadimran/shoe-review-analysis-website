import React from 'react';
import './Review.css'

const Review = (props) => {
    console.log(props.review)
    const { name, ratings, review } = props.review;

    return (
        <div className='review-cart'>

            <blockquote>"{review}"</blockquote>
            <hr />
            <h3>Name: {name} </h3>
            <p>Ratings: <strong>{ratings}</strong></p>
        </div>
    );
};

export default Review;