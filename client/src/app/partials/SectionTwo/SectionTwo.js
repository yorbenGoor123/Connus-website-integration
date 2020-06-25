import React from 'react';
import Parser from 'html-react-parser';

import {useLanguage} from '../../services';

import './SectionTwo.scss';


function SectionTwo(props) {
    const { getText } = useLanguage(); 
    const text = getText(props.page);
    return (
        <div className ="section-two">
            {/* correct typographic components have to be implemented */}
            <img className="section-two__bg-container" src="./bgImages/sectionTwoYellow.svg" />
            <p>

            {Parser(text["section_two_bubble_four_text"])}
            </p>
        </div>
    );
}

export default SectionTwo;