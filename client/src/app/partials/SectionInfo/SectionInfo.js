import React, { useEffect } from 'react';

import style from './SectionInfo.module.css'
import left from '../../assets/detailpages/01-content-creator/left.svg';
import right from '../../assets/detailpages/01-content-creator/right.svg';

import Aos from 'aos';
import "aos/dist/aos.css"


const SectionInfo = ({direction, title, text, illustration, marginLeft, marginRight, sectionId}) => {

    useEffect (() =>  {
        Aos.init({duration: 2000})
    });
    return (
        <div id={sectionId} className={style.detailWrapper}>
        <div data-aos={(direction === "left" ? "fade-left": "fade-right" )} data-aos-offset="300"  className= {(direction === "left" ? style.detailPageSectionInfo__wrapper: style.directionLeft)}>
            <div  className={style.detailPageSectionInfo__paragraphs}>
                <h2 className={style.detailPageSectionInfo__title}>{title}</h2>
                <p className={style.detailPageSectionInfo__paragraph}>{text}</p>
            </div>

            <div className={style.sectionInfo__imageContainer}>
            <img className={style.illustration}  src={require(`../../assets/detailpages/01-content-creator/illustration${illustration}.svg`)} alt="imageConnect"></img>
            </div>
        </div>
        <div className={style.overflow}>
        {direction === "left" ? (
            <img className={style.direction} src={left} alt="left"></img>
        ): direction === "right" ? (
            <img className={style.direction} src={right} alt="right"></img>
        ): direction === "last" ? (
            null
        ): null }

        
        
        </div>
        </div>
    );
};

export default SectionInfo;