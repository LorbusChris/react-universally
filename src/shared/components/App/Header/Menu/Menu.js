/* @flow */

import React from 'react';
import { Link } from 'found';
// We use `require` here instead of `import` to fix the issues detailed
// at https://github.com/styled-components/styled-components/issues/157
const styled = require('styled-components').default;

const StyledMenu = styled.ul`
  margin-top: 1rem;
  background-color: #D4E6F1;
`;

const StyledLink = styled(Link)`
  color: #5F6A6A;
  display: inline-block;
  margin: 0.5em 0;
  text-decoration: none;
  font-family: Helvetica, Arial, sans-serif;

  &:hover {
    text-decoration: underline;
  }
`;

function StyledLinkItem(props) {
  // TODO: Remove the pragma once evcohen/eslint-plugin-jsx-a11y#81 ships.
  return (
    <li>
      <StyledLink // eslint-disable-line jsx-a11y/anchor-has-content
        {...props}
        activeStyle={{ fontWeight: 'bold' }}
      />
    </li>
  );
}

function Menu() {
  return (
    <StyledMenu>
      <StyledLinkItem to="/" exact>Home</StyledLinkItem>
      <StyledLinkItem to="/about" exact>About</StyledLinkItem>
    </StyledMenu>
  );
}

export default Menu;
