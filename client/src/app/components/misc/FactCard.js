import React from 'react';

import '../../_sass/components/misc/FactCard.scss';

const FactCard = (props) => {

    const postionStyle = {
        top: props.topOffset,
        left: props.leftOffset,
    };
    return (
        <div class="fact-card"
             style={postionStyle}
             >
            {
                (props.icon)
                ? <img className="fact-card__icon" src={require(`../../assets/icons/${props.icon}`)} /> 
                : null
            }
            {
                (props.numberBig)
                ? <p className="fact-card__number-big" >{props.numberBig}</p>
                : null
            }
            <span></span>
            {
                (props.numberSmall)
                ? <p className="fact-card__number-small" >{props.numberSmall}</p>
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