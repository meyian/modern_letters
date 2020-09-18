/** @jsx jsx */

import { jsx } from "@emotion/core";
import css from "@emotion/css/macro";

import styled from "@emotion/styled";

const NextDiv = styled.div`
  position: absolute;
  right: 2vw;
  bottom: 10vh;
  width: 5vw;
  height: 10vh;
  border: 5px dotted orange;
  font-size: 2rem;
  font-weight: 700;
  color: black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default NextDiv;