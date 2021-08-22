import React from 'react';
import '../header.css';
import '../App.css'

const Header = () => {
  return (
    <div className="header">
      <img src="/images/office_olympics_logo.png" alt="Logo" />
      <div className="leftalign">
        <p><strong>Project #5: React/Redux</strong> -- August 2021 -- Roshanak Agahi</p>
        <p>An app designed for companies to host team building challenges for their employees</p>
        </div>
    </div>
  )
}

export default Header;
