import React from 'react';
import Parser from 'html-react-parser';

import {useLanguage} from '../../services';
import { Row } from '../Layout'
import { SectionTitle, Text } from '../../components'

import '../../_sass/partials/SectionTwo.scss';


function SectionTwo(props) {
    const { getText } = useLanguage(); 
    const text = getText(props.page);
    return (
        <section className ="section-two">
            {/* correct typographic components have to be implemented */} 

            <div className="section-two__text-container container">
                <div className="col-12 col-md-6" >
                    <SectionTitle 
                        color="white-font" 
                        text={Parser(text["section_two_title"])}
                    />
                    <Text
                        color="white-font" 
                        text={Parser(text["section_two_text_one"])} 
                    />
                    <Text
                        color="white-font" 
                        text={Parser(text["section_two_text_two"])} 
                    />
                    <Text
                        color="white-font" 
                        text={Parser(text["section_two_text_three"])} 
                    />
                </div>
            </div>

            <div className="section-two__phone-container container">

                <Row>
                    <div className="col">
                         
                    </div>
                    <div className="section-two__mockup col">
                    </div>
                    <div className="col">

                    </div>
                </Row>
            </div>
        </section>
    );
}

export default SectionTwo;