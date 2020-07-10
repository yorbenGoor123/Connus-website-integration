import React, { Fragment } from 'react';
import Parser from 'html-react-parser';

import { useLanguage } from '../../services';
import Tile from '../../components/misc/Tile'

function TilesSection(props) {
    const { getText } = useLanguage(); 
    const text = getText("content-creator");

    return (
        <Fragment>
                <section className="tiles-section-container d-none d-lg-flex">
                    <div className="tiles-section col-12 col-md-8 flex-column flex-md-row ">
                    <Tile
                        icon="money-blue"
                        title={Parser(text["tile_one_title"])}
                        text={Parser(text["tile_one_text"])}
                    /> 
                    <Tile 
                        icon="handshake"
                        title={Parser(text["tile_two_title"])}
                        text={Parser(text["tile_two_text"])}
                    /> 
                    <Tile 
                        icon="connect"
                        title={Parser(text["tile_three_title"])}
                        text={Parser(text["tile_three_text"])}
                    /> 
                    </div>
                </section>
                <section className="tiles-section-container-sm d-lg-none">
                    <div className="tiles-section col-12 col-md-8 flex-column ">
                    <Tile
                        icon="money-blue"
                        title={Parser(text["tile_one_title"])}
                        text={Parser(text["tile_one_text"])}
                    /> 
                    <Tile 
                        icon="handshake"
                        title={Parser(text["tile_two_title"])}
                        text={Parser(text["tile_two_text"])}
                    /> 
                    <Tile 
                        icon="connect"
                        title={Parser(text["tile_three_title"])}
                        text={Parser(text["tile_three_text"])}
                    /> 
                    </div>
                </section>
         </Fragment>
    );
}

export default TilesSection;