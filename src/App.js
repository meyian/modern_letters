/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import css from "@emotion/css/macro";
import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

// TODO: For Wyatt (SO INAGAWA - AIRIER (CABARET RECORDINGS))
const BorderedPage = ({children, borderColor, left, right}) => (
  <div
    css={css`
      height: 100vh;
      padding: 1rem;
    `}
  >
    <div
      className='bordered-div'
      css={css`
        width: calc(100% - 1rem);
        height: calc(100% - 3rem);
        border: 5px solid ${borderColor};
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          width: 100%;
        `}
      >
        <Link to={left}>{"<"}</Link>

        <h1 css={css`color: ${borderColor}`}>{children}</h1>

        <Link to={right}>{">"}</Link>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/red">
        <BorderedPage borderColor="red" left="black" right="blue">Red</BorderedPage>
        </Route>
        <Route path="/blue">
          <BorderedPage borderColor="blue" left="red" right="black">Blue</BorderedPage>
        </Route>
        <Route path="/">
          <BorderedPage borderColor="black" left="blue" right="red">Black</BorderedPage>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
