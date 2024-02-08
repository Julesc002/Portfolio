import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import tunic1 from '../audio/tunic1.mp3';
import tunic2 from '../audio/tunic2.mp3';

const Musique = () => {
    const location = useLocation();
    const executed = useRef(false);
    const audio1 = useRef(new Audio(tunic1));
    const audio2 = useRef(new Audio(tunic2));

    useEffect(() => {
        if (!executed.current) {
            audio2.current.volume = 0;
            audio1.current.play();
            audio2.current.play();
            executed.current = true;
        }
    }, []);

    useEffect(() => {
        if (executed.current) {
            if (audio1.current.volume === 1) {
                audio1.current.volume = 0;
                audio2.current.volume = 1;
            } else {
                audio1.current.volume = 1;
                audio2.current.volume = 0;
            }
        }
    }, [location]);

    return <></>;
};

export default Musique;
