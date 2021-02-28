/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import css from "@emotion/css/macro";

import webAudioPlayer from "web-audio-player";
import gsap from "gsap";

import React, { useState, useEffect, useRef } from "react";
import theView from "../../images/andre.29feb2021/the_view.png";
import one from "../../images/andre.29feb2021/one.png";
import NextArrow from "../../shared_components/next_arrow";
import PreviousArrow from "../../shared_components/previous_arrow";

const songFile = "/sounds/Cassio Kohl - Broken.mp3";

let audio;

const delay = 18000;
const delayDelta = 2500;

const StyledButton = styled.button`
  border-radius: 50px;
  background-color: white;
  color: black;
  border: 2px solid black;
  transition: all 0.2s;
  padding: 5px 2rem;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: scroll;
  width: 100%;
  height: 100vh;
`;

const rumisPoem = (
  <div
    css={css`
      height: 70vh;
      overflow: scroll;
    `}
  >
    <h3>Prayer Is An Egg</h3>
    <p>
      On Resurrection Day God will say, "What did you do with the strength and
      energy
    </p>
    <p>
      your food gave you on earth? How did you use your eyes? What did you make
      with
    </p>
    <p>
      your five senses while they were dimming and playing out? I gave you hands
      and feet
    </p>
    <p>
      as tools for preparing the ground for planting. Did you, in the health I
      gave,
    </p>
    <p>
      do the plowing?" You will not be able to stand when you hear those
      questions. You
    </p>
    <p>
      will bend double, and finally acknowledge the glory. God will say, "Lift
    </p>
    <p>
      your head and answer the questions." Your head will rise a little, then
      slump
    </p>
    <p>
      again. "Look at me! Tell what you've done," You try, but you fall back
      flat
    </p>
    <p>
      as a snake. "I want every detail. Say!" Eventually you will be able to get
      to
    </p>
    <p>
      a sitting position. "Be plain and clear. I have given you such gifts. What
      did
    </p>
    <p>
      you do with them?" You turn to the right looking to the prophets for help,
      as
    </p>
    <p>
      though to say,{" "}
      <i>I am stuck in the mud of my life. Help me out of this!</i> They
    </p>
    <p>
      will answer, those kings, "The time for helping is past. The plow stands
      there in
    </p>
    <p>
      the field. You should have used it." Then you turn to the left, where your
      family
    </p>
    <p>
      is, and they will say, "Don't look at us! This conversation is between you
      and your
    </p>
    <p>
      creator." Then you pray the prayer that is the essence of every ritual:{" "}
      <i>God,</i>
    </p>
    <p>
      <i>
        I have no hope. I am torn to shreds. You are my first and last and only
        refuge.
      </i>
    </p>
    <p>
      Don't do daily prayers like a bird pecking, moving its head up and down.
      Prayer is an egg.
    </p>
    <p>Hatch out of the total helplessness inside.</p>
    <p>
      <b>-Rumi</b>
    </p>
  </div>
);
const artwork = (
  <div
    css={css`
      display: flex;
      align-items: center;
    `}
  >
    <div>
      How tiny He must be in contrast to the sum total of everything else,
      listed on the other side of the line that separates one from every other
      numberable number!
    </div>
    <img
      alt="Diagram of lonely God"
      css={css`
        width: 18rem;
      `}
      src={one}
    />
  </div>
);

const texts = [
  `I was looking at that picture of an orange sunset sky carpeted with clouds, the art for this song on YouTube, and I realized that if all that I'm seeing was some attempt to get God to take a look, then there's a whole lot of power in God being just a single entity.`,
  artwork,
  `The rest of us are all here existing. To exist means having cried out for His help at least once. Even if nowadays you no longer believe...`,
  `And so computer programmer in Ghana attempts to write his version of a song for You. On Reassurection Day, please don't have me confused for some other sinner who never thought to ask for Your grace! On my end, I will try with all my heart to be original with whatever days I have left.`,
  `Here is a poem I read recently.`,
  rumisPoem,
];

