import React from 'react';
import imageConnect from '../../assets/detailpages/01-content-creator/illustrationConnect.svg';
import imageWorld from '../../assets/detailpages/01-content-creator/illustrationWorld.svg'
import imageInsights from '../../assets/detailpages/01-content-creator/illustrationInsights.svg'
import imageDesk from '../../assets/detailpages/01-content-creator/illustrationDesk.svg'
import style from './DetailFunctionalities.module.css'
import HeaderFunctionalities from '../../partials/HeaderFunctionalities/HeaderFunctionalities';
import HeaderImage from '../../assets/detailpages/01-content-creator/headerImage.svg'
import SectionInfo from '../../partials/SectionInfo/SectionInfo';
import Footer from '../../partials/Footer/Footer';
import { rootStore } from '../../../stores';
import { useObserver } from 'mobx-react-lite';



const DetailFunctionalities = () => {
    console.log(rootStore.functionalityStore.functionalities[1].sections);
    return useObserver(() => (
        <div className={style.detailWrapper}>
           <HeaderFunctionalities />
           
           <div className={style.detailPageLanding}>
               <div className={style.detailPageLanding__info}>
                    <p className={style.detailPageLanding__info__number}>01</p>
                    <p className={style.detailPageLanding__info__title}>Professional network</p>
               </div>
                <img className={style.detailPageLanding__headerImage} src={HeaderImage} alt="headerImage"></img>
           </div>

           
            <ul className={style.detailPage__MenuItems}>
                <li className={style.detailPage__MenuItem}>What are other content creators up to?</li>
                <li className={style.detailPage__MenuItem}>Connect with the world. </li>
                <li className={style.detailPage__MenuItem}>Share tips, tricks, and insights.</li>
                <li className={style.detailPage__MenuItem}>On the road or at your desk?</li>
            </ul>

            <SectionInfo 
            title="What are other content creators up to?" 
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." 
            illustration={imageConnect} 
            direction="right" />

            <SectionInfo 
            title="Connect with the world. " 
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." 
            illustration={imageWorld} 
            direction="left"
            marginLeft="10rem" />

            <SectionInfo 
            title="Share tips, tricks and insights" 
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." 
            illustration={imageInsights} 
            direction="right"
            marginRight="10rem" />

            <SectionInfo 
            title="On the road or at your desk" 
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." 
            illustration={imageDesk} 
            direction="left"
            marginLeft="10rem" />
           
           <Footer />
        </div>

        
    ));
};

export default DetailFunctionalities;