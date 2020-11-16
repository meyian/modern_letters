/** @jsx jsx */

import React, { useImperativeHandle } from "react";
import { jsx } from "@emotion/core";
// import css from "@emotion/css/macro";
import gsap from "gsap";

import styled from "@emotion/styled";

const StyledImage = styled.img`
  width: 125px;
  height: auto;
  cursor: pointer;
`;

const AnimatedImage = React.forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    showImage() {
      console.log('ref');
      console.log(ref);
      gsap.from(ref.current, { opacity: 0, x: 100, duration: 0.5 });
    },
    hideImage() {
      gsap.to(ref.current, { opacity: 0, duration: 0.2 });
    },
    isImageVisible(){
      console.log('ref');
      console.log(ref);
      const opacity = parseInt(window.getComputedStyle(ref.current).getPropertyValue("opacity"));
      return opacity > 0
    }
  }));

  return (
    <StyledImage
      ref={ref}
      className={props.className}
      src={props.src}
    />
  );
});

export default AnimatedImage;
