import React, { Fragment } from 'react';

function Tile(props) {
    return (
            <div className="tile">
                <img className="tile__icon" src={require(`../../assets/icons/${props.icon}.svg`)}/>
                <p className="tile__title">{props.title}</p>
                <p className="tile__text">{props.text}</p>
            </div>
    );
}

export default Tile;