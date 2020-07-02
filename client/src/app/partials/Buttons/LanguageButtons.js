import React, { useEffect, useCallback, useState } from 'react';

import { LanguageButton } from '../../components';
import { useToolbox } from '../../services';

const LanguageButtons = () => {
    const { getCookie, setLanguage } = useToolbox();
    const [ prefLanguage, setPrefLanguage ] = useState();

    const callback = useCallback(() => {
        const retrieveCookie = () => {
            const cookie = getCookie('language');
            setPrefLanguage(cookie);
        };

        retrieveCookie();
    }, [getCookie]);

    useEffect(() => {
        callback();
    }, [callback]);
    
    const toggle = (language) => {
        setLanguage(language);

        window.location.reload();
    };

    return (
        <div className="language-buttons">
            <LanguageButton text="Nederlands" value="nl" toggle={toggle} pref={prefLanguage} />
            <LanguageButton text="English" value="en" toggle={toggle} pref={prefLanguage} />
        </div>
    )
};

export default LanguageButtons;