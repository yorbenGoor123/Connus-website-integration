import React, { useState } from 'react';
import { InfluencerButtons } from '../Buttons';
import InfluencerBoxes from './InfluencerBoxes';

const InfluencerSection = () => {
    const [ shownIndex, setShowIndex ] = useState(2);

    const toggleInfluencer = (index) => {
        setShowIndex(index);
    };

    const showInfluencer = () => {
        
    };

    return (
        <div className="influencer-section">
            <InfluencerButtons 
                handle={toggleInfluencer}
                shown={shownIndex}  
            />

            <InfluencerBoxes
                handle={showInfluencer}
                shown={shownIndex}
            />
        </div>
    )
};

export default InfluencerSection;