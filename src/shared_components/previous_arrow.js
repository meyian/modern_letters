
/** @jsx jsx */

import React from 'react';
import { jsx } from "@emotion/core";
// import css from "@emotion/css/macro";

import styled from "@emotion/styled";
import arrow from "../images/andre.18sep/arrow.png"

const StyledImage = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
  transform: rotateY(180deg); 
`;

const PreviousArrow = React.forwardRef((props, ref) => (
  <StyledImage ref={ref} className={props.className} src={arrow} onClick={props.onClick} />
));

export default PreviousArrow;