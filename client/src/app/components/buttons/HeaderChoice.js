import React from 'react';

import ArrowDown from '../../assets/icons/arrow-down.png';

const HeaderChoice = ({ choice }) => {
    return (
        <div className="choice-button">
            <p className="choice-button__text">
                I'm a <strong>influencer</strong>
            </p>

            <div className="choice-button__arrow">
                <img src={ArrowDown} alt="arrow-down" />
            </div>
        </div>
    )
};

export default HeaderChoice;