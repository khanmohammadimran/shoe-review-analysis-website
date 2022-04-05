import './reviews.css'
import Review from '../Review/Review';
import UseCustomHook from '../../customHooks/UseCustomHook';

const Reviews = () => {
    const [reviews] = UseCustomHook();

    return (
        <div>
            <h2 className='customer-review-title'>What Customer Say About Us</h2>
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