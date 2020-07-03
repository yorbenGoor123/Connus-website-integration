import React from 'react';

import { Container, Col, CenterRow } from '../Layout';
import { HeadTitle } from '../../components';

const ThinHead = ({ title }) => {
    return (
        <div className="thin-head">
            <Container>
                <CenterRow>
                    <Col sizes="col-12 col-md-8 d-flex justify-content-center">
                        <HeadTitle
                            text={title}
                        />
                    </Col>
                </CenterRow>
            </Container>        
        </div>
    )
};

export default ThinHead;