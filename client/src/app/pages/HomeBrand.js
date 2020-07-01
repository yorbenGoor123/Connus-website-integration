import React from 'react';
import Parser from 'html-react-parser';

import { SectionTwo, Head, PageContainer, Container, Row, Col, DownloadButtons, CenterRow } from '../partials';
import { HeadTitle, Text, DownloadButton, EmptyMockup, Logo, SectionTitle } from '../components';

import { useLanguage, useToolbox } from '../services';

import IosDownload from '../assets/icons/download-ios.png';
import AndroidDownload from '../assets/icons/download-android.png';
import InfluencerSection from '../partials/Influencer/InfluencerSection';
import SectionOne from '../partials/SectionOne/SectionOne';

const HomeBrand = () => {
    const { getText } = useLanguage(); 
    const { getCookie } = useToolbox();

    const text = getText("brand");

    const redirectToCorrectHomePage = () => {
        const preferedPage = getCookie('preferedPage');
        if (preferedPage === 'influencer' ) {
            window.location.replace("/home-influencer");
        }
    }

    redirectToCorrectHomePage();

    return (
        <PageContainer>


            <Head>
                <Container>
                    <Row>
                        <Col sizes="col-12 col-md-8">
                            <HeadTitle
                                text={Parser(text["header_one_title"])}
                            />

                            <Text 
                                color="white-font" 
                                text={Parser(text["header_one_text"])}
                            />
                        </Col>

                        <Col sizes="col-12 col-md-8 justify-content-md-center">
                            <DownloadButtons>
                                <DownloadButton 
                                    size="big" 
                                    img={IosDownload} 
                                />

                                <DownloadButton 
                                    size="big" 
                                    img={AndroidDownload} 
                                />
                            </DownloadButtons>
                        </Col>

                        <Col sizes="col-md-4 col-12">
                            <EmptyMockup>
                                <Logo />
                            </EmptyMockup>
                        </Col>
                    </Row>
                </Container>
            </Head>


            <SectionOne/>
            
            <SectionTwo page="brand" />

            <Container>
                <CenterRow>
                    <Col sizes="col-12 col-md-6">
                        <SectionTitle 
                            color="blue-font" 
                            text={Parser(text["section_three_title"])}
                        />
                    </Col>
                    <Col sizes="col-12 col-md-9">
                        <InfluencerSection />
                    </Col>
                </CenterRow>
            </Container>
        </PageContainer>
    )
};

export default HomeBrand; 