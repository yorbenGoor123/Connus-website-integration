import React from 'react';
import { InfluencerButtons } from '../Buttons';
import InfluencerBox from './InfluencerBox';

const InfluencerSection = () => {
    const toggleInfluencer = () => {

    };

    const showInfluencer = () => {

    };

    return (
        <div className="influencer-section">
            <InfluencerButtons 
                handle={toggleInfluencer}  
            />

            <InfluencerBox 
                show={showInfluencer}
            />
        </div>
    )
};

export default InfluencerSection;