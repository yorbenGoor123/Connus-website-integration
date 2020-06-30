import React, { useEffect } from 'react';
import InfluencerInfo from './InfluencerInfo';

const InfluencerInfos = ({shown}) => {
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
                "title": "Wat is dit?",
                "text": "Dit is plaatsvervangende tekst. Dat zie je wel zeker.",
            }}/>
            <InfluencerInfo shown={shown} info={{
                "title": "Wat is dit?",
                "text": "Dit is plaatsvervangende tekst. Dat zie je wel zeker.",
            }}/>
            <InfluencerInfo shown={shown} info={{
                "title": "Wat is dit?",
                "text": "Dit is plaatsvervangende tekst. Dat zie je wel zeker.",
            }}/>
            <InfluencerInfo shown={shown} info={{
                "title": "Wat is dit?",
                "text": "Dit is plaatsvervangende tekst. Dat zie je wel zeker.",
            }}/>
            <InfluencerInfo shown={shown} info={{
                "title": "Wat is dit?",
                "text": "Dit is plaatsvervangende tekst. Dat zie je wel zeker.",
            }}/>
        </div>
    )
};

export default InfluencerInfos;