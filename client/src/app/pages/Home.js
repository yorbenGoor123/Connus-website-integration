import React from 'react';
import Parser from 'html-react-parser';

import { SectionTwo, Head, PageContainer, Container, Row, Col, DownloadButtons } from '../partials';
import { HeadTitle, Text, DownloadButton } from '../components';

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
                                text={Parser(text["header_title"])}
                            />

                            <Text 
                                color="white-font" 
                                text={Parser(text["header_text"])}
                            />
                        </Col>

                        <Col sizes="col-12 col-md-8 justify-content-md-center">
                            <DownloadButtons>
                                <DownloadButton size="big" img={IosDownload} />
                                <DownloadButton size="big" img={AndroidDownload} />
                            </DownloadButtons>
                        </Col>

                        <Col>
                            
                        </Col>
                    </Row>
                </Container>
            </Head>

            <SectionTwo page="brand" />
        </PageContainer>
    )
};

export default Home; 