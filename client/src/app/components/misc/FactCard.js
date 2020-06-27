import React from 'react';

const FactCard = (props) => {
    return (
        <div class="fact-card">
            {
                (props.icon)
                ? <img className="fact-card__icon" src="../../assets/icons/props.icon" /> 
                : null
            }
            {
                (props.numberBig)
                ? <p className="fact-card__number-big" >{props.numberBig}</p>
                : null
            }
            {
                (props.numberSmall)
                ? <p className="fact-card__number-small" >{props.numbersmall}</p>
                : null
            }
            {
                (props.text)
                ? <p className="fact-card__text" >{props.text}</p>
                : null
            }
        </div>
    );
};

export default FactCard;