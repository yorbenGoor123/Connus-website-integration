import React, { useEffect } from 'react';
import InfluencerBox from './InfluencerBox';

const InfluencerBoxes = ({shown}) => {
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
                title="Nano-influencer" 
                followers="1K-5K followers" 
                container={0}
                ratings={{
                    "Reach": 1,
                    "Engagement": 4,
                    "Complexity": 1,
                    "Trust": 5,
                    "Cost": 1,
                }}  
            />

            <InfluencerBox 
                title="Micro-influencer" 
                followers="5K-20K followers" 
                container={1}
                ratings={{
                    "Reach": 2,
                    "Engagement": 4,
                    "Complexity": 2,
                    "Trust": 4,
                    "Cost": 2,
                }}  
            />

            <InfluencerBox 
                title="Meso-influencer" 
                followers="20K-100K followers" 
                container={2}
                ratings={{
                    "Reach": 3,
                    "Engagement": 3,
                    "Complexity": 3,
                    "Trust": 3,
                    "Cost": 3,
                }}  
            />

            <InfluencerBox 
                title="Macro-influencer" 
                followers="100K-1M followers" 
                container={3}
                ratings={{
                    "Reach": 4,
                    "Engagement": 2,
                    "Complexity": 4,
                    "Trust": 2,
                    "Cost": 4,
                }}  
            />

            <InfluencerBox 
                title="Mega-influencer" 
                followers="+1M followers" 
                container={4}
                ratings={{
                    "Reach": 5,
                    "Engagement": 1,
                    "Complexity": 5,
                    "Trust": 1,
                    "Cost": 5,
                }}  
            />        
        </div>
    )
};

export default InfluencerBoxes;