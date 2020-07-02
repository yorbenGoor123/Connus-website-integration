import React, {useEffect, useState, useCallback } from 'react';

import ArrowDown from '../../assets/icons/arrow-down.png';
import { useToolbox } from '../../services/toolbox.service';

const HeaderChoice = ({ choice }) => {
    const { getCookie, setPage} = useToolbox();
    const [ prefPage, setPrefPage ] = useState();
    const [ oppositePage, setOppositePage ] = useState();

    const toggle = (state) => {
        setPage(state);

        window.location.reload();
    };

    const callback = useCallback(() => {
        const retrieveCookie = () => {
            const cookie = getCookie('preferedPage');
            setPrefPage(cookie);
            
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
                        {prefPage}
                    </strong>
                </p>
        
                <div className="choice-button__arrow">
                    <img src={ArrowDown} alt="arrow-down" />
                </div>
            </div>
            <div className="choice-button-option" onClick={() => toggle(oppositePage)}>
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