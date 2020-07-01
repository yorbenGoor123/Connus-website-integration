import React, {useEffect, useState, useCallback } from 'react';

import ArrowDown from '../../assets/icons/arrow-down.png';
import { useToolbox } from '../../services/toolbox.service';

const HeaderChoice = ({ choice }) => {
    const { getCookie } = useToolbox();
    const [ page, setPage ] = useState();
    const [ oppositePage, setOppositePage ] = useState();

    const toggle = (state) => {

    };

    const callback = useCallback(() => {
        const retrieveCookie = () => {
            const cookie = getCookie('preferedPage');
            setPage(cookie);
            
            if (cookie === 'brand') {
                setOppositePage('influencer')
            } else {
                setOppositePage('brand');
            };
        };

        retrieveCookie();
    }, [getCookie]);

    useEffect(() => {
        callback();
    }, [callback]);
    return (
        <div className="choice-button-container">
            <div className="choice-button" onClick={() => toggle(false)}>
                <p className="choice-button__text">
                    I'm a <strong>
                        {page}
                    </strong>
                </p>
        
                <div className="choice-button__arrow">
                    <img src={ArrowDown} alt="arrow-down" />
                </div>
            </div>
            <div className="choice-button-option">
                <p className="choice-button-option__text">
                    No, i'm a <strong>
                        {oppositePage}
                    </strong>!
                </p>
            </div>
        </div>
    )
};

export default HeaderChoice;