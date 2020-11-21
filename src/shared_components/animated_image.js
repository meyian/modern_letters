/** @jsx jsx */

import React, { useImperativeHandle, useEffect } from "react";
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
  const id = `image-${Math.random()}`;
  
  useImperativeHandle(ref, () => ({
    index(){
      return props.index
    },
    showImage() {
      const elem = document.getElementById(id);
      gsap.fromTo(elem, { opacity: 0, x: 100, duration: 0.5 }, {opacity: 1, x: 0});
    },
    hideImage() {
      const elem = document.getElementById(id);
      gsap.to(elem, { opacity: 0, duration: 0.2 });
    },
    isImageVisible() {
      const elem = document.getElementById(id);

      const opacity = parseInt(
        window.getComputedStyle(elem).getPropertyValue("opacity")
      );
      return opacity > 0;
    },
  }));

  return <StyledImage id={id} className={props.className} src={props.src} />;
});

export default AnimatedImage;
