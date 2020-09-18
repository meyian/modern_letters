/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import css from "@emotion/css/macro";

import React, { useState } from "react";
import TitleScreen from "./title_screen";
import HowToPlay from './how_to_play';
import Game from './game';
import Leaderboard from "./leaderboard";

const screens = {
  0: TitleScreen,
  1: HowToPlay,
  2: Game,
  3: Leaderboard
}

const TITLE_SCREEN_ID = 0
const LEADERBOARD_ID = 1

export default () => {

  // check for cookie, see if its set

  let hasPlayedBefore = false;

  const [ currentPage, setCurrentPage ] = useState( hasPlayedBefore ? LEADERBOARD_ID : TITLE_SCREEN_ID)

  const CurrentScreen = screens[currentPage]
  const onClickNext = () => {
    setCurrentPage(currentPage + 1)
  }

  return (
    // current
    <CurrentScreen onClickNext={onClickNext} />
  );
};

/*

Todo:

Started Thu 3 Sep

* Just flow through the panels
  - next button on index
* can only play the game once
* write the game
  - json with the data i need
    - fake names
    - player
      - name
      - img location
  - layout the scene
    - your score
    - players face
    - rendered options
* Sketch the content in the panels, text only
* play through
* accessible
  - imgs
  - tab works
* mobile view
* add video
* add player imgs
* style it the best you can
  - fonts
  - layout, lines, rectangles

* 

*/
