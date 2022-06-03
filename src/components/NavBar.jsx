import React from 'react';
import './NavBar.scss';

function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-dark">

                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#PageContainerReact">My Works</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>

            </nav>
        </div>

    );
}

export default NavBar;
