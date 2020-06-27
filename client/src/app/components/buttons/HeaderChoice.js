import React, { useState } from 'react';

import ArrowDown from '../../assets/icons/arrow-down.png';
import { useAnimation } from '../../services';

const HeaderChoice = ({ choice }) => {
    const { ToggleMenu } = useAnimation();
    const [ toggleState, setToggleState ] = useState(false);

    const toggle = (state) => {
        if (state === true) {
            const choiceBtn = document.getElementsByClassName('choice-button')[0];
            const choiceOption = document.getElementsByClassName('choice-button-option')[0];
            console.log(choiceBtn, choiceOption);
            ToggleMenu(choiceBtn, choiceOption);
        }
    };

    return (
        <div className="choice-button-container">
            {
                toggleState ? (
                    <div className="choice-button" onClick={() => toggle(false)}>
                        <p className="choice-button__text">
                            I'm a <strong>influencer</strong>
                        </p>
        
                        <div className="choice-button__arrow">
                            <img src={ArrowDown} alt="arrow-down" />
                        </div>
                    </div>
                ) : (
                    <div className="choice-button" onClick={() => toggle(true)}>
                        <p className="choice-button__text">
                            I'm a <strong>influencer</strong>
                        </p>
        
                        <div className="choice-button__arrow">
                            <img src={ArrowDown} alt="arrow-down" />
                        </div>
                    </div>
                )
            }

            <div className="choice-button-option">
                <p className="choice-button-option__text">
                    I'm a <strong>brand</strong>!
                </p>
            </div>
        </div>
    )
};

export default HeaderChoice;