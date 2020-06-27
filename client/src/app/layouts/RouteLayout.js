import React from 'react';

import {
    Header, 
    Row,
    Col,
    Footer,
    LanguageButtons,
    SocialButtons,
} from '../partials';

import { 
    FullLogo, 
    HeaderChoice,
    LanguageButton,
    LightButton,
    SocialButton,
} from '../components';

import Facebook from '../assets/icons/facebook.png';
import Instagram from '../assets/icons/instagram.png';
import Twitter from '../assets/icons/twitter.png';
import Linkedin from '../assets/icons/linkedin.png';

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

                    <Col sizes="col-12 col-md-2 d-md-flex align-items-center">
                        <SocialButtons>
                            <SocialButton img={Linkedin} />
                            <SocialButton img={Facebook} />
                            <SocialButton img={Instagram} />
                            <SocialButton img={Twitter} />
                        </SocialButtons>
                    </Col>
                </Row>
            </Footer>
        </div>
    )
};

export default RouteLayout;