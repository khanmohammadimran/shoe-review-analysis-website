import React from 'react';
import { useNavigate } from 'react-router-dom';
import UseCustomHook from '../../customHooks/UseCustomHook';
import Review from '../Review/Review';
import './Home.css'

const Home = () => {
    const navigate = useNavigate();
    const [reviews] = UseCustomHook();
    return (
        <div>

            <div className="hero-section">
                <div className="hero-text">
                    <h1>Keep it Classic</h1>
                    <h3>Checkout All the Deal</h3>
                    <p>Combination synthetic and leather upperPadded collar and tongue with fabric lining for added comfortLace-up closure for a custom fitComfort Footbed by Ortholite®Supportive rubber midsole and durable outsoleReebok® branding details</p>
                    <button className='primary-btn'>Shop Now</button>
                </div>
                <div className="hero-img">
                    <img src="https://www.shoecarnival.com/dw/image/v2/BBSZ_PRD/on/demandware.static/-/Sites-scvl-master-catalog/default/dw85031d63/121911_257090_1.jpg?sw=700&sh=593&sm=fit" alt="" />
                </div>
            </div>
            <div className='customer-review'>
                <div className='secondary-review-title'>
                    <h2>Customer Review</h2>
                </div>
                <div className='few-reviews'>
                    {
                        reviews.slice(0, 3).map(review => <Review
                            key={review.id}
                            review={review}></Review>)
                    }
                </div>
                <button className='primary-btn secondary-btn' onClick={() => navigate('/reviews')}>See All Reviews</button>
            </div>
        </div>
    );
};

export default Home;