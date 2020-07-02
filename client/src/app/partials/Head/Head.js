import React from 'react';

import { Container, Row, Col } from '../Layout';
import { HeadTitle, DownloadButton, EmptyMockup, Logo, Text } from '../../components';
import { DownloadButtons } from '../Buttons';

import IosDownload from '../../assets/icons/download-ios.png';
import AndroidDownload from '../../assets/icons/download-android.png';

const Head = ({ title, text }) => {
    return (
        <div className="head">
            <Container>
                <Row>
                    <Col sizes="col-12 col-md-8">
                        <HeadTitle
                            text={title}
                        />

                            <Text 
                                color="white-font" 
                                text={text}
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
            </div>
    )
};

export default Head;