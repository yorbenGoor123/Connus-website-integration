import React from 'react';
import Parser from 'html-react-parser';

import { SectionTitle, Text } from '../../components';
import {useLanguage} from '../../services';

import '../../_sass/partials/EngagementRate.scss';

const EngagementRate = () => {
    const { getText } = useLanguage(); 
    const text = getText("brand");

    return (
        <section className ={`engagement-rate container-6`}>
            <div className="col col-12 col-md-6">
                <SectionTitle
                    text={Parser(text["engagement_rate_title"])}
                    color="blue-font" 
                />
                <Text
                    text={Parser(text["engagement_rate_highlight"])}
                    color="blue-font"
                />
                <Text
                    text={Parser(text["engagement_rate_text"])}
                />
                <div className="engagement-rate__image--lg d-none d-sm-block"></div>
                <div className="engagement-rate__image--sm d-sm-none"></div>
            </div>
        </section>
    );
}

export default EngagementRate;