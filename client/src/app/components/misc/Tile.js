import React from 'react';

function Tile(props) {
    return (
        <div className="tile">
            <p className="tile__number">{props.number}</p>
            <p className="tile__title">{props.title}</p>
            <p className="tile__text">{props.text}</p>
        </div>
    );
}

export default Tile;