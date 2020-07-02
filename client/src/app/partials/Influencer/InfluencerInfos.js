import React, { useEffect } from 'react';
import InfluencerInfo from './InfluencerInfo';

const InfluencerInfos = ({shown, info}) => {
    useEffect(() => {
        const info = document.getElementsByClassName('influencer-info');

        for (let i = 0; i < info.length; i++) {
            if (i === shown) {
                info[shown].style.display = 'block';
            } else {
                info[i].style.display = 'none';
            };
        };
    });

    return (
        <div className="influencer-infos">
            <InfluencerInfo shown={shown} info={{
                "title": "Nano-influencer",
                "text": info.nano,
            }}/>
            <InfluencerInfo shown={shown} info={{
                "title": "Micro-influencer",
                "text": info.micro,
            }}/>
            <InfluencerInfo shown={shown} info={{
                "title": "Meso-influencer",
                "text": info.meso,
            }}/>
            <InfluencerInfo shown={shown} info={{
                "title": "Macro-influencer",
                "text": info.macro,
            }}/>
            <InfluencerInfo shown={shown} info={{
                "title": "Mega-influencer",
                "text": info.mega,
            }}/>
        </div>
    )
};

export default InfluencerInfos;