import React from 'react';
import '../header.css';
import '../App.css'

const Header = () => {
  return (
    <div className="header">
      <img src="/images/office_olympics_logo.png" alt="Logo" />
      <div>
        <h3>Project #5: React</h3>
        <p>August 2021</p>
        <p>Roshanak Agahi</p>
      </div>
      <p>An app designed for companies to host team building challenges for their employees</p>
      <button>New Challenge</button>
    </div>
  )
}

export default Header;
