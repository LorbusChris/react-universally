/* @flow */

import React from 'react';
import Menu from './Menu';

function Header() {
  return (
    <div>
      <input id="nav-menustate" type="checkbox" />
      <Menu />
    </div>
  );
}

export default Header;
