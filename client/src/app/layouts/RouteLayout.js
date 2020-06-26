import React from 'react';

import {
    Header, 
    Row,
    Col,
} from '../partials';
import { FullLogo, HeaderChoice } from '../components';

const RouteLayout = ({ children }) => {
    return (
        <div className="App">
            <Header>
                <Row>
                    <Col sizes="col-12 col-md-6 d-md-block d-flex justify-content-center">
                        <FullLogo />
                    </Col>

                    <Col sizes="col-md-6 d-md-flex d-none align-items-center justify-content-end">
                        <HeaderChoice />
                    </Col>
                </Row>
            </Header>

            { children }

            {/** Footer here */}
        </div>
    )
};

export default RouteLayout;