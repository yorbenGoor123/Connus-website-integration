import React from 'react';

import Kbc from '../../assets/icons/startitkbc.png';

const Partner = ({page, children}) => {
    return (
        <div className="partner">
            <div className={`partner__section partner-${page}`}>
                { children }

                <img src={Kbc} alt="kbc-logo" />
            </div>
        </div>
    )
};

export default Partner;