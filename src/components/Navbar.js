import React, { useState, useEffect } from 'react';
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import { Link } from 'react-router-dom';
import './Navbar.css';
import docs from '../Docs/Boit Whitepaper.pdf';
import logo from '../img/boit.png'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
     
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
           
              <img className='logo' src={logo} alt="Logo" />
           
          
           
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              
                  <Tooltip
        title="Coming Soon"
        placement="top"
      >
        <a
                href='#dex'
                className='nav-links'
                onClick={closeMobileMenu}
                style={{cursor: 'default'}}
              >Buy $BOIT </a>
      </Tooltip>
    
             
            </li>
            <li className='nav-item'>
              <a
                href='https://boit.club/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Boit Club
              </a>
            </li>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                NFT
              </Link>
            </li>
            <li className='nav-item'>
              <a
                href='#roadmap'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Roadmap
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='#tokenomics'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Tokenomics
              </a>
            </li>
            <li className='nav-item'>
              <Link
                to={docs}
                className='nav-links'
                onClick={closeMobileMenu}
                 target="_blank" download
              >
                Whitepaper
              </Link>
            </li>

           
          </ul>
          
        </div>
      </nav>
      
      </>
  );
}

export default Navbar;
