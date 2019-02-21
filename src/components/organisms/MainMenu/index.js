import React from 'react';
import './MainMenu.scss';
import List from '../../molecules/List';
import BrandLogo from '../../atoms/BrandLogo';

class MainMenu extends React.Component {
    closeMenu = () => {
        this.props.hideMenu();
    };
    render() {
        const mainMenuClasses = this.props.isMenuHidden ? 'wwn-main-menu' : 'wwn-main-menu expanded';
        const mainMenuNavClasses = this.props.isMenuHidden ? 'wwn-main-menu-nav' : 'wwn-main-menu-nav expanded';
        return (
            <div className={mainMenuClasses} onClick={this.closeMenu}>
                <nav className={mainMenuNavClasses} onClick={(e) => e.stopPropagation()}>
                    <BrandLogo className="wwn-brand-logo d-md-none" />
                    <List {...this.props} />
                </nav>
            </div>
        );
    }
}

export default MainMenu