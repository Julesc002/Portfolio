import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {

    return (
    <header class="topnav">
        <NavLink to="/">
            <button class="active" >Accueil</button>
        </NavLink>
        <NavLink to="/CV">
            <button>CV</button>
        </NavLink>
        <NavLink to="/Competences">
            <button>Compétences</button>
        </NavLink>
        <NavLink to="/projets">
            <button>Projets</button>
        </NavLink>
        <NavLink to="/Contacts">
            <button>Contacts</button>
        </NavLink>
    </header>
  )
}

export default Header