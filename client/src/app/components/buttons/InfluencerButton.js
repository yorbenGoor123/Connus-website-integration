import React from 'react';

const InfluencerButton = ({text, toggle}) => {
    return (
        <div className="influencer-button" onClick={toggle}>
            <p>{ text }</p>
        </div>
    )
};

export default InfluencerButton;