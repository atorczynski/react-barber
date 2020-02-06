import React from 'react';
import styled from '@emotion/styled';
import Image2 from '../assets/jason-leung-2seUdPQNy_I-unsplash.jpg';
import { useSpring, animated } from 'react-spring';

const BannerContainer = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 450px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  background-image: url(${Image2});
  background-size: 100%;
  background-position-y: 60%;
  background-repeat: no-repeat;
  box-shadow: 0px 10px 35px -5px rgba(0, 0, 0, 0.75);
`;

const BannerText = styled.h1`
  font-size: 30px;
  z-index: 99;
  font-family: 'Satisfy', cursive;
  color: #ecebea;
  letter-spacing: 3px;
`;
const Line = styled.hr`
  margin-top: -40px;
  width: 400px;
  transition: all 1s ease-in-out;
  transition-property: margin-top;
  @media screen and (max-width: 576px) {
    margin-top: -30px;
  }
`;

const BrandName = styled.h1`
  font-size: 80px;
  z-index: 99;
  font-family: 'Satisfy', cursive;
  color: #ecebea;
  letter-spacing: 3px;
  transition: font-size 1s ease-in-out;
  @media screen and (max-width: 576px) {
    font-size: 50px;
  }
`;

export default function AppBanner() {
  const animation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    transition: '1s'
  });
  const textAnimation1 = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    transition: '4s',
    delay: 2000
  });
  const textAnimation2 = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    transition: '4s',
    delay: 3000
  });
  const textAnimation3 = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    transition: '4s',
    delay: 4000
  });
  const lineAnimation = useSpring({
    from: { opacity: '0' },
    to: { opacity: '1' },
    delay: 5000
  });

  return (
    <animated.div style={animation}>
      <BannerContainer>
        <animated.div style={textAnimation1}>
          <BannerText>Welcome</BannerText>
        </animated.div>
        <animated.div style={textAnimation2}>
          <BannerText>To</BannerText>
        </animated.div>
        <animated.div style={textAnimation3}>
          <BrandName>BarberSpace</BrandName>
        </animated.div>
        <animated.div style={lineAnimation}>
          <Line></Line>
        </animated.div>
      </BannerContainer>
    </animated.div>
  );
}
