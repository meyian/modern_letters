/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import css from "@emotion/css/macro";

import React from "react";
import BorderedWord from "../../shared_components/bordered_word";
import NextButton from "../../shared_components/next_button";

export default () => {
  return (
    <div
      css={css`
        position: relative;
        width: 100vw;
        height: 100vh;
      `}
    >
      <BorderedWord>Leaderboard</BorderedWord>
    </div>
  );
};