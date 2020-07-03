import React from 'react';
import { NavLink } from 'react-router-dom';

const LightButton = ({text, pageRef}) => {
    return (
        <NavLink className="light-button" to={pageRef}>
            { text }
        </NavLink>
    )
};

export default LightButton;