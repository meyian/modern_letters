/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import css from "@emotion/css/macro";

import React, { useState } from "react";
import BorderedWord from "../../shared_components/bordered_word";
import NextButton from "../../shared_components/next_button";

import draymondGreen from "./pics/draymond_green.203110.png";
import kevinDurant from "./pics/kevin_durant.201142.png";

const PositionedNextButton = styled(NextButton)`
  position: absolute;
  top: 64vh;
  left: 84vh;
`;

const getOptionList = (correctAnswer) => {
  return {
    options: [correctAnswer, "Jaylen Adams", "Steven Adams", "Bam Adebayo"],
    correct_answer: 0,
  };
};

const getSelectedPlayers = () => {
  return [
    { name: "Draymond Green", src: draymondGreen },
    { name: "Kevin Durant", src: kevinDurant },
  ];
};

const Option = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};

const saveData = () => {
  // push data to endpoint
}

const pointsPerAnswer = 5;
const selectedPlayers = getSelectedPlayers();

export default ({ onClickNext }) => {
  const [score, setScore] = useState(0);
  const [showNext, setShowNext] = useState(false);
  const [currentQuestionNum, setCurrentQuestionNum] = useState(0);
  const selectedPlayer = selectedPlayers[currentQuestionNum];
  const optionData = getOptionList(selectedPlayer.name);
  const optionList = optionData.options;
  const onSelectedAnswer = (index) => {

    console.log(optionData);
    console.table({index});

    if (optionData.correct_answer === index) {
      setScore(score + pointsPerAnswer);
    }

    if (currentQuestionNum < selectedPlayers.length - 1){
      setCurrentQuestionNum(currentQuestionNum + 1);
    }
    else{
      saveData();
      setShowNext(true);
    }
  };
  const optionsListElems = optionList.map((x, i) => (
    <li><Option onClick={() => onSelectedAnswer(i)}>{x}</Option></li>
  ));
  const options = <ul>{optionsListElems}</ul>
  const questionData = {
    question_answer: selectedPlayer,
    options: getOptionList(selectedPlayer.name),
  };
  const maybeShowNextButton = () => {
    return showNext && <PositionedNextButton onClick={onClickNext}>&gt;</PositionedNextButton>
  }

  return (
    <div
      css={css`
        position: relative;
        width: 100vw;
        height: 100vh;
      `}
    >
      <BorderedWord>
        <div>
          <h1>Score: {score}</h1>
          <p>
            <img
              alt="Basketball player"
              src={questionData.question_answer.src}
            />
          </p>
          <p>{options}</p>
        </div>
      </BorderedWord>
      {maybeShowNextButton()}
    </div>
  );
};

/*

Todo:

* Create Hasura project for Waheed, stop rushing
* Post data to save that shit
* Load data on the leaderboard page
* Polish the game page
* Polish the leaderboard page
* Add video to the first page
* Last looks
* Launch

*/