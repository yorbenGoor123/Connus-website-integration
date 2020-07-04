import React, { Fragment } from 'react';

import { SectionTitle, Text } from '../typography';
import { PageTypeSwitch } from '../buttons';

import '../../_sass/components/misc/Popup.scss';

const Popup = (props) => {
    return (
        <Fragment>
            <div className="popup-fullscreen"></div>
            <div className="popup-container">
                <div className="popup"> 
                    <SectionTitle 
                        text="Welcome"
                        color="blue-font"
                    />

                    <div className="popup__page-type">
                        <Text 
                            text="I am"
                            color="blue-font"
                        />
                        <PageTypeSwitch/>

                    </div>

                    <div className="popup__email">

                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Popup;