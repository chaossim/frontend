import React from 'react';

const NavHeader = () => {
    return (
        <header className="nav-header">
            <nav className="navbar">
                <div className="navbar-brand">
                    <a href="#">Logo</a>
                </div>
                <div className="navbar-menu">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default NavHeader;
