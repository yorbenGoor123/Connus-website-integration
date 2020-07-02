import React from 'react';

const SocialButton = ({img, pageRef}) => {
    return (
        <a className="social-button" target="_blank" href={pageRef} rel="noopener noreferrer">
            <img src={img} alt="social-media" />
        </a>
    )
};

export default SocialButton;