import React, { useState } from 'react';

const Switch = (props) => {
    const [status, setStatus] = useState(0);

    const switchStatus = () => {
        if (status === 1) {
            setStatus(0);
            props.onSwitch(stateToValue(0))
        }else if (status === 0) {
            setStatus(1);
            props.onSwitch(stateToValue(1))
        }
    }

    const stateToValue = (state) => {
        if (state === 0) return props.valueOne;
        if (state === 1) return props.valueTwo;
    }

    return (
        <div className="switch" onClick={switchStatus} >
            <div className="page-switch__full-bg"></div>
            <p className={`page-switch__value-one ${ (status === 0) ? "page-switch__text--selected" : ''}`}>{props.valueOne}</p>
            <div className={`page-switch__bg page-switch__bg--${(status === 0) ? "value-one" : "value-two" }`}></div>
            <p className={`page-switch__value-two ${ (status === 1) ? "page-switch__text--selected" : ''}`}>{props.valueTwo}</p>
        </div>
    );
};

export default Switch;