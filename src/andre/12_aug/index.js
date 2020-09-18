/** @jsx jsx */

import { useState } from "react";

import { jsx } from "@emotion/core";
import css from "@emotion/css/macro";

import Resizer from "../../shared_components/resizer";
import BorderedWord from "../../shared_components/bordered_word";
import Menu from "./menu";

import ApologyPage from "./0-apology";
import WipPage from "./1-wip";
import StrugglePage from "./2-struggle";
import EndPage from "./end";

const [perfectWidth, perfectHeight] = [1000, 557];

const Index = () => {
  const [isPerfectSize, setIsPerfectSize] = useState(false);
  const [currentPage, setCurrentPage] = useState("menu");
  const [selectedThoughts, setSelectedThoughts] = useState([]);
  const [unselectedThought, setUnselectedThought] = useState(-1);

  const popSelected = (state) => {
    state = state || selectedThoughts;
    const _selectedThoughts = [...state];

    const poppedThought = _selectedThoughts.shift();
    setSelectedThoughts(_selectedThoughts);

    return poppedThought;
  };

  const onMenuClickNext = (selected) => {
    setSelectedThoughts(selected);
    setUnselectedThought(
      [0, 1, 2].filter((x) => selected.indexOf(x) === -1).pop()
    );

    const nextThought = popSelected(selected);

    setCurrentPage(nextThought);
  };

  const onClickNext = () => {
    const nextThought = popSelected() || "end";

    setCurrentPage(nextThought);
  };

  const getPageComponent = (currentPageId, onClickNextFn) => {
    switch (currentPageId) {
      case "menu":
        return <Menu onClickNext={onMenuClickNext} />;
      case 0:
        return <ApologyPage onClickNext={onClickNextFn} />;
      case 1:
        return <WipPage onClickNext={onClickNextFn} />;
      case 2:
        return <StrugglePage onClickNext={onClickNextFn} />;
      case "end":
        const unseenThought = getPageComponent(unselectedThought);
        return <EndPage>{unseenThought}</EndPage>;
      default:
        return <BorderedWord>Invalid page, please refresh</BorderedWord>;
    }
  };

  const getCurrentPanel = () => {
    if (!isPerfectSize) {
      return (
        <Resizer
          perfectWidth={perfectWidth}
          perfectHeight={perfectHeight}
          onPerfectSize={() => {
            setIsPerfectSize(true);
          }}
        />
      );
    } else {
      return getPageComponent(currentPage, onClickNext);
    }
  };

  return getCurrentPanel();
};

export default Index;
