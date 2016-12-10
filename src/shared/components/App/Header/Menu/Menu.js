/* @flow */

import React from 'react';
import { Link } from 'found';
// We use `require` here instead of `import` to fix the issues detailed
// at https://github.com/styled-components/styled-components/issues/157
const styled = require('styled-components').default;

const StyledList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
`;

const StyledListItem = styled.li`
  float: left;

  .icon {
    display: none;
  }
`;

const StyledAnchor = styled.a`
  display: inline-block;
  color: #f2f2f2;
  text-align: center;
  margin: 0.5em 0;
  text-decoration: none;
  transition: 0.3s;
  font-family: Helvetica, Arial, sans-serif;

  &:hover {
    background-color: #555;
  }
`;

const StyledLink = styled(Link)`
  display: inline-block;
  color: #f2f2f2;
  text-align: center;
  margin: 0.5em 0;
  text-decoration: none;
  transition: 0.3s;
  font-family: Helvetica, Arial, sans-serif;

  &:hover {
    background-color: #555;
  }
`;

function LinkItem(props) {
  // TODO: Remove the pragma once evcohen/eslint-plugin-jsx-a11y#81 ships.
  return (
    <StyledListItem>
      <StyledLink // eslint-disable-line jsx-a11y/anchor-has-content
        {...props}
        activeStyle={{ fontWeight: 'bold' }}
      />
    </StyledListItem>
  );
}

function Menu() {
  return (
    <StyledList>
      <LinkItem to="/" exact>Home</LinkItem>
      <LinkItem to="/about" exact>About</LinkItem>
      <StyledListItem class="icon"><StyledAnchor>&#9776;</StyledAnchor></StyledListItem>
    </StyledList>
  );
}

export default Menu;
