/** @jsx jsx */

import { jsx } from "@emotion/core";
import styled from "@emotion/styled";

import struggle from "../../images/page2.png";
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
  top: 4vh;
  left: 39vw;
  width: 554px;
  height: 145px;
`;

const StrugglePage = ({ onClickNext }) => {
  return (
    <Container>
      <StyledImage src={struggle} />
      {onClickNext && (
        <NextDiv onClick={onClickNext}>
          <span>&gt;</span>
        </NextDiv>
      )}
      <PositionedTextArea>
        <p>
          I feel like I am entering a new phase in life, where I'm trying to
          raise a firm hand to myself. I remember you speaking about your
          wrestles with the Christian path, and in my own way, I know how it
          feels to be disappointed and frustrated with one's progress. I
          remember with friendliness some of the old obediances to rules I
          maintained when I was practicing religion, and feel grateful that
          there's someone else in my life also making some of the same efforts.
          I don't know how to think about my life with Christian logic, but as
          an existentialist philosopher, I'm interested in what that would look
          like. How a Christian regards her soul might teach me to value myself
          more, because low self-esteem powers my pessimism, the pessimism has
          undone vast tracts of my life.
        </p>

        <p>
          Remember how Christ cursed the fruitless tree in front of his
          disciples? You may take it as automatic that he was right to do so,
          but I like to think of Christ as a normal person, who alternates
          between being right and wrong. Suppose, in this way, he actually is
          correct about how he treated the tree. Doesn't that place this
          situation on a pedestal, above so many other incidents in his life?
          Somehow, the story about this tree makes my imagination bloom. What
          if, just like that tree, all things in life are supposed to be
          fruitful? That one is correct to damn the useless?
        </p>

        <p>
          I was propped up behind a computer this Saturday, in a funk, but then
          thinking of you and Christianity, this story came to mind. I drew
          strength from it, and then decided to create all that you're seeing
          here. Rather than sit in a funk this Saturday, I thought I should pull
          myself out of it and write you. Thank you, as always, for being a
          lighthouse pointing the way to a better self. I hope the other people
          in your life appreciate it as much as I do.
        </p>
      </PositionedTextArea>
    </Container>
  );
};

export default StrugglePage;
