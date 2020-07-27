import React, { useEffect, useState } from 'react';

import { uiStore } from '../../../stores/UiStore';

import DropDownMenu from '../../partials/DropDownMenu/DropDownMenu';
import { Container, Row, Col } from '../Layout';
import { useAnimation } from '../../services';
import { FullLogo, HeaderChoice, HamburgerButton } from '../../components';
import { HamburgerMenu } from '../HamburgerMenu';
import style from './Header.module.css'

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

    const handleMouseEnter = () => {
        uiStore.viewDropdown();  
        console.log(uiStore.dropdown);
     
      }
    
      const handleMouseLeave = () => {
        uiStore.disableDropdown();
        console.log(uiStore.dropdown);
        
      
      }

    return (
        <div className="header">
            <Container>
                <Row>
                    <Col sizes="col-12 col-md-6 d-md-block d-flex justify-content-center">
                        <div className={style.menuNav__wrapper}>
                            <FullLogo />
                            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={style.navMenu}>
                            <ul className={style.menuItems}>
                                <li className={style.menuItem__dropDown}>functionalities</li>
                            </ul>
                            {uiStore.dropdown ? 
                                <div >
                                <DropDownMenu  />
                                </div>
                                : null}
                            </div>
                        </div>
                        
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