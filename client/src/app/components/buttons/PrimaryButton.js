import React from 'react';

const PrimaryButton = (props) => {
    return (
        <div className="primary-button">
            <button onClick={props.onClick}>{props.text ?? "button"}</button>
        </div>
    );
}

export default PrimaryButton;