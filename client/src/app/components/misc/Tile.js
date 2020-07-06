import React, { Fragment } from 'react';

function Tile(props) {
    return (
        <div className="tile-container col-12 col-md-6">
            <p className="tile__number">{props.number}</p>
            <div className="tile">
                <p className="tile__title">{props.title}</p>
                <p className="tile__text">{props.text}</p>
            </div>
        </div>
    );
}

export default Tile;