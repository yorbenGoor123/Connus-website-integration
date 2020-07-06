import React from 'react';
import Parser from 'html-react-parser';

import { useLanguage, ToolboxContext } from '../../services';
import Tile from '../../components/misc/Tile'

import '../../_sass/partials/TilesSection.scss'

function TilesSection(props) {
    const { getText } = useLanguage(); 
    const text = getText("influencer");

    return (
        <section className="tiles-section col-12 col-md-8">
            <div className="col-12 col-md-4">
                <Tile
                    number="1"
                    title={Parser(text["tile_one_title"])}
                    text={Parser(text["tile_one_text"])}
                /> 
            </div>
            <div className="col-12 col-md-4">
            <Tile 
                number="2"
                title={Parser(text["tile_two_title"])}
                text={Parser(text["tile_two_text"])}
            /> 
            </div>

            <div className="col-12 col-md-4">
            <Tile 
                number="3"
                title={Parser(text["tile_three_title"])}
                text={Parser(text["tile_three_text"])}
            /> 
            </div>
        </section>
    );
}

export default TilesSection;