import React, { useEffect } from 'react';
import { InfluencerButton } from '../../components';

const InfluencerButtons = ({handle, shown}) => {
    useEffect(() => {
        const buttons = document.getElementsByClassName('influencer-button');

        for (let i = 0; i < buttons.length; i++) {
            if (i === shown) {
                buttons[shown].style.opacity = '1';
            } else {
                buttons[i].style.opacity = '0.5';
            };
        };
    });

    return (
        <div className="influencer-buttons">
            <InfluencerButton text="Nano" toggle={() => handle(0)} />
            <InfluencerButton text="Micro" toggle={() => handle(1)} />
            <InfluencerButton text="Meso" toggle={() => handle(2)} />
            <InfluencerButton text="Macro" toggle={() => handle(3)} />
            <InfluencerButton text="Mega" toggle={() => handle(4)} />
        </div>
    )
};

export default InfluencerButtons;