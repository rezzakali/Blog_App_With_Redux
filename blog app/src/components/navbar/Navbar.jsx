import React from 'react';
import { Link } from 'react-router-dom';
import LWSLogo from '../../assets/LWSBlog.svg';
import Button from './Button';

function Navbar() {
  return (
    <nav className="py-4 border-b">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">
            <img src={LWSLogo} alt="search" />
          </Link>
        </div>

        <div className="auth-buttons">
          <Button style={'btn btn-primary'} title={'sign in'} />
          <Button style={'btn btn-outline'} title={'sign up'} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
