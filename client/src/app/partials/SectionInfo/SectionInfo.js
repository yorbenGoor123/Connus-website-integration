import React from 'react';

import style from './SectionInfo.module.css'

const SectionInfo = ({direction, title, text, illustration, marginLeft, marginRight}) => {
    return (
        <div className= {(direction === "left" ? style.detailPageSectionInfo__wrapper: style.directionLeft)}>
            <div className={style.detailPageSectionInfo__paragraphs}>
                <h2 className={style.detailPageSectionInfo__title}>{title}</h2>
                <p className={style.detailPageSectionInfo__paragraph}>{text}</p>
            </div>
            <img  style={{marginLeft: `${marginLeft}`, marginRight:`${marginRight}`}} className={style.illustration}  src={require(`../../assets/detailpages/01-content-creator/illustration${illustration}.svg`)} alt="imageConnect"></img>
        </div>
    );
};

export default SectionInfo;