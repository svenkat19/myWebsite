import React from 'react';
import './Navbar.css';  // Import the CSS file for styles

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-translucent">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#" style={{ fontWeight: 'bold' }}>
                <img src="/icons/home.png" alt="home" className="nav-icon" />
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
