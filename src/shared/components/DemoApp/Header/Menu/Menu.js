/* @flow */
// TODO: reenable
/* eslint-disable */
import React from 'react';
import { Link } from 'found';

function LinkItem(props) {
  // TODO: Remove the pragma once evcohen/eslint-plugin-jsx-a11y#81 ships.
  return (
    <li>
      <Link // eslint-disable-line jsx-a11y/anchor-has-content
        {...props}
        activeStyle={{ opacity: '.65' }}
      />
    </li>
  );
}

function Menu() {
  return (
    <nav>
      <ul className="nav-header">
        <li className="nav-logo-desktop"><a href="#"><img alt="Logo" src="http://c0042.paas1.ams.modxcloud.com/wp-content/uploads/2016/11/Nah-Buteh-Mahogany-Park-Logo-web-1.png" /></a></li>
        <li className="nav-logo-mobile-left"><a href="#"><img src="https://picload.org/image/ralapdwo/nahbuteh-nav-logo-mobile.png" alt="MobileLogo" /></a></li>
        <li className="nav-logo-mobile-center"><a href="#">NAH-BUTEH</a></li>
        <li className="nav-menuicon"><label htmlFor="nav-menustate">&#8801;</label></li>
      </ul>
      <ul className="nav-list">
        <LinkItem to="/" exact>Home</LinkItem>
        <LinkItem to="/about" exact>About</LinkItem>
      </ul>
    </nav>
  );
}

export default Menu;
