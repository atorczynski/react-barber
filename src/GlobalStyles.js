import React from 'react';
import { Global, css } from '@emotion/core';

function GlobalStyles() {
  return (
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
        body {
          font-size: 14px;
          margin: 0px;
          font-family: 'Roboto', sans-serif;
        }
      `}
    />
  );
}

export default GlobalStyles;
