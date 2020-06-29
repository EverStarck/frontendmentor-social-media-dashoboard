import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { useDarkMode } from "./darkMode/useDarkMode";
import { lightTheme, darkTheme } from "./darkMode/theme";
import { GlobalStyles } from "./darkMode/global";

import ToggleButton from "./components/Header/ToggleButton";
import TextHeader from "./components/Header/TextHeader";
import CardContainer from "./components/Cards/CardContainer";
import SmCardContainer from "./components/Cards/SmCardContainer";

const Container = styled.main`
  font-family: "Inter", sans-serif;
  font-size: 16px;

  /* Colors */
  --white: hsl(0, 0%, 100%);
  --Lime-Green: hsl(163, 72%, 41%);
  --Bright-Red: hsl(356, 69%, 56%);
  --Facebook: hsl(208, 92%, 53%);
  --Twitter: hsl(203, 89%, 53%);
  --Instagram: linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%));
  --YouTube: hsl(348, 97%, 39%);
  /* Dark */
  --Very-Dark-Blue-Top-BG-Pattern: hsl(232, 19%, 15%);
  --Dark-Desaturated-Blue-Card-BG: hsl(228, 28%, 20%);
  --Desaturated-Blue-Text: hsl(228, 34%, 66%);
  /* Light */
  --Very-Pale-Blue-Top-BG-Pattern: hsl(225, 100%, 98%);
  --Light-Grayish-Blue-Card-BG: hsl(227, 47%, 96%);
  --Dark-Grayish-Blue-Text: hsl(228, 12%, 44%);
  --Very-Dark-Blue-Text: hsl(230, 17%, 14%);

  /* Size */
  height: 100vh;
  width: 100vw;

  /* Center */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  /* background: green; */
`;

const GridFrame = styled.section`
  /* Size */
  height: 80vh;
  width: 80vw;

  /* Grid */
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  /* grid-template-rows: .1fr auto .1fr auto auto; */
  grid-template-rows: auto 280px auto 120px 120px;
  grid-template-areas:
    "headerText headerText headerText buttonToggle"
    "cardFb cardTw cardIg cardYt"
    "textOverview textOverview textOverview textOverview"
    "smCardFb smCardFb2 smCardIg smCardIg2"
    "smCardTw smCardTw2 smCardYt smCardYt2";

  /* background: red; */
  h2 {
    grid-area: textOverview;
    font-size: 1.7rem;
    color: ${({ theme }) => theme.text};
  }

  /* Responsive */
  @media screen and (max-width: 1216px) {
    /* Size */
    height: 90vh;
    width: 90vw;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto 280px 280px auto 120px 120px;
    grid-template-areas:
    "headerText headerText headerText buttonToggle"
    "cardFb cardFb cardTw cardTw"
    "cardIg cardIg cardYt cardYt"
    "textOverview textOverview textOverview textOverview"
    "smCardFb smCardFb2 smCardIg smCardIg2"
    "smCardTw smCardTw2 smCardYt smCardYt2";
  }

  @media screen and (max-width: 818px) {
    /* Size */
    height: 90vh;
    width: 90vw;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto 280px 280px auto 120px 120px 120px 120px 120px;
    grid-template-areas:
    "headerText headerText headerText buttonToggle"
    "cardFb cardFb cardTw cardTw"
    "cardIg cardIg cardYt cardYt"
    "textOverview textOverview textOverview textOverview"
    "smCardFb smCardFb smCardFb2 smCardFb2"
    "smCardIg smCardIg smCardIg2 smCardIg2"
    "smCardTw smCardTw smCardTw2 smCardTw2"
    "smCardYt smCardYt smCardYt2 smCardYt2";
  }

  @media screen and (max-width: 540px) {
    /* Size */
    /* height: 90vh; */
    width: 90vw;
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto repeat(4, 270px) auto repeat(8,140px);
    grid-template-areas:
    "headerText"
    "buttonToggle"
    "cardFb"
    "cardTw"
    "cardIg"
    "cardYt"
    "textOverview"
    "smCardFb"
    "smCardFb2"
    "smCardIg"
    "smCardIg2"
    "smCardTw"
    "smCardTw2"
    "smCardYt"
    "smCardYt2";
  }
`;

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Container>
        <GridFrame>
          <TextHeader
           textInfo="Social Media Dashboard"
           h4="Total Followers: 23,004"
           gridArea='headerText'/>
          <ToggleButton theme={theme} toggleTheme={toggleTheme} />
          <CardContainer />
          <h2>Overview - Today</h2>
          <SmCardContainer/>
        </GridFrame>
      </Container>
    </ThemeProvider>
  );
}

export default App;
