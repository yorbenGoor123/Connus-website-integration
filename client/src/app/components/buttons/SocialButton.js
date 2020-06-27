import React from 'react';
import { NavLink } from 'react-router-dom';

const SocialButton = ({img, ref}) => {
    return (
        <NavLink className="social-button" target="_blank" to={`${ref}`}>
            <img src={img} alt="social-media" />
        </NavLink>
    )
};

export default SocialButton;