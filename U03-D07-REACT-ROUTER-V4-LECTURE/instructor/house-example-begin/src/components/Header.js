import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><Link to="/">Index</Link></li>
          <li><Link to="/house">House</Link></li>
          <li><Link to="/house/kitchen">Kitchen</Link></li>
          <li><Link to="/house/porch">Porch</Link></li>
        </ul>
      </nav>
    );
  }
}

export default Header;
