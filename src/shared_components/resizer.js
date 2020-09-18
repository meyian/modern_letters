/** @jsx jsx */

import React, { useState, useEffect } from "react";

import { jsx } from "@emotion/core";
import css from "@emotion/css/macro";

const Resizer = ({ onPerfectSize, perfectWidth, perfectHeight }) => {

  const [currentWindowDimensions, setCurrentWindowDimensions] = useState({
    w: window.innerWidth,
    h: window.innerHeight,
  });

  useEffect(() => window.addEventListener("resize", () => {
    setCurrentWindowDimensions({
      w: window.innerWidth,
      h: window.innerHeight,
    })
  }), [])

  if (Math.abs(perfectWidth + perfectHeight - currentWindowDimensions.w - currentWindowDimensions.h) < 20){
    onPerfectSize()
  }

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
        border: 3px dashed black;
        background-color: white;
      `}
    >
      <h1>Resize until you get the perfect dimension</h1>
      <h2
        css={css`
          position: absolute;
          bottom: 0px;
          right: 40px;
        `}
      >
        {currentWindowDimensions.w} x {currentWindowDimensions.h} =/= {perfectWidth} x
        {perfectHeight}
      </h2>
    </div>
  );
};

export default Resizer;
