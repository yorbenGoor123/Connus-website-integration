import React, { useEffect } from 'react';
import HeaderFunctionalities from '../../partials/HeaderFunctionalities/HeaderFunctionalities';
import { uiStore } from '../../../stores/UiStore';
import SectionInfo from '../../partials/SectionInfo/SectionInfo';
import { Footer } from '../../partials';
import { rootStore } from '../../../stores';
import style from './HowDoesItWork.module.css';
import { autorun } from 'mobx';
import { useObserver } from 'mobx-react-lite';



const HowDoesItWork = () => {

    useEffect (() => autorun(() => {
        setTimeout(() => {
            uiStore.loaded();
        }, 800);
        
    }));

    let functionalityArray = [];
    for (let i = 1; i<= rootStore.functionalityStore.filteredFunctionalities.length; i++){
      let functionality = rootStore.functionalityStore.filteredFunctionalities.find(functionality => functionality.sorted === i);
      functionalityArray.push(functionality);
      
    }

    
    
    return useObserver(() => (

        
        <div>
            {uiStore.isLoaded ? (
                <>
                            <HeaderFunctionalities/>
            <div className={style.HiwTitleContainer}>
                <h1 className={style.HiwTitle}>How does it work</h1>
            </div>



            {functionalityArray.map(section => (
                <p>{section.title}</p>    
            ))}
                <Footer />
                </>
            ): null}

        </div>
    ));
};

export default HowDoesItWork;