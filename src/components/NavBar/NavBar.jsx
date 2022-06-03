import React from 'react';
import './NavBar.scss';

function NavBar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-sm"
        style={{
          backgroundColor: '#1f1f1f', color: 'white', textDecoration: 'None', textAlign: 'Center',
        }}
      >

        <div className="container-fluid" style={{ justifyContent: 'space-around' }}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#pagecontainer">My Works</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>

      </nav>
    </div>

  );
}

export default NavBar;
