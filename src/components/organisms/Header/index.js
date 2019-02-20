import React from 'react';
import './Header.scss';
import Logo from '../../atoms/Logo';
import MenuButton from '../../atoms/MenuButton';
import MainMenu from '../MainMenu';

const menuLinks = [
    {
        title: 'People Portal',
        link: 'https://peopleportal2.sapient.com'
    },
    {
        title: 'VOX',
        link: 'https://vox.publicis.sapient.com'
    },
    {
        title: 'Women Leadership Network',
        link: 'https://vox.publicis.sapient.com/groups/women-s-leadership-network'
    }
];

const Header = () => (
    <header>
        <div className="wwn-header-content">
            <Logo href="https://www.publicissapient.com" />
            <MenuButton />
            <MainMenu list={menuLinks} type="links" />
        </div>
    </header>
);

export default Header;