import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Accueil from './pages/Accueil';

const App = () => {
  return (
    <Routes>
      <Route path='*' element={<Accueil />} />
    </Routes>
  );
};

export default App;
