import React from 'react';
import fichier from '../CV.pdf';
import Header from '../components/Header';

function CV() {
    return (
        <div>
            <Header />
            <h1>CV</h1>
            <iframe title="CV Document" src={fichier} width='100%' height='500px' />
        </div>
    );
}

export default CV;
