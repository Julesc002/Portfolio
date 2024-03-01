import React from 'react';
import Header from '../components/Header';
import ecocab from '../ecocab.png';
import quidditch from '../quidditch.png';
import wekingame from '../wekingame.png';

function Projets() {
    return (
        <div>
            <Header />
            <h1>Mes projets</h1>
            <div className='containerProjet'>
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
                <div className='Quidditch'>
                    <h3>Projet de groupe : Gestus 2000 - Site de gestion d'équipe de Quidditch</h3>
                    <img className='image_quidditch' src={quidditch} alt="quidditch" />
                    <p>Ce site est hébergé <a href="https://projetphpquidditch.000webhostapp.com/">içi</a></p>
                    <p>Vous pouvez vous connecter avec le login "guest" et le mot de passe "1234"</p>
                </div>
            </div>
        </div>
    );
}

export default Projets;