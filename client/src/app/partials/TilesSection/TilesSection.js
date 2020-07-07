import React, { Fragment } from 'react';
import Parser from 'html-react-parser';

import { useLanguage } from '../../services';
import Tile from '../../components/misc/Tile'

function TilesSection(props) {
    const { getText } = useLanguage(); 
    const text = getText("influencer");

    return (
        <Fragment>
            <div className="tiles-section-container-lg d-none d-lg-flex">
                <section className="tiles-section col-12 col-md-8">
                    <Tile
                        number="1"
                        title={Parser(text["tile_one_title"])}
                        text={Parser(text["tile_one_text"])}
                    /> 
                    <Tile 
                        number="2"
                        title={Parser(text["tile_two_title"])}
                        text={Parser(text["tile_two_text"])}
                    /> 
                    <Tile 
                        number="3"
                        title={Parser(text["tile_three_title"])}
                        text={Parser(text["tile_three_text"])}
                    /> 
                </section>
            </div>
            <div className="tiles-section-container d-lg-none">
                <section className="tiles-section  col-12 ">
                    <Tile
                        number="1"
                        title={Parser(text["tile_one_title"])}
                        text={Parser(text["tile_one_text"])}
                    /> 
                    <Tile 
                        number="2"
                        title={Parser(text["tile_two_title"])}
                        text={Parser(text["tile_two_text"])}
                    /> 
                    <Tile 
                        number="3"
                        title={Parser(text["tile_three_title"])}
                        text={Parser(text["tile_three_text"])}
                    /> 
                </section>
            </div>
         </Fragment>
    );
}

export default TilesSection;