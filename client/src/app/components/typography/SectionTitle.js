import React from 'react';

const SectionTitle = (props) => {

    return (
        <h2 className={`section-title ${props.color}-font`}>
            {props.text}
        </h2>
    )
};

export default SectionTitle;
