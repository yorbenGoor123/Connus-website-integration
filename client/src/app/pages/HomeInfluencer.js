import React, { useEffect } from 'react';
import Parser from 'html-react-parser';

import { SectionTwo, Head, PageContainer, Partner, SectionEnd, SectionOne, InfluencerSection } from '../partials';

import { useLanguage, useToolbox } from '../services';

import AdvertisementSection from '../partials/AdvertisementSection/AdvertisementSection';
import Popup from '../components/misc/Popup'
import TilesSection from '../partials/TilesSection/TilesSection';

const HomeInfluencer = () => {
    const { getText } = useLanguage(); 
    const { getCookie } = useToolbox();

    const text = getText("influencer");

    const redirectToCorrectHomePage = () => {
        const preferedPage = getCookie('preferedPage');
        if (!preferedPage) {
            // setDefaultCookie();
        };

        if (preferedPage === 'brand' ) {
            window.location.replace("/home-brand");
        };
    }

    useEffect(() => {
        document.title = "Connus | Influencer"
    });

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
                page="influencer" 
            />

            <div className="d-md-none d-block">
                <TilesSection />
            </div>
            
            <SectionTwo 
                page="influencer" 
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

            <div className="d-md-block d-none">
                <TilesSection />
            </div>

            <AdvertisementSection 
                title={Parser(text["section_five_title"])}
                text={Parser(text["section_five_content"])}
                readmore={true}
            />
            
            <Partner 
                page={"influencer"} 
                text={Parser(text["section_six_proudPartner"])}
            />

            <SectionEnd 
                title={Parser(text["section_six_download_title"])} 
            />
        </PageContainer>
    )
};

export default HomeInfluencer; 