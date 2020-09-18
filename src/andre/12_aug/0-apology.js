/** @jsx jsx */

import { jsx } from "@emotion/core";
import css from "@emotion/css/macro";

import styled from "@emotion/styled";
import apology from "../../images/page0.png";

import TextArea from "../../shared_components/text_area";

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

const PositionedTextArea = styled(TextArea)`
  top: 52vh;
  min-width: 460px;
  height: 163px;
`;

const ApologyPage = ({ onClickNext }) => {
  return (
    <Container>
      <StyledImage src={apology} />
      {onClickNext && (
        <NextDiv onClick={onClickNext}>
          <span>&gt;</span>
        </NextDiv>
      )}
      <PositionedTextArea>
        <div>
        <p>
          I'm watching <em>Wild Strawberries</em> with a hand over my eyes,
          blushing. Ever seen it? Currently half an hour in, I have to take
          breaks to collect myself, as I feel shy having uncomfortable memories
          brought up of what it's like to be young and hopeful about love. At
          certain points, life arranges people around you in the form of a test
          you're bound to fail and can't retake, and I've had that happen to me
          many times. I feel like I've failed one of these tests in how I've
          written to you, and feel like I have to apologize. I get rough when
          I'm full of emotion, just like the family dog, scampering around and
          scratching up the hardwood floors when a friend has arrived at the
          door. I would like to be sober, like a proper gentleman. I'm getting
          too old to be boyish. But being an adult seems to mean you're watching
          life through a window, watching it slip by as the hours count up,
          pointlessly. If I seem poorly trained at times, I apologize, it's only
          that I'm still very excitable. I don't know if I will ever succeed in
          being the person I would like to be - someone considerate, thoughtful,
          and slightly sad, when left to his own devices. Nobody's enemy.
        </p>

        <p>
          Thanks for being so easy-going as to make all of this apologizing and
          neurosis unnecessary. Still, I felt like I had to say something.
        </p>
        </div>
      </PositionedTextArea>
    </Container>
  );
};

export default ApologyPage;

/* 

todo

* switch the menu w/ apology page
* place the next div in the right place
* find a scrolling icon that animates once and then disappears forever
* replace the images w/ blanks (have blanks ready and switch them out when you're ready)
* put text

*/