const One = () => {
  const [hasAudioFileLoaded, setHasAudioFileLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const bkgdRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const btnRef = useRef(null);

  const changeTextIndex = (delta) => {
    const newIndex = textIndex + delta;
    if (newIndex > 0 && newIndex < texts.length) {
      setTextIndex(newIndex);
    }
  };

  const hideBkgd = () => {
    gsap.to(bkgdRef.current, { opacity: 0, duration: 2 });
  };

  const showTitleAndButtonsAndText = () => {
    const tl = gsap.timeline();
    tl.to(titleRef.current, { opacity: 1, duration: 2 });
    tl.to(titleRef.current, { opacity: 0, duration: 2 }, 3.5);
    tl.to(btnRef.current, { opacity: 1, duration: 1 });
    tl.to(textRef.current, { opacity: 1, duration: 2 }, "<");
  };

  const showText = () => {
    return texts[textIndex];
  };

  const initMontage = () => {
    setTimeout(() => {
      hideBkgd();
    }, delay);

    setTimeout(() => {
      showTitleAndButtonsAndText();
    }, delay + delayDelta);
  };

  const playButton = (
    <StyledButton
      onClick={() => {
        audio.play();
        setIsPlaying(true);

        initMontage();
      }}
    >
      Play
    </StyledButton>
  );

  const pauseButton = (
    <StyledButton
      onClick={() => {
        audio.pause();
        setIsPlaying(false);
      }}
    >
      Pause
    </StyledButton>
  );

  const playOrPauseButton = isPlaying ? pauseButton : playButton;
  const loadingOrPlayOrPauseButton = hasAudioFileLoaded ? (
    playOrPauseButton
  ) : (
    <h1>Loading Song</h1>
  );

  useEffect(() => {
    audio = webAudioPlayer(songFile);

    audio.on("load", () => {
      setHasAudioFileLoaded(true);
      audio.node.connect(audio.context.destination);
    });
  }, []);

  return (
    <div
      css={css`
        width: 100%;
        height: 100vh;
        position: relative;
        background-color: black;
        color: white;
      `}
    >
      <Slide
        ref={bkgdRef}
        id="intro-text-wrapper"
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <img
          alt="An orange sunset on a freeway, city at the horizon"
          src={theView}
          css={css`
            width: 100%;
            height: auto;
          `}
        />
      </Slide>
      <Slide
        ref={textRef}
        id="intro-text-wrapper"
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
        `}
      >
        <div
          css={css`
            max-width: 30rem;
          `}
        >
          {showText()}
        </div>
      </Slide>
      <Slide
        css={css`
          display: flex;
          justify-content: center;
          align-items: baseline;
          height: 6rem;
        `}
      >
        <div
          css={css`
            position: relative;
            top: 1rem;
          `}
        >
          {loadingOrPlayOrPauseButton}
        </div>
      </Slide>
      <div
        ref={titleRef}
        css={css`
          position: absolute;
          bottom: 1rem;
          right: 2rem;
          opacity: 0;
        `}
      >
        <h1>Just One.</h1>
      </div>
      <div
        ref={btnRef}
        css={css`
          position: absolute;
          bottom: 1rem;
          width: 4rem;
          display: flex;
          justify-content: space-between;
          left: 1rem;
          opacity: 0;
        `}
      >
        <PreviousArrow onClick={() => changeTextIndex(-1)} />
        <NextArrow onClick={() => changeTextIndex(1)} />
      </div>
    </div>
  );
};

export default One;

/*

Todo


Texts

I was looking at a picture of an orange sunset sky carpeted with clouds, and I realized that if all that I'm seeing was some attempt to get God to take a look, then there's a whole lot of power in God being just a single entity. 

How tiny He must be in contrast to the sum total of everything else, listed on the other side of the line that separates one from every other number that is numbered. 

Out of need, we are all here existing. To exist means having cried out for His help at least once.

A computer programmer attempts to write his version of a song to You. On Reassurection Day, please don't have me confused for some other sinner who never thought to ask  for Your grace! On my end, I will try with all my heart to be original with whatever days I have left.


Asides

-- Sun 28 Feb --

Todo

+ Add buttons
+ Display the messages
+ heading
+ Fade out the sky
+ Fade in the rest
= Polish


*/
