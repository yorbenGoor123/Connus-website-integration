import React from 'react';

import {
    Header, 
    Row,
    Col,
    Footer,
    LanguageButtons,
} from '../partials';

import { 
    FullLogo, 
    HeaderChoice,
    LanguageButton,
    LightButton,
} from '../components';

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

            <Footer>
                <Row>
                    <Col sizes="col-12 col-md-6">
                        <LanguageButtons>
                            <LanguageButton text="Nederlands" />
                            <LanguageButton text="English" used={true} />
                        </LanguageButtons>
                    </Col>

                    <Col sizes="col-12 col-md-4 d-md-flex justify-content-md-end">
                        <LightButton text="Privacy Policy"/>
                    </Col>
                </Row>
            </Footer>
        </div>
    )
};

export default RouteLayout;