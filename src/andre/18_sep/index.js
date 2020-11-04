/** @jsx jsx */

import React, { useRef } from "react";

import { jsx } from "@emotion/core";
import css from "@emotion/css/macro";
import gsap from "gsap";

import Typing from "../../shared_components/typing";
import BorderedWord from "../../shared_components/bordered_word";
import styled from "@emotion/styled";
import NextArrow from "../../shared_components/next_arrow";
import PreviousArrow from "../../shared_components/previous_arrow";

import AnimatedImage from "../../shared_components/animated_image";

import image1Src from "../../images/andre.18sep/image1.png";

// const paragraphs = [
//   'Hey André!',
//   `Thank you so much for your letter and your encouraging comments and feedback on my "piece"! I feel grateful to have your thoughtful reaction to my software art performance. I was literally on Cloud 9 when you wrote, because now I knew that I hadn't wasted your time showing it to you. Maybe one day my work might find an audience, after all. Isn't that the dream for all of us artists, never mind the money? Just give us some kind of cushion made of human arms to fall backwards into whenever we have to ask ourselves if our work matters. Even though we've never talked about this directly - and we should! - I'm sure you're similar to me in this way, and you also would like the public at large to see the work you've done. What would be the message you'd want your art to get out first?`,
//   `I have so much to learn from your reaction to my piece - for example, there is a total of only 3 "thoughts", so you did indeed see them all. I was only toying with my audience's expectations. Maybe if I made it clearer that there were only 3 thoughts, the final thought reveal would make it clear that I never intended to leave my audience hanging - I was only teasing by making you choose 2 at the beginning.`,
//   `Anyway, here's a new one! Basic, but you know, everything's a start. I'll hesitate to say more at this point, in anticipation of your forthcoming letter, but I hope your luck with the job market turns around for you. Life is tough business, isn't it? A friend of mine says that if you're alive and you say you're not struggling, you're lying. Jobwise, I'm sweating it out over here too in my own way, but I'll persevere - I'm sure I have many more fights in me to go.`,
//   `Stay well, my friend,`,
//   `Hassan`
// ]

const paragraphs = [
  "The light of a candle",
  "Is transferred to another candle—",
  "Spring twilight",
];

const StyledTypedParagraph = styled(Typing)`
  width: 500px;
  height: 250px;
`;

let sentenceNum = 1;

const Index = () => {
  const typingRef = useRef();
  const previousBtnRef = useRef();
  const nextBtnRef = useRef();

  const image1 = sentenceNum === 1 && <AnimatedImage css={css`
    position: absolute;
    left: 300px;
    top: 0;
  `} src={image1Src} />;

  const blurBtns = () => {
    console.log("blurring");
  };

  const setPreviousBtnOpacity = () => {
    const opacity = sentenceNum > 1 ? 1 : 0;
    gsap.to(previousBtnRef.current, { opacity, duration: 0.5 });
    // previousBtnRef.current.style = `opacity: ${opacity}`;
  };

  const setNextBtnOpacity = () => {
    const opacity = sentenceNum < paragraphs.length ? 1 : 0;
    gsap.to(nextBtnRef.current, { opacity, duration: 0.5 });
    // nextBtnRef.current.style = `opacity: ${opacity}`;
  };

  const setBtnOpacities = () => {
    setPreviousBtnOpacity();
    setNextBtnOpacity();
  };

  const onClickPrevious = () => {
    if (sentenceNum > 1) {
      typingRef.current.rewind();
      sentenceNum -= 1;
      setBtnOpacities();
    }
  };
  const onClickNext = () => {
    if (sentenceNum < paragraphs.length) {
      typingRef.current.unpause();
      sentenceNum += 1;
      setBtnOpacities();
    }
  };

  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <StyledTypedParagraph
        onWhileTyping={blurBtns}
        onFinishTyping={setBtnOpacities}
        words={paragraphs}
        onSetRef={(ref) => {
          typingRef.current = ref;
        }}
      />
      <PreviousArrow
        ref={previousBtnRef}
        css={css`
          opacity: 0;
        `}
        onClick={onClickPrevious}
      />
      {/* <button ref={nextBtnRef} onClick={onClickNext}>next</button> */}
      <NextArrow
        ref={nextBtnRef}
        onClick={onClickNext}
        css={css`
          margin-left: 1rem;
        `}
      />
      {image1}
    </div>
  );
};
export default Index;

/*

Todo

+ Get typed.js to stop when I want it
  - get it to stop
  - get it to continue when you call next()
= arrows
  + replace text w/ images
  + refs
  + animate fade in/out
  - hide/grey out while typing (shit, this will be hard)
* Place the images
* Animation everything
* Tidy up
  - move arrows to the top
  - add some color!



Unsorted Features

* Fade in the images
* fade out the buttons while typing
* Add music/
* Change the font
* Add music
  - instrumental (bocherini string quintets - a presto on loop)


Asides

Whenever you get lost, write! That's being fruitful.

*/
