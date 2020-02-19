import React from 'react';
import styled from '@emotion/styled';

const HeadingWrapper = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
  background: ${(props) => props.backgroundColor};
  justify-content: center;
  align-items: center;
`;

const HeadingText = styled.h2`
  color: ${(props) => props.textColor};
  text-decoration: underline;
`;

export default function Heading(props) {
  return (
    <HeadingWrapper backgroundColor={props.backgroundColor}>
      <HeadingText textColor={props.textColor}>{props.heading}</HeadingText>
    </HeadingWrapper>
  );
}
