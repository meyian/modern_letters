/** @jsx jsx */

import React, { useState, useRef, useEffect } from "react";

import { jsx } from "@emotion/core";
import Typed from "../lib/typed/typed.js";

const Typing = ({options, words}) => {

  words = words || []

  options = options || {
    strings: words,
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
    cursorChar: "|",
  };

  options["strings"] = words;

  const typedSpan = useRef();

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
        style={{ whiteSpace: "pre" }}
        ref={typedSpan}
      />
    </div>
  );
}
export default Typing;
