import React from 'react';
import './MainMenu.scss';
import List from '../../molecules/List';

const MainMenu = (props) => (
    <div className="wwn-main-menu">
        <nav className="wwn-main-menu-nav">
            <List {...props} />
        </nav>
    </div>
);

export default MainMenu