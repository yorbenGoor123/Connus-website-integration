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
                "title": "Nano content creator",
                "text": info.nano,
            }}/>
            <InfluencerInfo shown={shown} info={{
                "title": "Micro content creator",
                "text": info.micro,
            }}/>
            <InfluencerInfo shown={shown} info={{
                "title": "Meso content creator",
                "text": info.meso,
            }}/>
            <InfluencerInfo shown={shown} info={{
                "title": "Macro content creator",
                "text": info.macro,
            }}/>
            <InfluencerInfo shown={shown} info={{
                "title": "Mega content creator",
                "text": info.mega,
            }}/>
        </div>
    )
};

export default InfluencerInfos;