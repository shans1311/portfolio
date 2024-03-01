import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; 

function Navbar() {
    return (
        <div>
            <nav className="NavBar">
                <Link to="/" className="nav-link">
                    Experience<span className="underline"></span>
                </Link>
                <Link to="/about" className="nav-link">
                    About me<span className="underline"></span>
                </Link>
            </nav>
        </div>
    );
}

export default Navbar;
