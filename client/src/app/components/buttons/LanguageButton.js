import React from 'react';

const LanguageButton = ({text, used}) => {
    return (
        used ? (
            <p className="language-button used-button">
                { text }
            </p>
        ) : (
            <p className="language-button">
                { text }
            </p>
        )
    )
};

export default LanguageButton;