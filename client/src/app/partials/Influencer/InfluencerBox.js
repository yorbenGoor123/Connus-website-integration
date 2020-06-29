import React from 'react';

import { CenterRow, Col } from '../Layout';
import { SmallTitle, LightText } from '../../components';
import InfluencerRating from './InfluencerRating';

const InfluencerBox = ({title, followers, rating, index}) => {
    return (
        <div className="influencer-box">
            <SmallTitle text={title} center={true} />
            <LightText text={followers} center={true} />
            <CenterRow>
                <Col sizes="col-2 col-influencer">
                    <LightText text="Reach" center={true} />

                    <InfluencerRating rating={3} />
                </Col>

                <Col sizes="col-2 col-influencer">
                    <LightText text="Reach" center={true} />

                    <InfluencerRating rating={3} />
                </Col>

                <Col sizes="col-2 col-influencer">
                    <LightText text="Reach" center={true} />

                    <InfluencerRating rating={3} />
                </Col>

                <Col sizes="col-2 col-influencer">
                    <LightText text="Reach" center={true} />

                    <InfluencerRating rating={3} />
                </Col>

                <Col sizes="col-2 col-influencer">
                    <LightText text="Reach" center={true} />

                    <InfluencerRating rating={3} />
                </Col>
            </CenterRow>
        </div>
    )
};

export default InfluencerBox;