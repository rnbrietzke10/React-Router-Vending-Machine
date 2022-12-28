import React from 'react';
import './Snack.css';

const Snack = ({ snack }) => {
  return (
    <div className='snack-container'>
      <h2>{snack.snackName}</h2>
      <img
        id={snack.id}
        className='img-md'
        alt={snack.snackName}
        src={snack.img}
      />
    </div>
  );
};

export default Snack;
