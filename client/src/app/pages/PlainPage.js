import React, { useEffect, useState } from 'react';
import Parser from 'html-react-parser';
import { useParams, Redirect } from 'react-router-dom';

import { useLanguage, useToolbox } from '../services';
import { PageContainer, ThinHead, PlainContent, NotFoundSection } from '../partials';

const PlainPage = () => {
    const { page } = useParams();
    const { getText } = useLanguage();
    const { getCookie } = useToolbox();

    const [ stay, setStay ] = useState(true);

    useEffect(() => {
        let array = page.split("-");

        if (array[1] === "content" && array[2] === "creator" ) {
            if (getCookie("preferedPage") === "content-creator") {
                setStay(true);
            } else {
                setStay(false);
            }
        } else if ( array[1] === "brand" ) {

        };
    }, [setStay, getCookie, page]);
    
    const text = getText(page);
    const notFoundText = getText("404");

    return (
        text ? (
            <PageContainer>
                {
                    stay ? (
                        ''
                    ) : (
                        <Redirect to="/" />
                    )
                }
            
                <ThinHead 
                    title={Parser(text["header_one_title"])}
                />

                <PlainContent
                    title={Parser(text["section_one_title"])}
                    content={Parser(text["content"])}
                />
            </PageContainer>
        ) : (
            <PageContainer>
                <ThinHead 
                    title={Parser(notFoundText["header_one_title"])}
                />

                <NotFoundSection
                    text={Parser(notFoundText["content"])}
                    button={Parser(notFoundText["button_title"])}
                />
            </PageContainer>
        )
    )
};

export default PlainPage;