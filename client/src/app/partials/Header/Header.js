import React, { useEffect, useState } from 'react';

import { uiStore } from '../../../stores/UiStore';

import DropDownMenu from '../../partials/DropDownMenu/DropDownMenu';
import { Container, Row, Col } from '../Layout';
import { useAnimation } from '../../services';
import { FullLogo, HeaderChoice, HamburgerButton } from '../../components';
import { HamburgerMenu } from '../HamburgerMenu';
import style from './Header.module.css'
import { useObserver } from 'mobx-react-lite';
import { rootStore } from '../../../stores';

import {useToolbox } from '../../services/toolbox.service';
import { Link, NavLink } from 'react-router-dom';
import ROUTES from '../../../consts/routes';

const Header = () => {

    const { startHomeAnimation } = useAnimation();
    const [ hamburger, setHamburger ] = useState();
    console.log(uiStore.dropdown)

    const { getCookie } = useToolbox();
    

    
    
    useEffect(() => {
        startHomeAnimation();

        const menu = document.getElementsByClassName('hamburger-menu')[0];
        const logo = document.getElementsByClassName('hamburger-menu__logo')[0];
        const content = document.getElementsByClassName('hamburger-menu__content')[0];
      

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
        window.location.reload()
    
    };

    const handleMouseEnter = () => {
        uiStore.viewDropdown(); 

        
     
      }
    
      const handleMouseLeave = () => {
        uiStore.disableDropdown();    
      }

      const preferedPage = getCookie('preferedPage');
      if (preferedPage === 'content-creator' ) {
          const result = rootStore.functionalityStore.filterFunctionalities("content-creator"); 
          rootStore.functionalityStore.setFiltered(result);
      };

      if (preferedPage === 'brand' ) {
          const result = rootStore.functionalityStore.filterFunctionalities("company"); 
          rootStore.functionalityStore.setFiltered(result);
          
      };



    return useObserver(() =>(
        <div className="header">
            <Container>
                <Row>
                    <Col sizes="col-12 col-md-6 d-md-block d-flex justify-content-center">
                        <div className={style.menuNav__wrapper}>
                            <FullLogo />
                            {/*<NavLink className={style.NavItemHowDoes} style={{textDecoration: "none", color: "white"}} to={ROUTES.functionalities}>How it works</NavLink>*/}
                            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={style.navMenu}>
                            <ul className={style.menuItems}>
                                
                                <li className={style.menuItem__dropDown}>functionalities</li>
                                
                            </ul>
                            
                            {uiStore.dropdown ? 
                                <div  className={style.header__dropDown}>
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
    ))
};

export default Header;