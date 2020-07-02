import React from 'react';

import { Container, CenterRow, Col } from '../Layout';
import { SectionTitle } from '../../components';

import InfluencerContainer from './InfluencerContainer';

const InfluencerSection = ({text, info}) => {
    return (
        <Container section="influencer-container">
            <CenterRow>
                <Col sizes="col-12 col-md-6">
                    <SectionTitle 
                        color="title-blue" 
                        text={text}
                    />
                </Col>
                <Col sizes="col-12 col-md-9">
                    <InfluencerContainer info={info} />
                </Col>
            </CenterRow>
        </Container>
    )
};

export default InfluencerSection;