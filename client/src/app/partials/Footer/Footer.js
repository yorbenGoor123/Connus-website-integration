import React from 'react';
import Parser from 'html-react-parser';

import { useLanguage, useToolbox } from '../../services';

import { Container, Row, Col, CenterRow } from '../Layout';
import { LanguageButtons, SocialButtons } from '../Buttons';
import { LightButton, SocialButton } from '../../components';
import { NewsletterForm } from '../Newsletter';

import Facebook from '../../assets/icons/facebook.png';
import Instagram from '../../assets/icons/instagram.png';
import Twitter from '../../assets/icons/twitter.png';
import Linkedin from '../../assets/icons/linkedin.png';

const Footer = ({target}) => {
    const { getCookie } = useToolbox();
    const { getText } = useLanguage(); 

    const preferedPage = getCookie('preferedPage');
    const text = getText(preferedPage);

    return (
        <div className="footer">
            <Container>
                <CenterRow>
                    <Col sizes="col-12 col-md-6">
                        <NewsletterForm 
                            target={preferedPage}
                            title={Parser(text["newsletter_title"])}
                            text={Parser(text["newsletter_info"])}
                            button={Parser(text["newsletter_button"])}
                            subscribed={Parser(text["newsletter_subscribed"])}
                        />
                    </Col>
                </CenterRow>
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
            </Container>
        </div>
    )
};

export default Footer;