import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import NavigationMenu from '../../SharedComponents/NavigationMenu/NavigationMenu';
import './Header.css'

const Header = () => {
  return (
    <div className="header-container">
      <NavigationMenu></NavigationMenu>
      <HeaderMain></HeaderMain>
    </div>
  );
};

export default Header;