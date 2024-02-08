import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();

    return (
        <header className="topnav">
            <NavLink exact to="/" isActive={() => location.pathname === "/"}>
                <button className={location.pathname === "/" ? "active" : ""}>Accueil</button>
            </NavLink>
            <NavLink to="/CV" isActive={() => location.pathname.startsWith("/CV")}>
                <button className={location.pathname.startsWith("/CV") ? "active" : ""}>CV</button>
            </NavLink>
            <NavLink to="/Competences" isActive={() => location.pathname.startsWith("/Competences")}>
                <button className={location.pathname.startsWith("/Competences") ? "active" : ""}>Compétences</button>
            </NavLink>
            <NavLink to="/projets" isActive={() => location.pathname.startsWith("/projets")}>
                <button className={location.pathname.startsWith("/projets") ? "active" : ""}>Projets</button>
            </NavLink>
            <NavLink to="/Contacts" isActive={() => location.pathname.startsWith("/Contacts")}>
                <button className={location.pathname.startsWith("/Contacts") ? "active" : ""}>Contacts</button>
            </NavLink>
        </header>
    )
}

export default Header;
