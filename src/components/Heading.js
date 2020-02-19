import React from 'react';
import styled from '@emotion/styled';

const HeadingWrapper = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
  background: #e0e0e0;
  justify-content: center;
  align-items: center;
`;

const HeadingText = styled.h2`
  color: #232a34;
  text-decoration: underline;
`;

export default function Heading(props) {
  return (
    <HeadingWrapper>
      <HeadingText>{props.heading}</HeadingText>
    </HeadingWrapper>
  );
}
