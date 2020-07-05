import React from 'react';
import Parser from 'html-react-parser';

import { SectionTwo, Head, PageContainer, InfluencerSection, Partner, SectionEnd } from '../partials';

import { useLanguage, useToolbox } from '../services';

import SectionOne from '../partials/SectionOne/SectionOne';
import AdvertisementSection from '../partials/AdvertisementSection/AdvertisementSection';
import EngagementRate from '../partials/EngagementRate/EngagementRate';
import Popup from '../components/misc/Popup'

const HomeBrand = () => {
    const { getText } = useLanguage(); 
    const { getCookie } = useToolbox();

    const text = getText("brand");

    const redirectToCorrectHomePage = () => {
        const preferedPage = getCookie('preferedPage');
        if (preferedPage === 'influencer' ) {
            window.location.replace("/home-influencer");
        };
    };


    redirectToCorrectHomePage();

    return (
        <PageContainer>
            {
                (getCookie("preferedPage"))
                ? null
                : <Popup />
            }
            <Head 
                title={Parser(text["header_one_title"])}
                text={Parser(text["header_one_text"])}
            />

            <SectionOne 
                page="brand" 
            />
            
            <SectionTwo 
                page="brand" 
            />          

            <InfluencerSection 
                text={Parser(text["section_three_title"])}
                info={{
                    "nano": Parser(text["section_three_nano"]),
                    "micro": Parser(text["section_three_micro"]),
                    "meso": Parser(text["section_three_meso"]),
                    "macro": Parser(text["section_three_macro"]),
                    "mega": Parser(text["section_three_mega"]),
                }}
            />

            <EngagementRate />

            <AdvertisementSection 
                title={Parser(text["section_five_title"])}
                text={Parser(text["section_five_content"])}
            />

            <Partner 
                page={"brand"} 
                text={Parser(text["section_six_proudPartner"])}
            />

            <SectionEnd 
                title={Parser(text["section_six_download_title"])} 
            />
        </PageContainer>
    )
};

export default HomeBrand;