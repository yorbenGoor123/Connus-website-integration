import React, { useState, useEffect } from 'react';
import Parser from 'html-react-parser';

import {useLanguage} from '../../services';
import { Row } from '../Layout'
import { SectionTitle, Text } from '../../components'
import FactCard  from '../../components/misc/FactCard'
import FactCardMobile  from '../../components/misc/FactCardMobile'

import '../../_sass/partials/SectionTwo.scss';


function SectionTwo(props) {
    const { getText } = useLanguage(); 
    const text = getText(props.page);

    console.log(props.page);

    const [activeDotNr, setActiveDotNr] = useState(undefined);

    useEffect (() => {
        const limit = (props.page === 'influencer') ? '8' : (props.page === 'brand') ? '9' : 0;
        for (let i = 1; i < limit; i ++) {
            if (document.getElementById(`fact-card-mobile-${i}`)) document.getElementById(`fact-card-mobile-${i}`)
            .addEventListener('click', () => {
                if (activeDotNr === i.toString()) {
                    setActiveDotNr(undefined);
                } else {
                    setActiveDotNr(i.toString());
                }
            })
        }
    })

    return (
        <section className ={`section-two section-two--${props.page}`}>
            {/* correct typographic components have to be implemented */} 

            <div className="section-two__text-container container">
                <div className="col-12 col-md-6" >
                    <SectionTitle 
                        color="white" 
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
                {
                    (props.page === "influencer")
                    ?
                    <Row>
                        <div className="col d-none d-lg-block"><div className="column-left">

                            <FactCard
                                page={props.page}
                                icon="heart-solid.svg"
                                numberSmall="+33"
                            />
                            <FactCard
                                page={props.page}
                                numberBig="103"
                                text={Parser(text["section_two_bubble_two_text"])} 
                            />
                            <FactCard
                                page={props.page}
                                icon="comment.svg"
                                numberSmall="+91" 
                                leftOffset="-7vw"
                            />
                        </div></div>

                        <div className="d-none d-lg-block">
                            <div className="section-two__mockup"></div>
                        </div>
                        <div className="col d-lg-none p-relative d-flex justify-content-center">
                            <div className="col section-two__mockup section-two__mockup--mobile"></div>
                            <div className="section-two__mobile-buttons">
                                <FactCardMobile
                                    page={props.page}
                                    active={(activeDotNr === "1") ? "true": "false"}
                                    id="fact-card-mobile-1"

                                    icon="heart-solid.svg"
                                    numberSmall="+33"

                                    unfoldDirection="top-right"
                                    size="small" 

                                    leftOffset="-95px"
                                    topOffset=""
                                />
                                <FactCardMobile
                                    page={props.page}
                                    active={(activeDotNr === "2") ? "true": "false"}
                                    id="fact-card-mobile-2"

                                    numberBig="103"
                                    text={Parser(text["section_two_bubble_two_text"])} 

                                    unfoldDirection="top-left-large"
                                    size="large"

                                    leftOffset="95px"
                                    topOffset=""
                                />
                                <FactCardMobile
                                    page={props.page}
                                    active={(activeDotNr === "3") ? "true": "false"}
                                    id="fact-card-mobile-3"

                                    icon="comment.svg"
                                    numberSmall="+91" 

                                    unfoldDirection="top-left"
                                    size="small"

                                    leftOffset="105px"
                                    topOffset=""
                                />
                                <FactCardMobile
                                    page={props.page}
                                    active={(activeDotNr === "4") ? "true": "false"}
                                    id="fact-card-mobile-4"

                                    numberBig="93"
                                    text={Parser(text["section_two_bubble_four_text"])} 

                                    unfoldDirection="top-right-large"
                                    size="large"

                                    leftOffset="-90px"
                                    topOffset="-20px"
                                />
                                <FactCardMobile
                                    page={props.page}
                                    active={(activeDotNr === "5") ? "true": "false"}
                                    id="fact-card-mobile-5"

                                    icon="comment-dollar-solid.svg"
                                    numberSmall="+€101" 

                                    unfoldDirection="top-right"
                                    size="small"

                                    leftOffset="20px"
                                    topOffset="-20px"
                                />
                                <FactCardMobile
                                    page={props.page}
                                    active={(activeDotNr === "6") ? "true": "false"}
                                    id="fact-card-mobile-6"

                                    numberBig="186"
                                    text={Parser(text["section_two_bubble_five_text"])} 

                                    unfoldDirection="top-left-large"
                                    size="large"

                                    leftOffset="70px"
                                    topOffset="15px"
                                />
                                <FactCardMobile
                                    page={props.page}
                                    active={(activeDotNr === "7") ? "true": "false"}
                                    id="fact-card-mobile-7"

                                    icon="telegram-plane-brands.svg"
                                    numberSmall="+66"  

                                    unfoldDirection="top-right"
                                    size="small"

                                    leftOffset="-95px"
                                    topOffset="-20px"
                                />
                            </div>
                        </div>

                        <div className="col d-none d-lg-block"><div className="column-right">
                            <FactCard
                                page={props.page}
                                numberBig="93"
                                text={Parser(text["section_two_bubble_four_text"])} 
                                leftOffset="3vw"
                                topOffset="-3vh"
                            />
                            <FactCard
                                page={props.page}
                                icon="comment-dollar-solid.svg"
                                numberSmall="+€101" 
                                leftOffset="5vw"
                            />
                            <FactCard
                                page={props.page}
                                numberBig="186"
                                text={Parser(text["section_two_bubble_five_text"])} 
                                topOffset="3vh"
                                leftOffset="-8vw"
                            />

                            <FactCard
                                page={props.page}
                                icon="telegram-plane-brands.svg"
                                numberSmall="+66"  
                                topOffset="4vh"
                                leftOffset="2vw"
                            />
                        </div></div>
                    </Row>
                    : null
                }

{
                    (props.page === "brand")
                    ?
                    <Row>
                        <div className="col d-none d-lg-block"><div className="column-left">

                            <FactCard
                                page={props.page}
                                img="danone.png"
                            />
                            <FactCard
                                page={props.page}
                                numberBig="103"
                                text={Parser(text["section_two_bubble_two_text"])} 
                                leftOffset="7vw"
                            />
                            <FactCard
                                page={props.page}
                                img="tagmag.png"
                                leftOffset="-11vw"
                                topOffset="-5vh"
                            />
                            <FactCard
                                page={props.page}
                                img="breydel.png"
                            />
                        </div></div>

                        <div className="d-none d-lg-block">
                            <div className="section-two__mockup"></div>
                        </div>
                        <div className="col d-lg-none p-relative d-flex justify-content-center">
                            <div className="col section-two__mockup section-two__mockup--mobile"></div>
                            <div className="section-two__mobile-buttons">
                                <FactCardMobile
                                    page={props.page}
                                    active={(activeDotNr === "1") ? "true": "false"}
                                    id="fact-card-mobile-1"

                                    img="danone.png"

                                    unfoldDirection="top-right"
                                    size="small" 

                                    leftOffset="-95px"
                                    topOffset=""
                                />
                                <FactCardMobile
                                    page={props.page}
                                    active={(activeDotNr === "2") ? "true": "false"}
                                    id="fact-card-mobile-2"

                                    numberBig="103"
                                    text={Parser(text["section_two_bubble_two_text"])} 

                                    unfoldDirection="top-left-large"
                                    size="large"

                                    leftOffset="95px"
                                    topOffset=""
                                />
                                <FactCardMobile
                                    page={props.page}
                                    active={(activeDotNr === "3") ? "true": "false"}
                                    id="fact-card-mobile-3"

                                    img="tagmag.png"

                                    unfoldDirection="top-left"
                                    size="small"

                                    leftOffset="105px"
                                    topOffset=""
                                />
                                <FactCardMobile
                                    page={props.page}
                                    active={(activeDotNr === "4") ? "true": "false"}
                                    id="fact-card-mobile-4"

                                    img="breydel.png"

                                    unfoldDirection="top-left"
                                    size="small"

                                    leftOffset="0px"
                                    topOffset=""
                                />
                                <FactCardMobile
                                    page={props.page}
                                    active={(activeDotNr === "5") ? "true": "false"}
                                    id="fact-card-mobile-5"

                                    numberBig="93"
                                    text={Parser(text["section_two_bubble_four_text"])} 

                                    unfoldDirection="top-right-large"
                                    size="large"

                                    leftOffset="-90px"
                                    topOffset="-20px"
                                />
                                <FactCardMobile
                                    page={props.page}
                                    active={(activeDotNr === "6") ? "true": "false"}
                                    id="fact-card-mobile-6"

                                   img="cake.png"

                                    unfoldDirection="top-right"
                                    size="small"

                                    leftOffset="20px"
                                    topOffset="-20px"
                                />
                                <FactCardMobile
                                    page={props.page}
                                    active={(activeDotNr === "7") ? "true": "false"}
                                    id="fact-card-mobile-7"

                                    numberBig="186"
                                    text={Parser(text["section_two_bubble_five_text"])} 

                                    unfoldDirection="top-left-large"
                                    size="large"

                                    leftOffset="70px"
                                    topOffset="15px"
                                />
                                <FactCardMobile
                                    page={props.page}
                                    active={(activeDotNr === "8") ? "true": "false"}
                                    id="fact-card-mobile-8"

                                    img="boardx.png" 

                                    unfoldDirection="top-right"
                                    size="small"

                                    leftOffset="-95px"
                                    topOffset="-20px"
                                />
                            </div>
                        </div>

                        <div className="col d-none d-lg-block"><div className="column-right">
                            <FactCard
                                page={props.page}
                                numberBig="93"
                                text={Parser(text["section_two_bubble_four_text"])} 
                                leftOffset="3vw"
                                topOffset="-3vh"
                            />
                            <FactCard
                                page={props.page}
                                img="cake.png" 
                                leftOffset="5vw"
                            />
                            <FactCard
                                page={props.page}
                                numberBig="186"
                                text={Parser(text["section_two_bubble_five_text"])} 
                                topOffset="3vh"
                                leftOffset="-8vw"
                            />

                            <FactCard
                                page={props.page}
                                img="boardx.png" 
                                topOffset="4vh"
                                leftOffset="2vw"
                            />
                        </div></div>
                    </Row>
                    : null
                }
                
            </div>
        </section>
    );
}

export default SectionTwo;