import React, { useEffect } from 'react';

const InfluencerRating = ({rating, index}) => {
    useEffect(() => {
        const ratings = document.getElementsByClassName('influencer-rating__point');
        console.log(rating);

        for (let i = 0; i < rating; i++) {
            ratings[i].classList.add('valid-point');
        };
    });

    return (
        <div className="influencer-rating">
            <div className="influencer-rating__point"></div>
            <div className="influencer-rating__point"></div>
            <div className="influencer-rating__point"></div>
            <div className="influencer-rating__point"></div>
            <div className="influencer-rating__point"></div>
        </div>
    )
};

export default InfluencerRating;