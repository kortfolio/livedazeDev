import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">Livedaze from NavBar</Link>
            </div>
        </nav>
    )
}
export default NavBar

