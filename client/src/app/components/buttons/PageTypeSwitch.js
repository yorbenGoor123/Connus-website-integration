import React, { useState } from 'react';

import { Text } from '../typography'

const PageTypeSwitch = () => {
    const [status, setStatus] = useState('influencer');

    const switchStatus = () => {
        if (status === 'influencer') setStatus('brand');
        if (status === 'brand') setStatus('influencer');
        console.log('ddd')
    }

    return (
        <div className="page-switch" onClick={switchStatus} >
            <div className="page-switch__full-bg"></div>
            <p className={`page-switch__brand ${ (status === "brand") ? "page-switch__text--selected" : ''}`}>brand</p>
            <div className={`page-switch__bg page-switch__bg--${status}`}></div>
            <p className={`page-switch__influencer ${ (status === "influencer") ? "page-switch__text--selected" : ''}`}>influencer</p>
        </div>
    );
};

export default PageTypeSwitch;