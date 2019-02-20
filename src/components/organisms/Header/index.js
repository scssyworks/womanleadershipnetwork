import React from 'react';
import './Header.scss';
import Logo from '../../atoms/Logo';
import VisibleMenu from '../../hoc/VisibleMenu';
import VisibleMenuButton from '../../hoc/VisibleMenuButton';
import BrandLogo from '../../atoms/BrandLogo';

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
            <VisibleMenuButton />
            <VisibleMenu list={menuLinks} type="links" />
            <BrandLogo className="wwn-brand-logo d-none d-md-block" />
        </div>
    </header>
);

export default Header;