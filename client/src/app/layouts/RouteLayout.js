import React, { useState, useEffect } from 'react';

import {
    Header, 
    Row,
    Col,
    Footer,
    LanguageButtons,
    SocialButtons,
    HamburgerMenu,
} from '../partials';

import { 
    FullLogo, 
    HeaderChoice,
    LightButton,
    SocialButton,
    HamburgerButton,
} from '../components';

import Facebook from '../assets/icons/facebook.png';
import Instagram from '../assets/icons/instagram.png';
import Twitter from '../assets/icons/twitter.png';
import Linkedin from '../assets/icons/linkedin.png';

const RouteLayout = ({ children }) => {
    const [ hamburger, setHamburger ] = useState();

    const toggleHamburger = (state) => {
        const showButton = document.getElementsByClassName('hamburger-button')[0];
        showButton.style.opacity = "0";

        setTimeout(() => {
            setHamburger(state);
        }, 500);
    };

    const hideHamburger = (state) => {
        const menu = document.getElementsByClassName('hamburger-menu')[0];
        const hideButton = document.getElementsByClassName('hamburger-menu__exit')[0];
        const logo = document.getElementsByClassName('hamburger-menu__logo')[0];
        const content = document.getElementsByClassName('hamburger-menu__content')[0];
        const link = document.getElementsByClassName('hamburger-menu__link')[0];

        hideButton.style.opacity = "0";

        setTimeout(() => {
            logo.style.opacity = "0";
            content.style.opacity = "0";
            link.style.opacity = "0";

            setTimeout(() => {
                menu.style.top = "-100vh";

                setTimeout(() => {
                    menu.style.opacity = "0";

                    setTimeout(() => {
                        setHamburger(state);

                        const showButton = document.getElementsByClassName('hamburger-button')[0];
                        showButton.style.opacity = "1";
                    }, 500);
                }, 500);
            }, 500);
        }, 500);
    };

    useEffect(() => {
        const menu = document.getElementsByClassName('hamburger-menu')[0];
        const logo = document.getElementsByClassName('hamburger-menu__logo')[0];
        const content = document.getElementsByClassName('hamburger-menu__content')[0];
        const link = document.getElementsByClassName('hamburger-menu__link')[0];

        if (hamburger === true) {
            menu.style.top = "0";
            
            setTimeout(() => {
                menu.style.opacity = "1";

                setTimeout(() => {
                    logo.style.opacity = "1";

                    setTimeout(() => {
                        content.style.opacity = "1";
                    }, 500);

                    setTimeout(() => {
                        link.style.opacity = "1";
                    }, 2000);
                }, 1500);
            }, 100);
        }; 
    });

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

                    {
                        hamburger ? (
                            <HamburgerMenu
                                click={hideHamburger}
                            />
                        ) : (
                            <HamburgerButton
                                click={toggleHamburger}
                            />
                        )
                    }
                </Row>
            </Header>

            { children }

            <Footer>
                <Row>
                    <Col sizes="col-12 col-md-6">
                        <LanguageButtons />
                    </Col>

                    <Col sizes="col-12 col-md-4 d-md-flex justify-content-md-end">
                        <LightButton text="Privacy Policy" pageRef="/privacy-policy"/>
                    </Col>

                    <Col sizes="col-12 col-md-2 d-md-flex align-items-center">
                        <SocialButtons>
                            <SocialButton img={Linkedin} pageRef={"https://www.linkedin.com/company/connus-be/?originalSubdomain=be"} />
                            <SocialButton img={Facebook} pageRef={"https://www.facebook.com/pages/category/Computer-Company/Connus-104463651083787/"} />
                            <SocialButton img={Instagram} pageRef={"https://www.instagram.com/connus_be/"}/>
                            <SocialButton img={Twitter} pageRef={"/"} />
                        </SocialButtons>
                    </Col>
                </Row>
            </Footer>
        </div>
    )
};

export default RouteLayout;