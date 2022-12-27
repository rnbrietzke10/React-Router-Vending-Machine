import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Snack from './Snack';

const VendingMachine = () => {
  const snacks = ['cookies', 'soda', 'icecream'];
  return (
    <div>
      <NavBar />
      <h3>Types of snacks</h3>
      <Routes>
        {snacks.map(snack => (
          <Route exact path={`/${snack}`} element={<Snack snack={snack} />} />
        ))}
      </Routes>
    </div>
  );
};

export default VendingMachine;
