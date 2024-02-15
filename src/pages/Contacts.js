import React from 'react';
import Header from '../components/Header';

function Contacts() {
    return (
        <div>
            <Header />
            <h1>Contacts</h1>
            <p>
                Vous pouvez m'envoyer un mail via <a href="mailto:julescayrol@gmail.com">julescayrol@gmail.com</a>, me contacter sur <a href="https://www.linkedin.com/in/jules-cayrol-b938b0260/">linkedin</a> ou me téléphoner au <a href="tel:+33651958206">06 51 95 82 06</a>
            </p>
        </div>
    );
}

export default Contacts;