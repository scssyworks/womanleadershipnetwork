import React from 'react';
import './Header.scss';
import Logo from '../../atoms/Logo';
import MenuButton from '../../atoms/MenuButton';


const Header = () => (
    <header>
        <div className="wwn-header-content">
            <Logo href="https://www.publicissapient.com" />
            <MenuButton />
        </div>
    </header>
);

export default Header;