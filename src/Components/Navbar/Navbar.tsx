import React from 'react';
import './Navbar.css'

const NavBar = () => {
  const date = new Date();
  return (
    <nav>
      <div className ="logo">
        <h1>Spelling Bees</h1>
        <p>{date.toDateString()}</p>
      </div>
      <div className ="user">
        <button>Sign Up</button>
        <button>Login</button>
      </div>
    </nav>
  );
};

export default NavBar;