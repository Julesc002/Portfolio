import React from 'react';
import ReactPlayer from 'react-player';
import { NavLink } from 'react-router-dom';

const Accueil = () => {
    return (
        <div>
            <h1>Page accueil</h1>
            <NavLink to="/feur">
                    <button>go to feur</button>
            </NavLink>
            <ReactPlayer url="https://youtu.be/1qVTgh8bMxU?si=BAA1aBP7SiPhLoP3" style={{ width: '100%', height: '100%' }} playing={true} />
        </div>
    );
};

export default Accueil;