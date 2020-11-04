/** @jsx jsx */

import React from "react";
import { jsx } from "@emotion/core";
// import css from "@emotion/css/macro";
import { motion } from "framer-motion";

import styled from "@emotion/styled";
import arrow from "../images/andre.18sep/arrow.png";

const StyledImage = styled(motion.img)`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

const NextArrow = React.forwardRef((props, ref) => (
  <StyledImage
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.5 } }}
    ref={ref}
    className={props.className}
    src={arrow}
    onClick={props.onClick}
  />
));

export default NextArrow;
