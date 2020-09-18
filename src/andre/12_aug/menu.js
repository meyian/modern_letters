/** @jsx jsx */

import React, { useState } from "react";

import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import css from "@emotion/css/macro";

import home from "../../images/home.png";

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

const OverlayOption = styled.div`
  width: 22vw;
  height: 60vh;
  position: absolute;
`;

const OverlayOption0 = styled(OverlayOption)`
  top: 33vh;
  left: 18vw;
  border: 10px solid darkseagreen;
`;

const OverlayOption1 = styled(OverlayOption)`
  top: 33vh;
  left: 44vw;
  border: 10px solid orange;
`;

const OverlayOption2 = styled(OverlayOption)`
  top: 33vh;
  left: 70vw;
  border: 10px solid yellow;
`;

const HelpSection = ({ visible, message }) => {
  return (
    <div
      css={css`
        position: absolute;
        top: 23vh;
        left: 18vw;
        height: 30px;
      `}
    >
      {visible && <p>{message}</p>}
    </div>
  );
};

const NextPanel = ({ visible, onClick }) => {
  return (
    visible && (
      <div
        onClick={onClick}
        css={css`
          position: absolute;
          top: 58vh;
          left: 88vw;
          height: 17vh;
          width: 10vw;
          background-color: white;
          box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.4);
          font-weight: 700;
          font-size: 5rem;
          color: darkslategray;
          flex-direction: row;
          display: flex;
          justify-content: center;
          cursor: pointer;
        `}
      >
        →
      </div>
    )
  );
};

const Menu = ({ onClickNext }) => {
  const numOptions = 3;
  const lowBeam = 0;
  const highBeam = 1;
  const opacities = {};

  const [selected, setSelected] = useState([]);
  const [message, setMessage] = useState("");

  const optionMessageData = {
    0: "An apology",
    1: "A work in progress",
    2: "A struggle",
  };

  const isSelected = (index) => selected.indexOf(index) !== -1;

  const toggleSelected = (index) => {
    const selectedCopy = [...selected];
    const idxIndex = selectedCopy.indexOf(index);

    if (idxIndex === -1) {
      if (selectedCopy.length < 2) selectedCopy.push(index);
    } else {
      selectedCopy.splice(idxIndex, 1);
    }

    setSelected(selectedCopy);
  };

  for (let i = 0; i < numOptions; i++) {
    opacities[i] = isSelected(i) ? highBeam : lowBeam;
  }

  return (
    <Container>
      <StyledImage src={home} />
      {[...Array(numOptions).keys()].map((x, i) => {
        const Tagname = eval(`OverlayOption${i}`);
        return (
          <Tagname
            css={css`
              opacity: ${opacities[i]};
            `}
            onClick={() => {
              toggleSelected(i);
            }}
            onMouseOver={() => {
              setMessage(optionMessageData[i]);
            }}
            onMouseOut={() => {
              setMessage("");
            }}
          />
        );
      })}
      <HelpSection visible={true} message={message} />
      <NextPanel
        visible={selected.length === 2}
        onClick={() => {
          console.log("menu.js > onClick");
          onClickNext(selected);
        }}
      />
    </Container>
  );
};

export default Menu;

/*

todo

* load the image
* make it stretch
* add overlay divs for selecting options
* 

*/
