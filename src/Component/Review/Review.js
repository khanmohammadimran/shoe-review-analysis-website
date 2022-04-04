import React from 'react';
import './Review.css'

const Review = (props) => {
    console.log(props.review)
    const { name, ratings, review } = props.review;

    return (
        <div>
            <h2>{name} </h2>
            <h4>{review} </h4>
            <h6>{ratings} </h6>
        </div>
    );
};

export default Review;