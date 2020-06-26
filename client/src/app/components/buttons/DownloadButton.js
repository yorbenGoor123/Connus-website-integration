import React from 'react';

const DownloadButton = ({size, img}) => {
    return (
        <img src={img} alt="download" className={`download-button download-${size}`} />
    )
};

export default DownloadButton;