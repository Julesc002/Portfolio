import React, { useEffect, useRef } from 'react';
import audio from '../audio/audio.mp3';

const AccueilBis = () => {

    const executed = useRef(false);

    useEffect(() => {
        if (!executed.current) {
            new Audio(audio).play();
            executed.current = true;
        }
    }, []);

    return (
        <div>
            <h1>Page accueil bis ratio ahah</h1>
        </div>
    );
};

export default AccueilBis;