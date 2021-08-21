import React from 'react';
import '../header.css';
import '../App.css'

const Header = () => {
  return (
    <div className="header">
      <img src="/images/office_olympics_logo.png" alt="Logo" />
      <button>New Challenge</button>
    </div>
  )
}

export default Header;
