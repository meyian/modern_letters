/** @jsx jsx */

import React, { useState, useEffect } from "react";

import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import css from "@emotion/css/macro";

import end from "../../images/end.png";

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const StyledImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const NextDiv = styled.div`
  position: absolute;
  right: 2vw;
  bottom: 10vh;
  width: 15vw;
  height: 10vh;
  border: 5px dashed blue;
  font-size: 1.5rem;
  font-weight: 700;
  color: blue;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 1rem;
`;

const EndPage = ({children}) => {
  const [hasLeft, setHasLeft] = useState(false);
  const [isRevealingLastSlide, setIsRevealingLastSlide] = useState(false);

  useEffect(() => {
    document.addEventListener('mouseout', function(evt) {
      if (evt.toElement == null && evt.relatedTarget == null) {
        setHasLeft(true)
      }
    });
  }, [])
  

  const nextDiv = () => {
    return (
      !isRevealingLastSlide && hasLeft && <NextDiv onClick={() => setIsRevealingLastSlide(true)}>
        <span>reveal final thought?</span>
      </NextDiv>
    );
  };

  const nextSlide = () => {
    return (
      isRevealingLastSlide && children
    )
  }

  return (
    <Container>
      {!isRevealingLastSlide && <StyledImage src={end} />}
      {nextDiv()}
      {nextSlide()}
    </Container>
  );
};

export default EndPage;
