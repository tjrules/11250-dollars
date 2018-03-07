import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className='logo'>Ice Cream!</div>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/ice-cream'>Ice Cream</Link></li>
          <li><Link to='/add'>Add New Ice Cream</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
