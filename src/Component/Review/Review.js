import React from 'react';
import './Review.css'

const Review = (props) => {
    console.log(props.review)
    const { name, ratings, review } = props.review;

    return (
        <div className='review-cart'>

            <h3>Name: {name} </h3>
            <hr />
            <p>{review} </p>
            <hr />
            <p>Ratings: <strong>{ratings}</strong></p>
        </div>
    );
};

export default Review;