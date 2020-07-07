import React, { useEffect, useState } from 'react';

import { Container, Row, Col } from '../Layout';
import { useAnimation } from '../../services';
import { FullLogo, HeaderChoice, HamburgerButton } from '../../components';
import { HamburgerMenu } from '../HamburgerMenu';

const Header = () => {
    const { startHomeAnimation } = useAnimation();
    const [ hamburger, setHamburger ] = useState();
    
    useEffect(() => {
        startHomeAnimation();

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

    const toggleHamburger = (state) => {
        const showButton = document.getElementsByClassName('hamburger-button')[0];
        showButton.style.opacity = "0";

        setTimeout(() => {
            setHamburger(state);
        }, 500);
    };

    const hideHamburger = (state) => {        
        setHamburger(state);
        window.location.reload();
    };

    return (
        <div className="header">
            <Container>
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
            </Container>
        </div>
    )
};

export default Header;