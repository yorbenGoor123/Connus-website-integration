import React, { useEffect } from 'react';

const InfluencerRating = ({rating, index, container}) => {
    useEffect(() => {
        const boxes = document.getElementsByClassName('influencer-box')[container];
        const ratings = boxes.children[2].children[index].children[1].children;
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