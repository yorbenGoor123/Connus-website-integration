import React from 'react';

import { DownloadButton, SectionTitle } from '../../components';

import UserMock from '../../assets/mock/user-phone.png';
import IosDownload from '../../assets/icons/download-ios.png';
import AndroidDownload from '../../assets/icons/download-android.png';

import { DownloadButtons } from '../Buttons';
import { Container, CenterRow, Col } from '../Layout';

const SectionEnd = ({title}) => {
    return (
        <Container>
            <CenterRow>
                <Col sizes="col-12 col-lg-12">
                    <div className="section-end">
                        <img src={UserMock} alt="user-mock" className="section-end__mock d-lg-flex d-none" />

                        <div className="section-end__content">
                            <SectionTitle
                                text={title}
                                color="title-blue"
                            />

                            <DownloadButtons>
                                <DownloadButton 
                                    size="big" 
                                    img={IosDownload} 
                                    pageRef={"https://apps.apple.com/gb/app/connus/id1490442304?l=en"} 
                                />

                                <DownloadButton 
                                    size="big" 
                                    img={AndroidDownload} 
                                    pageRef={"https://play.google.com/store/apps/details?id=com.nebulae.connus"}
                                />
                            </DownloadButtons>
                        </div>
                    </div>
                </Col>
            </CenterRow>
        </Container>
    )
};

export default SectionEnd;