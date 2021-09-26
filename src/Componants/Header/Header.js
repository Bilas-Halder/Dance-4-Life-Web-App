import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="header-container">
                <h1>Movie : Dance 4 Life</h1>
                <p>A movie about a dancer who's gonna fight in an International Dance Championship</p>
                <h2>Budget : $25 Million</h2>
            </div>
        </div>
    );
};

export default Header;