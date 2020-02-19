import styled from '@emotion/styled';
import React from 'react';
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from 'react-scroll';

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #232a34;
  z-index: 5;
  height: 100vh;
  width: 100%;
  text-align: left;
  padding: 2rem;
  position: absolute;
  opacity: 97%;
  top: 0;
  left: 0;
  transform: translateY(${(props) => (props.open ? '0%' : '-100%')});
  transition: transform 0.3s ease-in-out;
  a {
    font-size: 0.8rem;
    color: whitesmoke;

    text-align: center;
    text-transform: uppercase;
    padding: 0.7rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    text-decoration: none;
    transition: color 0.3s linear;
  }
`;

const Seperator = styled.hr`
  width: 95%;
`;

export default function Menu(props) {
  return (
    <StyledMenu open={props.open}>
      <Link
        to={'services'}
        smooth={true}
        spy={true}
        duration={'1000'}
        onClick={props.onClick}
      >
        <p>Services</p>
      </Link>
      <Seperator />
      <Link
        to={'aboutus'}
        smooth={true}
        spy={true}
        duration={'1000'}
        onClick={props.onClick}
      >
        <p>About Us</p>
      </Link>
      <Seperator />
      <Link
        to={'gallery'}
        smooth={true}
        spy={true}
        duration={'1000'}
        onClick={props.onClick}
      >
        <p>Gallery</p>
      </Link>
      <Seperator />
      <Link to={'press'} onClick={props.onClick}>
        <p>Press</p>
      </Link>
      <Seperator />
      <Link to={'contact'} onClick={props.onClick}>
        <p>Contact</p>
      </Link>
    </StyledMenu>
  );
}
