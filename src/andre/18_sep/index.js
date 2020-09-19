/** @jsx jsx */

import React, { useState, useRef, useEffect } from "react";

import { jsx } from "@emotion/core";
import css from "@emotion/css/macro";

import Typed from "../../lib/typed/typed.js";
import BorderedWord from "../../shared_components/bordered_word";

const words = [
  'The light of a candle',
  'Is transferred to another candle—',
  'Spring twilight'
]

const Typing = () => {

  const options = {
    strings: words,
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
    cursorChar: "|",
  };

  const typedSpan = useRef();

    // this.el refers to the <span> in the render() method

  useEffect(() =>{
    const elem = typedSpan.current;
    elem.typed = new Typed(elem, options);

    // Please don't forget to cleanup animation layer
    return () => {
      elem.typed.destroy();
    }
  }, [options])
  
  return (
    <div>
      <span
        id="span"
        style={{ whiteSpace: "pre" }}
        ref={typedSpan}
      />
    </div>
  );
}
export default Typing;

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