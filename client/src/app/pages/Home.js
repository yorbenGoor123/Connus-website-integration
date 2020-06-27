import React from 'react';
import Parser from 'html-react-parser';

import { SectionTwo, Head, PageContainer, Container, Row, Col, DownloadButtons } from '../partials';
import { HeadTitle, Text, DownloadButton, EmptyMockup, Logo } from '../components';

import { useLanguage } from '../services';

import IosDownload from '../assets/icons/download-ios.png';
import AndroidDownload from '../assets/icons/download-android.png';

const Home = () => {
    /** 
    * Maybe good when using these services on upper level
    * Makes it useable everywhere...
    */
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

                        <Col sizes="col-md-4">
                            <EmptyMockup>
                                <Logo />
                            </EmptyMockup>
                        </Col>
                    </Row>
                </Container>
            </Head>

            {/**
             * Include first section here!
             */}

            <SectionTwo page="brand" />

            {/**
             * Other...
             */}
        </PageContainer>
    )
};

export default Home; 