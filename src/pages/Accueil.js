import React from 'react';
import Header from '../components/Header';
import photo from '../moi.jpg';

function Accueil() {
    return (
        <div>
            <Header />
            <div className='accueilContent'>
                <h1>Portfolio de Jules Cayrol</h1>
                <h3>Je suis un étudiant en développement informatique en troisième année de BUT informatique à l'IUT de Paul Sabatier</h3>
                <img className='imageMoi' src={photo} alt="Moi" />
            </div>
        </div>
    );
}

export default Accueil;