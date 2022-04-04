import React, { useEffect, useState } from 'react';
import './reviews.css'
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    return (
        <div>
            <h1>What Customer Say About Us</h1>
            <div className="client-reviews">
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;