/** @jsx jsx */

import React, { useState, useRef, useEffect } from "react";

import { jsx } from "@emotion/core";
import css from "@emotion/css/macro";

import Typing from "../../shared_components/typing";
import BorderedWord from "../../shared_components/bordered_word";

const words = [
  'The light of a candle',
  'Is transferred to another candle—',
  'Spring twilight'
]

const Index = () => {

  const typingRef = useRef();
  // const [typingRef, setTypingRef] = useState();
  
  return (
    <div>
      <Typing words={words} onSetRef={(ref) => {
        typingRef.current = ref
      }} />
      <button onClick={() => void typingRef.current.rewind()}>previous</button>
      <button onClick={() => void typingRef.current.unpause()}>next</button>
    </div>
  );
}
export default Index;

/*

var options = {
  strings: ["<i>First</i> sentence.", "&amp; a second sentence."],
  typeSpeed: 40,
};

// var typed = new Typed(".test", options);
// console.log(typed)

const Index = () => {
  const inputEl = useRef(null);
  const span = null; // document.querySelector(".test")
  this.typed = new Typed(span, options);

  return (
    <BorderedWord>
      <span
        ref={(el) => {
          this.el = el;
        }}
        className="test"
      >
        18 sep
      </span>
    </BorderedWord>
  );
};

export default Index;

*/

/*

Todo

* Get typed.js to stop when I want it
  - get it to stop
  - get it to continue when you call next()

*/