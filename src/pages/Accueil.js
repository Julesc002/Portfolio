import React from 'react';
import { NavLink } from 'react-router-dom';

const Accueil = () => {
    return (
        <div>
            <h1>Page accueil</h1>
            <NavLink to="/feur">
                    <button>go to feur</button>
            </NavLink>
        </div>
    );
};

export default Accueil;