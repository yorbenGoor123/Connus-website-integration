import React from 'react';

const SectionTitle = (props) => {

    return (
        <h1 className={`section-title ${props.color}`}>
            {props.text}
        </h1>
    )
};

export default SectionTitle;
