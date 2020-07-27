import React from 'react';

import Logo from '../../assets/logo/full_logo.png';
import { NavLink } from 'react-router-dom';

const FullLogo = () => {
    return (

        <NavLink to="/">
            <img src={Logo} alt="complete-logo" className="complete-logo" />
        </NavLink>

    )
};

export default FullLogo;