import React from 'react';
import Header from '../components/Header';

function Competences() {
    return (
        <div>
            <Header />
            <h1>Mes compétences</h1>
            <div className='containerCompetence'>
                <div className='realiser'>
                    <h3>Réaliser</h3>
                    <p>Je suis capable de concevoir, coder et tester une application</p>
                    <li>
                        Projets :
                        <ul>- Ecocab</ul>
                        <ul>- WekinGames</ul>
                        <ul>- Gestus 2000</ul>
                    </li>
                </div>
                <div className='optimiser'>
                    <h3>Optimiser</h3>
                    <p>Je suis capable d'optimiser une application pour réduire son temps d'exécution et sa consommation de resources</p>
                    <li>
                        Projets :
                        <ul>- Ecocab</ul>
                        <ul>- WekinGames</ul>
                        <ul>- Gestus 2000</ul>
                    </li>
                </div>
                <div className='collaborer'>
                    <h3>Collaborer</h3>
                    <p>Je suis capable de travailler efficacement dans une équipe informatique</p>
                    <li>
                        Projets :
                        <ul>- Ecocab - Travail dans une équipe de 2</ul>
                        <ul>- WekinGames - Travail dans une équipe de 6</ul>
                        <ul>- Gestus 2000 - Travail dans une équipe de 2</ul>
                    </li>
                </div>
                <div className='gerer'>
                    <h3>Gérer</h3>
                    <p>Je suis capable de concevoir, gérer et exploiter des données stockées dans une base de données</p>
                    <li>
                        Projets :
                        <ul>- Ecocab - Utilisation d'une base de données MongoDB</ul>
                        <ul>- WekinGames - Utilisation d'une base de données MongoDB</ul>
                        <ul>- Gestus 2000 - Utilisation d'une base de données MySQL</ul>
                    </li>
                </div>
                <div className='conduire'>
                    <h3>Conduire</h3>
                    <p>Je suis capable d'organiser et piloter un projet informatique avec des méthodes agiles</p>
                    <li>
                        Projets :
                        <ul>- Ecocab - Utilisation de la méthode agile à l'aide de Trello</ul>
                        <ul>- WekinGames - Utilisation de la méthode agile à l'aide de GitLab board</ul>
                    </li>
                </div>
                <div className='administrer'>
                    <h3>Administrer</h3>
                    <p>Je suis capable d'installer, configurer et maintenir des services informatiques</p>
                    <li>
                        Projets :
                        <ul>- Ecocab - Sécurisation d'une base de données MongoDB</ul>
                        <ul>- WekinGames - Sécurisation d'une base de données MongoDB</ul>
                    </li>
                </div>
            </div>
        </div>
    );
}

export default Competences;