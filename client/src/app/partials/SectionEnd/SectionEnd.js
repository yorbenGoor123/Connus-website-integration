import React from 'react';

import { SmallTitle, DownloadButton } from '../../components';

import UserMock from '../../assets/mock/user-phone.png';
import IosDownload from '../../assets/icons/download-ios.png';
import AndroidDownload from '../../assets/icons/download-android.png';

import { DownloadButtons } from '../Buttons';

const SectionEnd = ({title}) => {
    return (
        <div className="section-end">
            <img src={UserMock} alt="user-mock" className="section-end__mock d-lg-flex d-none" />

            <div className="section-end__content">
                <SmallTitle
                    text={title}
                    color="title-blue"
                />

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
            </div>
        </div>
    )
};

export default SectionEnd;