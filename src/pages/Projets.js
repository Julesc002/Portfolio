import React from 'react';
import Header from '../components/Header';
import ecocab from '../ecocab.png';
import wekingame from '../wekingame.png';

function Projets() {
    return (
        <div>
            <Header />
            <h1>Projets</h1>
            <div className='Ecocab'>
                <h3>Stage : Ecocab - Développement d'un MVP d'une application de covoiturage</h3>
                <img className='image_ecocab' src={ecocab} alt="ecocab" />
                <p>Code disponible sur mon <a href="https://github.com/Julesc002/Stage-Ecocab">Github</a></p>
            </div>
            <div className='Wekingame'>
                <h3>Projet de groupe : WekinGame - Site de gestion de wiki sur les jeux vidéos</h3>
                <img className='image_wekingame' src={wekingame} alt="wekingame" />
                <p>Code disponible sur mon <a href="https://github.com/Julesc002/WekinGame">Github</a></p>
            </div>
        </div>
    );
}

export default Projets;