import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  // 'cookies', 'soda', 'icecream'
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/cookies'>Cookies</NavLink>
      <NavLink to='/soda'>Soda</NavLink>
      <NavLink to='/icecream'>Ice Cream</NavLink>
    </nav>
  );
};

export default NavBar;
