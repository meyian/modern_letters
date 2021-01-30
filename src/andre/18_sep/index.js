/** @jsx jsx */

import React, { useRef, useEffect } from "react";

import { jsx } from "@emotion/core";
import css from "@emotion/css/macro";
import gsap from "gsap";

import Typing from "../../shared_components/typing";
import styled from "@emotion/styled";
import NextArrow from "../../shared_components/next_arrow";
import PreviousArrow from "../../shared_components/previous_arrow";

import AnimatedImage from "../../shared_components/animated_image";

import image1Src from "../../images/andre.18sep/image1.png";
import image2Src from "../../images/andre.18sep/image2.png";
import image3Src from "../../images/andre.18sep/image3.png";

import "./main.css";

const paragraphs = [
  "Hey André!",
  "(First, a word of warning - try not to click the arrows while typing or deleting is going on - that breaks things...)",
  `Thank you so much for your letter and your encouraging comments and feedback on my "piece"! I feel grateful to have your thoughtful reaction to it. I was literally on Cloud 9 when you wrote, because now I knew that I hadn't wasted your time showing it to you. Maybe one day my work might find an audience, after all. Isn't that the dream for all of us artists, never mind the money? Just give us some kind of net made of human arms to fall backwards into whenever we have to ask ourselves if our work matters? Even though we've never talked about this directly - and we should! - I'm sure you're similar to me in this way, and you also would like the public at large to see the work you've done. What would be the message you'd want your art to get out first?`,
  `I have so much to learn from your reaction to my interactive letter - for example, there is a total of only 3 "thoughts", so you did indeed see them all. That was me only toying with my audience's expectations. Maybe if I made it clearer that there were only 3 thoughts, the final thought reveal would make it clear that I never intended to leave my audience hanging - I was only teasing by making you choose 2 at the beginning.`,
  `Anyway, here's a new one! Basic, but you know, everything's a start. I'll hesitate to say more at this point, in anticipation of your forthcoming letter, but I hope you land that SAT tutoring job! Keeping my fingers crossed for you. Life is some tough business, isn't it? A friend of mine says that if you're alive and you say you're not struggling, you're lying. Jobwise, I'm sweating it out over here too in my own way, but I'll do my best to hang on - I'm sure I have many more fights in me to go.`,
  `Stay well and cheerful,`,
  `Hassan`,
];

const StyledTypedParagraph = styled(Typing)`
  width: 500px;
  height: 250px;
  font-family: "Bree Serif", serif;
  color: #673ab7;
  font-size: 1.1rem;
`;

let sentenceNum = 1;

const Index = () => {
  const typingRef = useRef();
  const previousBtnRef = useRef();
  const nextBtnRef = useRef();

  const image1Ref = useRef();
  const image2Ref = useRef();
  const image3Ref = useRef();

  const imageData = [
    { index: 2, src: image1Src, ref: image1Ref },
    { index: 3, src: image2Src, ref: image2Ref },
    { index: 5, src: image3Src, ref: image3Ref },
  ];

  const makeImage = (index, src, ref) => (
    <AnimatedImage
      ref={ref}
      css={css`
        position: absolute;
        left: 500px;
        top: 0;
      `}
      src={src}
      index={index}
    />
  );

  const images = imageData.map((data) =>
    makeImage(data.index, data.src, data.ref)
  );

  const imageObjs = imageData.map((data) => ({
    index: data.index,
    ref: data.ref,
  }));

  const setPreviousBtnOpacity = () => {
    if (sentenceNum === paragraphs.length) {
      gsap.to(previousBtnRef.current, { opacity: 0, duration: 0.5 });
    } else {
      const opacity = sentenceNum > 1 ? 1 : 0;
      gsap.to(previousBtnRef.current, { opacity, duration: 0.5 });
    }
  };

  const setNextBtnOpacity = () => {
    const opacity = sentenceNum < paragraphs.length ? 1 : 0;
    gsap.to(nextBtnRef.current, { opacity, duration: 0.5 });
  };

  const renderImages = () => {
    imageObjs.forEach(({ index, ref }) => {
      const isShowingImage = ref.current.index() === sentenceNum;

      if (isShowingImage) {
        console.log("isShowingImage, will show image");
        ref.current.showImage();
      } else if (ref.current.isImageVisible()) {
        // image is shown
        ref.current.hideImage();
      }
    });
  };

  const changeSentenceNumBy = (delta) => {
    sentenceNum += delta;

    setBtnOpacities();
    renderImages();
  };

  const setBtnOpacities = () => {
    setPreviousBtnOpacity();
    setNextBtnOpacity();
  };

  const onClickPrevious = () => {
    if (sentenceNum > 1) {
      typingRef.current.rewind();
      changeSentenceNumBy(-1);
    }
  };
  const onClickNext = () => {
    console.log("baz");
    if (sentenceNum < paragraphs.length) {
      console.log("bar");
      typingRef.current.unpause();
      changeSentenceNumBy(+1);
    }
  };

  useEffect(() => {
    console.log("using effect");
    renderImages();
  }, []);

  // console.log('using effect')

  return (
    <div
      css={css`
        position: relative;
        left: 1rem;
        top: 1rem;
      `}
    >
      <div>
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
      </div>
      <StyledTypedParagraph
        onFinishTyping={setBtnOpacities}
        words={paragraphs}
        onSetRef={(elem) => {
          typingRef.current = elem;
        }}
      />

      {images}
    </div>
  );
};
export default Index;

/*

Test Paragraphs

const paragraphs = [
  "The light of a candle",
  "Is transferred to another candle—",
  // "Spring twilight",
  // "- Yosa Buson",
  // "You, yourself, as much as anybody",
  // "in the entire universe, deserve",
  // "your love and affection.",
];



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

+ Fade in the images
* fade out the buttons while typing
* Add music/
* Change the font
* Add music
  - instrumental (bocherini string quintets - a presto on loop)


Asides

Whenever you get lost, write! That's being fruitful.

*/

// const paragraphs = [
//   "The light of a candle",
//   "Is transferred to another candle—",
//   "Spring twilight",
//   "- Yosa Buson",
//   "You, yourself, as much as anybody",
//   "in the entire universe, deserve",
//   "your love and affection.",
// ];
