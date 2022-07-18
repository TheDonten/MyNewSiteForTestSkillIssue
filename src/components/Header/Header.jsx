import React from 'react';
import headers_s from './Header.module.css'


const Header = () => {
    return (
        <header className={headers_s.header}>
            <img src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/2560px-Playstation_logo_colour.svg.png' alt = "Kal"/>
        </header>
    );
}



export default Header;