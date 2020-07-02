import React from 'react';

import Kbc from '../../assets/icons/startitkbc.png';
import { SmallTitle } from '../../components';

const Partner = ({page, text}) => {
    return (
        <div className="partner">
            <div className={`partner__section partner-${page}`}>
                <SmallTitle text={text} color="title-white"/>
                <img src={Kbc} alt="kbc-logo" />
            </div>
        </div>
    )
};

export default Partner;