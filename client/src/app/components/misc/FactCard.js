import React, { Fragment } from 'react';

import '../../_sass/components/misc/FactCard.scss';

const FactCard = (props) => {

    const postionStyle = {
        top: props.topOffset,
        left: props.leftOffset,
    };
    return (
        <div className={`fact-card fact-card--${props.page}`}
             style={postionStyle}
             >

            {
                (props.img)
                ? <img alt="img" className="fact-card__img" src={require(`../../assets/icons/${props.img}`)} /> 
                : <Fragment>
                     {
                        (props.icon)
                        ? <img alt="icon" className="fact-card__icon" src={require(`../../assets/icons/${props.icon}`)} /> 
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
                </Fragment>
            }
           
        </div>
    );
};

export default FactCard;