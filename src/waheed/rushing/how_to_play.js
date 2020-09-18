/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import css from "@emotion/css/macro";

import React from "react";
import BorderedWord from "../../shared_components/bordered_word";
import NextButton from "../../shared_components/next_button";

const PositionedNextButton = styled(NextButton)`
  position: absolute;
  top: 64vh;
  left: 84vh;
`;

export default ({ onClickNext }) => {
  return (
    <div
      css={css`
        position: relative;
        width: 100vw;
        height: 100vh;
      `}
    >
      <BorderedWord>
        <div>
          <h1>How to Play</h1>
          <p>You will be shown the picture of a basketball player. Select the correct name for the player and get 5 points. There are 20 names to get through. Good luck getting the high-score</p>
        </div>
      </BorderedWord>
      <PositionedNextButton onClick={onClickNext}>&gt;</PositionedNextButton>
    </div>
  );
};
