import React from 'react';
import ReactPlayer from 'react-player';
import fichier from '../CV.pdf';
import Header from '../components/Header';

function CV() {
    return (
        <div>
            <Header />
            <div className='CV_content'>
                <div className='CV'>
                    <h1>CV</h1>
                    <iframe title="CV Document" src={fichier} width='100%' height='1000px' />
                </div>
                <div className='CV_video'>
                    <h1>CV vidéo</h1>
                    <ReactPlayer url="https://youtu.be/1qVTgh8bMxU?si=BAA1aBP7SiPhLoP3" style={{ width: '100%', height: '100%' }} />
                </div>
            </div>
        </div>
    );
}

export default CV;
