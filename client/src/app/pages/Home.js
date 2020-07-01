import React from 'react';
import Parser from 'html-react-parser';

import { SectionTwo, Head, PageContainer, Container, Row, Col, DownloadButtons, CenterRow, Partner, SectionEnd, InfluencerSection, SectionOne } from '../partials';
import { HeadTitle, Text, DownloadButton, EmptyMockup, Logo, SectionTitle, SmallTitle } from '../components';

import { useLanguage } from '../services';

import IosDownload from '../assets/icons/download-ios.png';
import AndroidDownload from '../assets/icons/download-android.png';

const Home = () => {
    const { getText } = useLanguage(); 
    const text = getText("brand");

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


            <SectionOne page="influencer" />
            
            <SectionTwo page="influencer" />

            <Container section="influencer-container">
                <CenterRow>
                    <Col sizes="col-12 col-md-6">
                        <SectionTitle 
                            color="blue" 
                            text={Parser(text["section_three_title"])}
                        />
                    </Col>
                    <Col sizes="col-12 col-md-9">
                        <InfluencerSection />
                    </Col>
                </CenterRow>
            </Container>

            <Partner page={"brand"}>
                <SmallTitle 
                    text={Parser(text["section_six_proudPartner"])}
                    color="title-white"
                />
            </Partner>

            <Container>
                <CenterRow>
                    <Col sizes="col-12 col-lg-9">
                        <SectionEnd title={Parser(text["section_six_download_title"])} />
                    </Col>
                </CenterRow>
            </Container>
        </PageContainer>
    )
};

export default Home; 