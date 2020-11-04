/** @jsx jsx */

import React from "react";
import { jsx } from "@emotion/core";
// import css from "@emotion/css/macro";
import { motion, AnimatePresence } from "framer-motion";

import styled from "@emotion/styled";

const StyledImage = styled(motion.img)`
  width: 125px;
  height: auto;
  cursor: pointer;
`;

const AnimatedImage = React.forwardRef((props, ref) => {
  return (
    <AnimatePresence>
    <StyledImage
      initial={{ x: 100, opacity: 0 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 1.5 } }}
      ref={ref}
      className={props.className}
      src={props.src}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    />
    </AnimatePresence>
  );
});

export default AnimatedImage;
