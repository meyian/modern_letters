/** @jsx jsx */

import React, { useRef, useEffect } from "react";

import { jsx } from "@emotion/core";
import Typed from "../lib/typed/typed.js";

const Typing = ({className, options, words, onSetRef}) => {

  words = words || []

  options = options || {
    strings: words,
    typeSpeed: 20,
    backSpeed: 5,
    loop: true,
    cursorChar: "|",
  };

  options["strings"] = words;

  const typedSpan = useRef();

  useEffect(() =>{
    const elem = typedSpan.current;
    elem.typed = new Typed(elem, options);
    onSetRef(elem.typed);

    // Please don't forget to cleanup animation layer
    return () => {
      elem.typed.destroy();
    }
  })
  
  return (
    <div className={className}>
      <span
        ref={typedSpan}
      />
    </div>
  );
}
export default Typing;
