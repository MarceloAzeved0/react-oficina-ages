import React from 'react';
import AGES from '../../assets/AGES.png';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <img className="logoAges" src={AGES} alt="Logo Ages" />
      </div>
    </header>
  );
}

export default Header;
