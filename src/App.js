import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Background from './components/Background';
import Musique from './components/Musique';
import Accueil from './pages/Accueil';
import CV from './pages/CV';
import Competences from './pages/Competences';
import Contacts from './pages/Contacts';
import Projets from './pages/Projets';

const App = () => {
  return (
    <div className="background-content">
      <Musique />
      <Routes>
        <Route path='/' element={<Accueil />} />
        <Route path='/CV' element={<CV />} />
        <Route path='/Competences' element={<Competences />} />
        <Route path='/Contacts' element={<Contacts />} />
        <Route path='/Projets' element={<Projets />} />
      </Routes>
      <Background />
    </div>
  );
};

export default App;
