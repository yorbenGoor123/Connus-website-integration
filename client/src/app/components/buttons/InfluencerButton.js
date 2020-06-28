import React from 'react';

const InfluencerButton = ({used, text}) => {
    return (
        used ? (
            <div className="influencer-button">
                <p>{ text }</p>
            </div>
        ) : (
            <div className="influencer-button">
                <p>{ text }</p>
            </div>
        )
    )
};

export default InfluencerButton;