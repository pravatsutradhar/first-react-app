import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='main-header'>
         <nav className="navbar">
          <div className="container">
            <div className="logo">
              <Link to="/">MyApp</Link>
            </div>
            <button className="menu-toggle" onClick={toggleMenu}> ☰</button>
            
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
              <li><Link to="/" > Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li>
                <Link to="/contact">
                  Contact
                </Link>
              </li>
            </ul>

          </div>
        </nav>
    </header>
  );
};

export default Header;
