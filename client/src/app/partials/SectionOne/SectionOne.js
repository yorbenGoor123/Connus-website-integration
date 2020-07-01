import React from 'react';
import Parser from 'html-react-parser';

import { SectionTitle, Text } from '../../components';
import {useLanguage} from '../../services';


import '../../_sass/partials/SectionOne.scss';

const SectionOne = (props) => {
    const { getText } = useLanguage(); 
    const text = getText(props.page);

    return (
        <section className ={`section-one section-one--${props.page} container-6`}>
            <div className="col col-12 col-md-6">
                <SectionTitle
                    text={Parser(text["section_one_title"])}
                    color="blue-font" 
                />
                <Text
                    text={Parser(text["section_one_text_one"])}
                />
                <Text
                    text={Parser(text["section_one_highlight"])}
                    color="blue-font"
                />
                <Text
                    text={Parser(text["section_one_text_two"])}
                />
            </div>
        </section>
        
    );
}

export default SectionOne;