import React from 'react';
// import { Link } from 'react-router-dom';
import './Header.css';
import Link from '../CustomLink/CustomLink'

const Header = () => {
    return (
        <div>
            <h1>Welcome to my new website</h1>
            <nav>
                <Link to='/home'>Home</Link>
                <Link to='/Orders'>Order Review</Link>
                <Link to='/grandpa'>Grandpa</Link>
            </nav>
        </div>
    );
};

export default Header;