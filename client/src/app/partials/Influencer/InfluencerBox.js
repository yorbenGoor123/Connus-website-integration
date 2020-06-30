import React from 'react';

import { CenterRow, Col } from '../Layout';
import { SmallTitle, LightText } from '../../components';
import InfluencerRating from './InfluencerRating';

const InfluencerBox = ({title, followers, container, ratings}) => {
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
            
                                <InfluencerRating rating={ratings[rate]} index={index} container={container} />
                            </Col>
                        )
                    })
                }
            </CenterRow>
        </div>
    )
};

export default InfluencerBox;