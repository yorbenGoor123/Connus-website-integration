import React, { useEffect } from 'react';
import style from './DetailFunctionalities.module.css'
import HeaderFunctionalities from '../../partials/HeaderFunctionalities/HeaderFunctionalities';

import SectionInfo from '../../partials/SectionInfo/SectionInfo';
import Footer from '../../partials/Footer/Footer';
import { rootStore } from '../../../stores';
import { useObserver } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import { uiStore } from '../../../stores/UiStore';
import { autorun } from 'mobx';
import { useStore } from '../../../hooks';





const DetailFunctionalities = () => {


    const { id } = useParams();
    const {uiStore} = useStore();

        
    
    useEffect (() => autorun(() => {
        setTimeout(() => {
            uiStore.loaded();
        }, 800);
        
    }));

    
            

            uiStore.setFunctionality(rootStore.functionalityStore.findFunctionalityById(id));
            console.log(rootStore.functionalityStore.functionalities);
  

    

  
    
    return useObserver(() => (
        <div className={style.detailWrapper}>
           <HeaderFunctionalities />
        
           {uiStore.isLoaded && uiStore.selectedFunctionality ? (
               <>
               <div className={style.detailPageLanding}>
               <div className={style.detailPageLanding__info}>
                    
                    <p className={style.detailPageLanding__info__title}>{uiStore.selectedFunctionality.title}</p>
               </div>
                <img className={style.detailPageLanding__headerImage} src={require(`../../assets/detailpages/01-content-creator/header${uiStore.selectedFunctionality.image}.svg`)} alt="headerImage"></img>
           </div>

           
            <ul className={style.detailPage__MenuItems}>
                {uiStore.selectedFunctionality.sections.map(section => (
                            <>
                                <li key={section.id} className={style.detailPage__MenuItem}>{section.title}</li>
                            </>
                ))}

            </ul>


            {uiStore.selectedFunctionality.sections.map(section => (
                    <SectionInfo key={section.id}
                    title={section.title} 
                    text={section.text} 
                    illustration={section.image} 
                    direction={section.direction}
                    marginLeft={section.marginLeft}
                    marginRight = {section.marginRight} />
            ))}
           <Footer />
           </>
           ): null}
        
           
        </div>

        
    ));
};

export default DetailFunctionalities;