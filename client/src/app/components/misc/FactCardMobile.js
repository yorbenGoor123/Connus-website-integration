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
            leftOffset: '-440%',
            topOffset: '-200%',
        },

        'top-left-large': {
            leftOffset: '-220px',
            topOffset: '-150%',
        }
    }

    return (
        <div className={`fact-card-mobile`} id={props.id} style={postionStyle}>
            {
                (props.active === "true")
                ?   <div className=""> 
                <FactCard 
                    page={props.page ?? "brand"}
                    icon={props.icon}
                    img={props.img}
                    numberBig={props.numberBig}
                    numberSmall={props.numberSmall}
                    text={props.text}
                    leftOffset={cardPosition[props.unfoldDirection].leftOffset}
                    topOffset={cardPosition[props.unfoldDirection].topOffset}
                />
                </div>
                : null
            }
            

            <div className={`fact-card-mobile__dot fact-card-mobile__dot--${props.page} fact-card-mobile__dot--${props.size}`}></div>

        </div>
    );
};

export default FactCardMobile;