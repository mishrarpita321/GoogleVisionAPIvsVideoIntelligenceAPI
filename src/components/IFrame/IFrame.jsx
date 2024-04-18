import UploadBtn from "../UploadButton/UploadBtn";
import React, { useState } from 'react';

const IFrame = () => {
    const [fileSrc, setFileSrc] = useState(null);
    return (
        <>
            <iframe
                title="file-preview"
                // src={fileSrc ? fileSrc : 'https://www.youtube.com/embed/dQw4w9WgXcQ'}
                // src={fileSrc}
                srcDoc={fileSrc ? `<style>body, html {width: 100%; height: 100%; margin: 0; padding: 0; overflow: hidden;}</style><img src="${fileSrc}" style="width: 100%; height: 100%; object-fit: cover;" />` : ''}
                allowFullScreen
                style={{
                    width: '100%',
                    height: '400px',
                    border: '1px solid black',
                    backgroundColor: 'transparent',
                }}
            />
            <UploadBtn setFileSrc={setFileSrc} />
        </>
    );
};

export default IFrame;