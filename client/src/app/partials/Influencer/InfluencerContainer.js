import React, { useState } from 'react';
import { InfluencerButtons } from '../Buttons';

import InfluencerBoxes from './InfluencerBoxes';
import InfluencerInfos from './InfluencerInfos';

const InfluencerContainer = ({info}) => {
    const [ shownIndex, setShowIndex ] = useState(2);

    const toggleInfluencer = (index) => {
        setShowIndex(index);
    };

    return (
        <div className="influencer-section">
            <InfluencerButtons 
                handle={toggleInfluencer}
                shown={shownIndex}  
            />

            <InfluencerBoxes
                shown={shownIndex}
            />

            <InfluencerInfos
                shown={shownIndex}
                info={info}
            />
        </div>
    )
};

export default InfluencerContainer;