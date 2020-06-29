import React from 'react';

import FactCard from './FactCard';

import '../../_sass/components/misc/FactCardMobile.scss';

const FactCardMobile = (props) => {

    const postionStyle = {
        top: props.topOffset,
        left: props.leftOffset,
    };

    const cardPosition = {
        'top-right': {
            leftOffset: '8px',
            topOffset: '-200%',
        },

        'top-right-large': {
            leftOffset: '15px',
            topOffset: '-150%',
        },

        'top-left': {
            leftOffset: '-540%',
            topOffset: '-200%',
        },

        'top-left-large': {
            leftOffset: '-650%',
            topOffset: '-150%',
        }
    }

    return (
        <div className={`fact-card-mobile`} id={props.id} style={postionStyle}>
            {
                (props.active === "true")
                ? <FactCard 
                    icon={props.icon}
                    numberBig={props.numberBig}
                    numberSmall={props.numberSmall}
                    text={props.text}
                    leftOffset={cardPosition[props.unfoldDirection].leftOffset}
                    topOffset={cardPosition[props.unfoldDirection].topOffset}
                />
                : null
            }
            

            <div className={`fact-card-mobile__dot fact-card-mobile__dot--${props.size}`}></div>
            
        </div>
    );
};

export default FactCardMobile;