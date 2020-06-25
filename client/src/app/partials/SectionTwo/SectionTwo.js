import React from 'react';

import {useLanguage} from '../../services';

import './SectionTwo.scss';


function SectionTwo(props) {
    const { getText } = useLanguage(); 
    const text = getText(props.page);
    return (
        <div className ="section-two">
            {/* correct typographic components have to be used */}
        </div>
    );
}

export default SectionTwo;