import React from 'react';
import Parser from 'html-react-parser';

import {useLanguage} from '../../services';
import { Row } from '../Layout'
import { SectionTitle, Text } from '../../components'
import FactCard  from '../../components/misc/FactCard'

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
                    <div className="col d-none d-md-block"><div className="column-left">

                        <FactCard
                            icon="heart-solid.svg"
                            numberSmall="+33" 
                            // topOffset="100px"
                            // leftOffset="20px"
                        />
                        <FactCard
                            numberBig="103"
                            text={Parser(text["section_two_bubble_two_text"])} 
                        />
                        <FactCard
                            icon="comment.svg"
                            numberSmall="+91" 
                            leftOffset="-7vw"
                        />
                    </div></div>
                    <div className="section-two__mockup col">
                    </div>
                    <div className="col d-none d-md-block"><div className="column-right">
                        <FactCard
                            numberBig="93"
                            text={Parser(text["section_two_bubble_four_text"])} 
                            leftOffset="3vw"
                        />
                        <FactCard
                            icon="comment-dollar-solid.svg"
                            numberSmall="+€101" 
                            leftOffset="5vw"
                        />
                        <FactCard
                            numberBig="186"
                            text={Parser(text["section_two_bubble_five_text"])} 
                            topOffset="3vh"
                            leftOffset="-8vw"
                        />

                        <FactCard
                            icon="telegram-plane-brands.svg"
                            numberSmall="+66"  
                            topOffset="4vh"
                            leftOffset="2vw"
                        />
                    </div></div>
                </Row>
            </div>
        </section>
    );
}

export default SectionTwo;