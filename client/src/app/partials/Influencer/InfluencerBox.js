import React from 'react';

import { CenterRow } from '../Layout';
import { InfluencerButton, SmallTitle, LightText } from '../../components';

const InfluencerBox = ({show}) => {
    return (
        <div className="influencer-box">
            <SmallTitle text="Nano-influencer" center={true} />
            <LightText text="1-5K followers" center={true} />
            <CenterRow>

            </CenterRow>
        </div>
    )
};

export default InfluencerBox;