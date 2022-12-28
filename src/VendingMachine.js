import React from 'react';
import { Link } from 'react-router-dom';

import './VendingMachine.css';

const VendingMachine = ({ snacks }) => {
  return (
    <div className='wrapper'>
      <h3>Types of snacks</h3>
      <main className='main-container '>
        <div id='snack-machine' className='img-lg'></div>
        <div className='snack-option-container'>
          {snacks.map(snack => (
            <Link to={snack.id}>
              <img
                alt={snack.snackName}
                src={snack.img}
                className='img-sm img-link'
              />
            </Link>
          ))}
        </div>
        <div id='soda-machine' className='img-lg'></div>
      </main>
    </div>
  );
};

export default VendingMachine;
