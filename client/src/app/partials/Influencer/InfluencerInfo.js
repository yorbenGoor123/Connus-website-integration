import React from 'react';
import Parser from 'html-react-parser';

import { useLanguage } from '../../services';

import Info from '../../assets/icons/info.png';
import Quit from '../../assets/icons/quit.png';

const InfluencerInfo = ({ shown, info }) => {
    const { getText } = useLanguage(); 
    const text = getText("brand");

    const showInfo = () => {
        const infoCard = document.getElementsByClassName('influencer-info')[shown].children[1];
        const infoButton = document.getElementsByClassName('influencer-info')[shown].children[0];

        infoCard.style.display = "block";
        infoButton.style.display = "none";

        setTimeout(() => {
            infoCard.style.opacity = "1";
            infoButton.style.opacity = "0";
        }, 100);
    };

    const hideInfo = () => {
        const infoCard = document.getElementsByClassName('influencer-info')[shown].children[1];
        const infoButton = document.getElementsByClassName('influencer-info')[shown].children[0];

        infoCard.style.opacity = "0";


        setTimeout(() => {
            infoCard.style.display = "none";
            infoButton.style.display = "flex";

            setTimeout(() => {
                infoButton.style.opacity = "1";
            }, 100);
        }, 500);
    };

    return (
        <div className="influencer-info">
            <div className="influencer-info__button" onClick={showInfo}>
                <p>{Parser(text["more_info"])}</p>
                <img src={Info} alt="info-button" />
            </div>

            <div className="influencer-info__card">
                <div className="influencer-info__card--exit">
                    <img src={Quit} alt="quit-button" onClick={hideInfo} />
                </div>
                <h4>{info.title}</h4>
                <p>{info.text}</p>
            </div>
        </div>
    )
};

export default InfluencerInfo;