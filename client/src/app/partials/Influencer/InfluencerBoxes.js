import React, { useEffect } from 'react';
import InfluencerBox from './InfluencerBox';

const InfluencerBoxes = ({handle, shown}) => {
    useEffect(() => {
        const boxes = document.getElementsByClassName('influencer-box');

        for (let i = 0; i < boxes.length; i++) {
            if (i === shown) {
                boxes[shown].style.display = 'block';
            } else {
                boxes[i].style.display = 'none';
            };
        };
    });

    return (
        <div className="influencer-boxes">
            <InfluencerBox 
                title="Mega-influencer" 
                followers="1-100 followers" 
                container={0}
                ratings={{
                    "Reach": 4,
                    "Engagement": 3,
                    "Complexity": 5,
                    "Trust": 3,
                    "Cost": 1,
                }}  
            />

            <InfluencerBox 
                title="Macro-influencer" 
                followers="1-100 followers" 
                container={1}
                ratings={{
                    "Reach": 5,
                    "Engagement": 1,
                    "Complexity": 4,
                    "Trust": 2,
                    "Cost": 5,
                }}  
            />

            <InfluencerBox 
                title="Meso-influencer" 
                followers="1-100 followers" 
                container={2}
                ratings={{
                    "Reach": 4,
                    "Engagement": 1,
                    "Complexity": 3,
                    "Trust": 5,
                    "Cost": 2,
                }}  
            />

            <InfluencerBox 
                title="Mirco-influencer" 
                followers="1-100 followers" 
                container={3}
                ratings={{
                    "Reach": 4,
                    "Engagement": 3,
                    "Complexity": 5,
                    "Trust": 3,
                    "Cost": 1,
                }}  
            />

            <InfluencerBox 
                title="Nano-influencer" 
                followers="1-100 followers" 
                container={4}
                ratings={{
                    "Reach": 5,
                    "Engagement": 1,
                    "Complexity": 3,
                    "Trust": 5,
                    "Cost": 4,
                }}  
            />        
        </div>
    )
};

export default InfluencerBoxes;