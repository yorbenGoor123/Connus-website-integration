import React from 'react';
import { NavLink } from 'react-router-dom';

const LightButton = ({text, ref}) => {
    return (
        <NavLink className="light-button" to={`${ref}`}>
            { text }
        </NavLink>
    )
};

export default LightButton;