/** @jsx jsx */

import { jsx } from "@emotion/core";
import styled from "@emotion/styled";

import wip from "../../images/page1.png";
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
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const PositionedTextArea = styled(TextArea)`
  top: 32vh;
  width: 460px;
  height: 178px;
`;

const WipPage = ({ onClickNext }) => {
  return (
    <Container>
      <StyledImage src={wip} />
      {onClickNext && (
        <NextDiv onClick={onClickNext}>
          <span>&gt;</span>
        </NextDiv>
      )}
      <PositionedTextArea>
        <p>
          Some emotional trauma in my life had me turn away from writing, and
          then, even after healing, the inertia to move the pen remained. I was
          tired of writing my usual observations, fictional or non-fiction, and
          the world just didn't seem to interest me in a literary way any more.
        </p>
        <p>
          Then, after turning a few turns, I realized I had my artform sitting
          in front of me the whole time. I could be a programmer of games and
          interactive experiences! Everything on the web is so commercial; I
          don't know many people treating the world wide web as an artform. Like
          with filmmaking, if you want to create your art piece by yourself, you
          will need a lot of different little skills. I don't know if I'm good
          at all of them, but I've tried to give my eye for design some
          practice, and next time I'll try to throw in some music and sound
          effects too. Animation, the queen of the whole business, will come
          last, after I have proven myself.
        </p>
        <p>
          In the end, I want to start making video games. I'm writing the plot
          to one, and thanks to our conversations, I've made one of the central
          characters a Christian. You know, this actually might be the way I'm
          forced read the Bible - as research for my character. I'm a little
          lost with the plot, and maybe the Bible might start to give me ideas.
          Before starting, I will probably do a bunch of smaller projects first
          to whet my technical skills.
        </p>
      </PositionedTextArea>
    </Container>
  );
};

export default WipPage;
