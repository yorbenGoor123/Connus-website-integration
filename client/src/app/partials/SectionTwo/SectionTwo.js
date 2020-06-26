import React from 'react';
import Parser from 'html-react-parser';

import {useLanguage} from '../../services';
import { Row } from '../Layout'

import '../../_sass/partials/SectionTwo.scss';


function SectionTwo(props) {
    const { getText } = useLanguage(); 
    const text = getText(props.page);
    return (
        <section className ="section-two">
            {/* correct typographic components have to be implemented */} 
            <img className="section-two__bg-container-large d-none d-md-inline" src="./bgImages/sectionTwoYellow.svg" />
            <img className="section-two__bg-container-small d-inline d-md-none" src="./bgImages/sectionTwoYellow.svg" />

            <div className="section-two__text-container container">
                <div className="col-12 col-md-6" >
                    <h1>{Parser(text["section_two_title"])}</h1>
                    <p>{Parser(text["section_two_text_one"])}</p>
                    <p>{Parser(text["section_two_text_two"])}</p>
                    <p>{Parser(text["section_two_text_three"])}</p>
                </div>
            </div>

            <div className="section-two__phone-container container">

                <Row>
                    <div className="col">
                         
                    </div>
                    <div className="col">

                    </div>
                    <div className="col">

                    </div>
                </Row>
            </div>
        </section>
    );
}

export default SectionTwo;