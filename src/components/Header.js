import React from 'react';
import '../header.css';
import '../App.css'

const Header = () => {
  return (
    <div className="header">
      <img src="/images/office_olympics_logo.png" alt="Logo" />
      <div className="leftalign">
        <span><strong>Project #5: React</strong></span><br />
        <span>August 2021</span><br />
        <span>Roshanak Agahi</span>
      </div>
      <span className="appDescr">An app designed for companies to host team building challenges for their employees</span>
      <button className="oneline">New Challenge</button>
    </div>
  )
}

export default Header;
