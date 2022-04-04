import React, { useEffect, useState } from 'react';
// import reviewCart from '../ReviewCart/ReviewCart';
import ReviewCart from '../ReviewCart/ReviewCart'

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    return (
        <div>
            {
                reviews.map(review => <ReviewCart
                    key={review.id}>
                    review={review}
                </ReviewCart>)
            }
        </div>
    );
};

export default Reviews;