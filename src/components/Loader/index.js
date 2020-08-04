import React from 'react';
import AGES from '../../assets/AGES.png'
import './styles.css'

function Header() {
  return (
    <div className='header'>
      <img className='logoAges' src={AGES} alt='Logo Ages'/>
    </div>
  );
}

export default Header;