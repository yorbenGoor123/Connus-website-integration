import React, { useEffect, useState } from 'react';

const LanguageButton = ({text, value, toggle, pref}) => {
    const [ usedLanguage, setUsedLanguage ] = useState();

    useEffect(() => {
        if (value === pref) {
            setUsedLanguage(true);
        };
    }, [setUsedLanguage, pref, value]);

    return (
        usedLanguage ? (
            <p className="language-button used-button">
                { text }
            </p>
        ) : (
            <p className="language-button" onClick={() => toggle(value)}>
                { text }
            </p>
        )
    )
};

export default LanguageButton;