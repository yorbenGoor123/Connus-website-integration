import React from 'react';
import { Container, Row, Col } from '../Layout';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Logo from '../../assets/logo/logo_blue.png';
import Exit from '../../assets/icons/exit.png';
import { Switch, Text } from '../../components';
import { useToolbox } from '../../services';
import { NavLink, Link } from 'react-router-dom';
import style from './HamburgerMenu.module.css';
import { useStore } from '../../../hooks';
import Dropdown from '../../components/DropDown/Dropdown';


const HamburgerMenu = ({click}) => {
    const {setPage, getCookie} = useToolbox();

    const switchAction = (status) => {
        setPage(status);
    }
        

    const {functionalityStore} = useStore();

    let functionalityArray = [];
    for (let i = 1; i<= functionalityStore.functionalities.length; i++){
      let functionality = functionalityStore.functionalities.find(functionality => functionality.sorted === i);
      functionalityArray.push(functionality);
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

                <Row>
                    <Col sizes="col-12 d-flex justify-content-center">
                    <div className={style.accordion}>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                            <Typography className={style.heading}>Functionalities</Typography>
                                </AccordionSummary>
                            <AccordionDetails>
                        <div className={style.dropDownMenuHamburger}>
                            {functionalityArray.map(functionality => (
                                <Link key={functionality.id} to={`/functionality/${functionality.id}`} style={{ textDecoration: 'none' }}>
                                    <Dropdown key={functionality.id} icon={functionality.icon} title={functionality.title} description={functionality.description} /> 
                                </Link>
                                
                                ))}
                        </div>
                            </AccordionDetails>
                </Accordion>
      </div>
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

                    <NavLink className={style.hamburger__menu__link} to="/privacy-policy">More info about our privacy policy</NavLink>
                </div>
            </Container>
        </div>
    )
};

export default HamburgerMenu;