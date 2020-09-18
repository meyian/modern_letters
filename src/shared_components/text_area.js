/** @jsx jsx */

import { useState, useRef } from "react";
import { jsx } from "@emotion/core";
import css from "@emotion/css/macro";

import mouseIcon from "../animations/scrolling.gif";

export default ({ className, children }) => {
  const [hasMouseOver, setHasMouseOver] = useState(false);
  const [hasSeenIcon, setHasSeenIcon] = useState(false);

  const flashIcon = () => {
    setHasMouseOver(true);
    setTimeout(() => {
      setHasSeenIcon(true);
    }, 4000);
  };

  const showMouseIcon = () => {
    return (
      hasMouseOver &&
      !hasSeenIcon && (
        <img
          alt="mouse scrolling animation"
          css={css`
            width: 5rem;
          `}
          src={mouseIcon}
        />
      )
    );
  };

  return (
    <div
      className={className}
      css={css`
        position: absolute;
        height: 200px;
        width: 300px;
        display: grid;
        grid-template-columns: 90px auto;
        grid-template-rows: auto;
      `}
    >
      <div
        css={css`
          grid-column-start: 1;
          grid-column-end: 2;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        `}
      >
        {showMouseIcon()}
      </div>
      <div
        onMouseOver={flashIcon}
        css={css`
          grid-column-start: 2;
          grid-column-end: 3;
          overflow: scroll;
        `}
      >
        {children}
      </div>
    </div>
  );
};
