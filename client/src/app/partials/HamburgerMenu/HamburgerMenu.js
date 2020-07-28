import React from 'react';
import { Container, Row, Col } from '../Layout';

import Logo from '../../assets/logo/logo_blue.png';
import Exit from '../../assets/icons/exit.png';
import { Switch, Text } from '../../components';
import { useToolbox } from '../../services';
import { NavLink } from 'react-router-dom';
import style from './HamburgerMenu.module.css';

const HamburgerMenu = ({click}) => {
    const {setPage, getCookie} = useToolbox();

    const switchAction = (status) => {
        setPage(status);
    }
    
    return (
        <div className="hamburger-menu">
            <Container>
                <div className="hamburger-menu__exit">
                    <img src={Exit} alt="exit-hamburger" onClick={() => click(false)} />
                </div>
                <Row>
                    <Col sizes="col-12 d-flex justify-content-center">
                        <img src={Logo} alt="logo-blue" className="hamburger-menu__logo" />
                    </Col>
                </Row>
                
                <div className="hamburger-menu__content">
                    <Row>
                        <Col sizes="col-12 d-flex justify-content-center">
                            <Text 
                                text="I'm a"
                                color="blue-font"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col sizes="col-12 d-flex justify-content-center">
                            <Switch
                                valueOne="brand"
                                valueTwo="content-creator"
                                onSwitch={switchAction}
                                defaultValue={(getCookie('preferedPage') === "brand" ? 0 : 1 )}
                            />
                        </Col>
                    </Row>

                    <NavLink className="hamburger-menu__link" to="/privacy-policy">More info about our privacy policy</NavLink>
                </div>
            </Container>
        </div>
    )
};

export default HamburgerMenu;