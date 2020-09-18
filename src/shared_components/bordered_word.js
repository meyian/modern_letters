/** @jsx jsx */

import React from 'react'

import { jsx } from "@emotion/core";
import css from "@emotion/css/macro";

const BorderedWord = ({children}) => {
  return (
    <div
      css={css`
        height: calc(100vh - 6px);
        width: calc(100vw - 6px);
        display: flex;
        position: relative;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border: 3px solid black;
        background-color: white;
      `}
    >
      <h1>{children}</h1>
    </div>
  );
}

export default BorderedWord