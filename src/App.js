import './App.css';
import VendingMachine from './VendingMachine';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Snack from './Snack';
import cookies from './images/cookies.png';
import soda from './images/soda.png';
import icecream from './images/iceCream.png';
import doughnuts from './images/doughnuts.png';
import chips from './images/chips.png';

import './VendingMachine.css';

function App() {
  const snacks = [
    { id: 'cookies', snackName: 'Cookies', img: cookies },
    { id: 'soda', snackName: 'Soda', img: soda },
    { id: 'icecream', snackName: 'Ice Cream', img: icecream },
    { id: 'doughnuts', snackName: 'Doughnuts', img: doughnuts },
    { id: 'chips', snackName: 'Chips', img: chips },
  ];
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<VendingMachine snacks={snacks} />} />
        {snacks.map(snack => (
          <Route
            exact
            path={`/${snack.id}`}
            element={<Snack snack={snack} />}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
