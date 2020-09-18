/** @jsx jsx */

import React, { useState, useRef } from "react";

import { jsx } from "@emotion/core";
import css from "@emotion/css/macro";

import Typed from "../../lib/typed/typed.js";
import BorderedWord from "../../shared_components/bordered_word";

const words = [
  'The light of a candle',
  'Is transferred to another candle—',
  'Spring twilight'
]


class Typing extends React.Component {
  componentDidMount() {
    const options = {
      strings: words,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      cursorChar: "|",
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }
componentWillUnmount() {
    // Please don't forget to cleanup animation layer
    this.typed.destroy();
  }
  
  render() {
    return (
      <div>
        <span
          style={{ whiteSpace: "pre" }}
          ref={(el) => {
            this.el = el;
          }}
        />
      </div>
    );
  }
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
