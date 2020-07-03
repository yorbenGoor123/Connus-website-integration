import React from 'react';
import Parser from 'html-react-parser';
import { useParams } from 'react-router-dom';

import { useLanguage } from '../services';
import { PageContainer, ThinHead, PlainContent, NotFoundSection } from '../partials';

const PlainPage = () => {
    const { page } = useParams();
    const { getText } = useLanguage();
    
    const text = getText(page);
    const notFoundText = getText("404");

    return (
        text ? (
            <PageContainer>
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