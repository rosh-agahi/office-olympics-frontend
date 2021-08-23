import React from 'react';
import '../header.css';
import '../App.css'

const Header = () => {
  return (
    <div className="header">
      <img src="/images/office_olympics_logo.png" alt="Logo" />
      <div className="textbox">
        <h1>Roshanak Agahi</h1>
        <h2>Project #5: React/Redux ○ August 2021</h2>
        <h3>An app designed for companies to host team building challenges for their employees</h3>
      </div>
    </div>
  )
}

export default Header;
