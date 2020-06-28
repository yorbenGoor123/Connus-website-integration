import React from 'react';
import { InfluencerButton } from '../../components';

const InfluencerButtons = ({handle}) => {
    return (
        <div className="influencer-buttons">
            <InfluencerButton text="Mega" />
            <InfluencerButton text="Macro" />
            <InfluencerButton text="Meso" />
            <InfluencerButton text="Micro" />
            <InfluencerButton text="Nano" />
        </div>
    )
};

export default InfluencerButtons;