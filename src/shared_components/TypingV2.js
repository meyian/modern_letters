/** @jsx jsx */

import React, { useRef, useEffect } from "react";

import { jsx } from "@emotion/core";
import Typed from "../lib/typed/typed.v1.js";

const TypingV2 = ({ className, id, options, words, onSetRef }) => {
  words = words || [];

  options = {
    strings: words,
    typeSpeed: 20,
    backSpeed: 1,
    loop: true,
    cursorChar: "|",
    ...options,
  };

  // options["strings"] = words;

  const typedSpan = useRef();

  useEffect(() => {
    const elem = typedSpan.current;
    elem.typed = new Typed(elem, options);

    if (onSetRef) {
      onSetRef(elem.typed);
    }

    elem.typed.stop();

    // Please don't forget to cleanup animation layer
    return () => {
      elem.typed.destroy();
    };
  });

  return (
    <div id={id} className={className}>
      <span ref={typedSpan} />
    </div>
  );
};
export default TypingV2;
