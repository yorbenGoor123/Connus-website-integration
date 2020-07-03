import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, CenterRow, Col } from '../Layout';

const NotFoundSection = ({text, button}) => {
    return (
        <Container>
            <CenterRow>
                <Col sizes="col-12 col-md-8">
                    <div className="notfound-section">
                        <p className="notfound-section__text">
                            { text }
                        </p>

                        <div className="notfound-section__button">
                            <NavLink to="/">
                                <p>
                                    { button }
                                </p>
                            </NavLink>
                        </div>
                    </div>
                </Col>
            </CenterRow>
        </Container>
    )
};

export default NotFoundSection;