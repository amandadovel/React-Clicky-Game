import React from 'react';
import './Banner.css';

const Banner = () => (
    <div className="banner d-flex flex-column align-items-left py-2 px-4 my-5">
        <p className="banner-text">Click on an image to earn points,</p> 
            <p>but don't click on the same image more than once!</p>
    </div>
);

export default Banner;