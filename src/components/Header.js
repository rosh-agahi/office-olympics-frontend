import React from 'react';
import '../header.css';
import '../App.css'

const Header = () => {
  return (
    <div className="header">
      <img src="/images/office_olympics_logo.png" alt="Logo" />
      <div className="leftalign">
        <h2>Project #5: React/Redux -- August 2021 -- Roshanak Agahi</h2>
        <p className="leftalign">An app designed for companies to host team building challenges for their employees</p>
        </div>
    </div>
  )
}

export default Header;
