import React from 'react';
import './header.scss';

const Header = props => {
  return (
    <header className="header" data-test="headerComponent">
      <div className="wrap">
        <div className="logoImg">
          Logo
        </div>
      </div>
    </header>
  )
}
export default Header;