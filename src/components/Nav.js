import React from 'react';
import styled from '@emotion/styled';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import scissors from '../assets/icons8-scissors-64.png';
import BurgerButton from './BurgerButton';

const AppHeader = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100px;
  width: 100%;
  background: #ecebea;
  @media screen and (max-width: 600px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

const NavList = styled.ul`
  display: ${(props) => (props.widescreen === true ? 'flex' : 'none')};
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  list-style: none;
`;

const NavElement = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  font-weight: 600;
  height: 100%;
`;
const NavLink = styled(Link)`
  all: unset;
  color: black;
  transition: color 0.4s ease;
  &:visited {
    color: black;
  }
  &:after,
  &:before {
    display: block;
    content: '';
    border-bottom: solid 3px #019fb6;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }

  &:before {
    position: absolute;
    bottom: 1.2em;
    left: 0;
    width: 100%;
  }

  &:hover {
    cursor: pointer;
    color: #e83865;
    border-bottom: solid 1px black;
  }
`;

const AppLogo = styled.img`
  width: 64px;
`;

export default function Header(props) {
  const [isWidescreen, setWidescreen] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  function sizeHandler() {
    if (window.innerWidth <= 600) {
      setWidescreen(false);
    } else {
      setWidescreen(true);
    }
  }

  React.useEffect(() => {
    sizeHandler();
    window.addEventListener('resize', sizeHandler);
    return () => window.removeEventListener('resize', sizeHandler);
  }, []);

  return (
    <AppHeader>
      <BurgerButton
        showButton={isWidescreen === true ? false : true}
        open={open}
        onClick={() => (open === true ? setOpen(false) : setOpen(true))}
      />
      <NavList widescreen={isWidescreen}>
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
