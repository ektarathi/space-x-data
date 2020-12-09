import * as React from "react";
import logo from '../assets/images/spacex-logo.png';
export interface HeaderProps {}

const Header: React.SFC<HeaderProps> = () => {

  const reloadContent = () => {
    window.location.reload(false);
  }

  return (
    <header>
      <div className="app-header">
          <div className="app-header__left-section">
            <img className="logo" src={logo} alt="Space X"/>
            <span>Launches</span>
          </div>
          <div className="app-header__right-section">
              <button className="reload-button" onClick={reloadContent}>Reload data</button>
          </div>
      </div>
    </header>
  );
};

export default Header;
