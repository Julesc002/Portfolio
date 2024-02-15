import React from 'react';
import Header from '../components/Header';
import photo from '../moi.png';

function Accueil() {
    return (
        <div>
            <Header />
            <h1>Portfolio de Jules Cayrol</h1>
            <h3>Je suis un étudiant en développement informatique en troisième année de BUT informatique à l'IUT de Paul Sabatier</h3>
            <img src={photo} alt="Moi" />
        </div>
    );
}

export default Accueil;