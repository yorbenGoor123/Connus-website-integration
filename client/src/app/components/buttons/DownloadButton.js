import React from 'react';

const DownloadButton = ({size, img, pageRef}) => {
    return (
        <a href={pageRef} target="_blank" rel="noopener noreferrer">
            <img src={img} alt="download" className={`download-button download-${size}`} />
        </a>
    )
};

export default DownloadButton;