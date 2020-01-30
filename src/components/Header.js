import React from 'react';
import styled from '@emotion/styled';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import scissors from '../assets/icons8-scissors-64.png';

const AppHeader = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100px;
  width: 100%;
  background: #ecebea;
`;

const NavList = styled.ul`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  list-style: none;
`;

const NavElement = styled.li`
  text-decoration: none;
  font-weight: 600;
`;
const NavLink = styled(Link)`
  all: unset;
  color: black;
  transition: color 0.4s ease;
  &:visited {
    color: black;
  }
  &:hover {
    cursor: pointer;
    color: #e83865;
  }
`;

const AppLogo = styled.img`
  width: 64px;
`;

export default function Header(props) {
  return (
    <AppHeader>
      <NavList>
        <NavElement>
          <NavLink to={'/home'} onClick={props.onClick}>
            Home
          </NavLink>
        </NavElement>
        <NavElement>
          <NavLink to={'/'} onClick={props.onClick}>
            Service
          </NavLink>
        </NavElement>
        <NavElement>
          <NavLink to={'/'} onClick={props.onClick}>
            About Us
          </NavLink>
        </NavElement>
        <NavElement>
          <NavLink to={'/'} onClick={props.onClick}>
            Blog
          </NavLink>
        </NavElement>
        <AppLogo src={scissors} />
        <NavElement>
          <NavLink to={'/'} onClick={props.onClick}>
            Jobs
          </NavLink>
        </NavElement>
        <NavElement>
          <NavLink to={'/'} onClick={props.onClick}>
            Gallery
          </NavLink>
        </NavElement>
        <NavElement>
          <NavLink to={'/'} onClick={props.onClick}>
            Press
          </NavLink>
        </NavElement>
        <NavElement>
          <NavLink to={'/'} onClick={props.onClick}>
            Contact
          </NavLink>
        </NavElement>
      </NavList>
    </AppHeader>
  );
}
