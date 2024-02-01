import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Accueil from './pages/Accueil';

const App = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Navigate to='/Julesc002/Portfolio' replace />}
      />
      <Route path='/Julesc002/Portfolio' element={<Accueil />} />
    </Routes>
  );
};

export default App;
