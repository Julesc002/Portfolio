import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Accueil from './pages/Accueil';
import AccueilBis from './pages/AccueilBis';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Accueil />} />
      <Route path='/feur' element={<AccueilBis />} />
    </Routes>
  );
};

export default App;
