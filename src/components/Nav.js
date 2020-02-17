import React from 'react';
import styled from '@emotion/styled';
import scissors from '../assets/icons8-scissors-64.png';
import Menu from './Menu';
import BurgerButton from './BurgerButton';
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from 'react-scroll';

const AppHeader = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
  background: #232a34;
  @media screen and (max-width: 600px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
  }
`;

const Logo = styled.h1`
  font-size: 20px;
  margin-left: 15px;
  color: whitesmoke;
  font-family: 'Dancing Script', cursive;
`;

const NavList = styled.ul`
  display: ${(props) => (props.widescreen === true ? 'flex' : 'none')};
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
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
  color: whitesmoke;
  padding: 14px 20px;
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

const NavElement1 = styled.p`
  all: unset;
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
      <Logo>BARBERSPACE</Logo>
      <BurgerButton
        showButton={isWidescreen === true ? false : true}
        open={open}
        onClick={() => (open === true ? setOpen(false) : setOpen(true))}
      />
      <Menu open={open} onClick={() => setOpen()} />
      <NavList widescreen={isWidescreen}>
        <NavElement>
          <NavLink
            to={'services'}
            smooth={true}
            spy={true}
            duration={'1000'}
            onClick={props.onClick}
          >
            <NavElement1>Home</NavElement1>
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
