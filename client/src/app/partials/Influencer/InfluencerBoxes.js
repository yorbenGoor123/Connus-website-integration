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
            <InfluencerBox title="Mega-influencer" followers="1-100 followers" r />
            <InfluencerBox title="Macro-influencer" followers="100-1K followers" />
            <InfluencerBox title="Meso-influencer" followers="1K-2K followers" />
            <InfluencerBox title="Micro-influencer" followers="2K-3K followers" />
            <InfluencerBox title="Nano-influencer" followers="3K-5K followers" />
        </div>
    )
};

export default InfluencerBoxes;