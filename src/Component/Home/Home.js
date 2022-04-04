import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (
        <div>
            <nav>
                <Link to="/home">HOME</Link >
                <Link to="/reviews">REVIEWS</Link >
                <Link to="/dashboard">DASHBOARD</Link >
                <Link to="/blogs">BLOGS</Link >
                <Link to="/about">ABOUT</Link >
            </nav>
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
            <div>
                <h1>Customer Review</h1>
                <Link to="/reviews">
                    <button className='primary-btn'>See All Reviews</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;