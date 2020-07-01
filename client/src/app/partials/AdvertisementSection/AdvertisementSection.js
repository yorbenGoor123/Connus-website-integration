import React from 'react';
import Parser from 'html-react-parser';

import {useLanguage} from '../../services';

import { SmallTitle, Text } from '../../components';
import { CenterRow } from '../Layout';

import '../../_sass/partials/AdvertisementSection.scss';


const AdvertisementSection = (props) => {
    return (
        <section className ={`advertisement-section`}>
            <div className="advertisement-section__content-container row">
                <div className="d-none d-lg-block col-2"></div>
                <div className="col col-8 col-sm-6 col-md-5 col-lg-3 advertisement-container__text ">
                    <SmallTitle
                        text={Parser(props.title ?? '')}
                        color="title-white"
                    />
                    <Text 
                        text={Parser(props.text ?? '')}
                        color="white-font"
                    />
                </div>
                <div className="col col-6 col-md-3 col-lg-4 d-none d-md-flex justify-content-center align-items-center">
                    <div className="advertisement-container__mockup"></div>
                </div>

            </div>
        </section>
    );
}

export default AdvertisementSection;