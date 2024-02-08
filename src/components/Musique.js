import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import tunic1 from '../audio/tunic1.mp3';
import tunic2 from '../audio/tunic2.mp3';

const Musique = () => {
    const location = useLocation();
    const [currentLocation, setCurrentLocation] = useState(location);
    const executed = useRef(false);
    const audio1 = useRef(new Audio(tunic1));
    const audio2 = useRef(new Audio(tunic2));

    const fadeInOutDuration = 2000;

    const fadeInOut = (audioIn, audioOut) => {
        const interval = 100; // Intervalle entre chaque augmentation de volume
        const steps = fadeInOutDuration / interval; // Nombre d'étapes
        const deltaVolume = 1 / steps; // Variation de volume à chaque étape

        let currentStep = 0;

        const fadeFunction = () => {
            if (currentStep < steps) {
                if (audioIn.current.volume < 0.5) {
                    audioIn.current.volume = Math.min(0.5, audioIn.current.volume + deltaVolume);
                }
                if (audioOut.current.volume > 0) {
                    audioOut.current.volume = Math.max(0, audioOut.current.volume - deltaVolume);
                }
                currentStep++;
                setTimeout(fadeFunction, interval);
            }
        };
        

        fadeFunction();
    };

    useEffect(() => {
        if (!executed.current) {
            audio2.current.volume = 0;
            audio1.current.volume = 0;
            audio1.current.loop = true;
            audio2.current.loop = true;
            audio1.current.play();
            audio2.current.play();
            fadeInOut(audio1, audio2);
            executed.current = true;
        }
    }, []);

    useEffect(() => {
        if (currentLocation !== location) {
            if (audio1.current.volume > 0.1) {
                fadeInOut(audio2, audio1);
            } else {
                fadeInOut(audio1, audio2);
            }
            setCurrentLocation(location);
        }
        //console.log("1 : " + audio1.current.volume);
        //console.log("2 : " + audio2.current.volume);
    }, [location, currentLocation]);

    return (
        <div>
           
        </div>
    );
};

export default Musique;
