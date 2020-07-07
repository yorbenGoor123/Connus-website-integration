import React from 'react';
import { NavLink } from 'react-router-dom';

const ReadMoreButton = ({link}) => {
    return (
        <NavLink to={link} className="read-more">
            <div className="read-more__line"></div>
            <h4 className="read-more__text">Read more</h4>
        </NavLink>
    )
};

export default ReadMoreButton;