import React from 'react';

import { CenterRow, Col } from '../Layout';
import { SmallTitle, LightText } from '../../components';
import InfluencerRating from './InfluencerRating';

const InfluencerBox = ({title, followers, rating, start, end}) => {
    const ratings = {
        "Reach": 5,
        "Engagement": 3,
        "Complexity": 5,
        "Trust": 3,
        "Cost": 1,
    };

    return (
        <div className="influencer-box">
            <SmallTitle text={title} center={true} />
            <LightText text={followers} center={true} />
            <CenterRow>
                {
                    Object.keys(ratings).map((rate, index) => {
                        return (
                            <Col sizes="col-lg-2 col-4 col-influencer" key={index}>
                                <LightText text={rate} center={true} />
            
                                <InfluencerRating rating={ratings[rate]} index={index} />
                            </Col>
                        )
                    })
                }
            </CenterRow>
        </div>
    )
};

export default InfluencerBox;