import React from 'react';
import styled,{ ThemeProvider } from 'styled-components';
import { useDarkMode } from './darkMode/useDarkMode';
import { lightTheme, darkTheme } from './darkMode/theme';
import { GlobalStyles } from './darkMode/global';

import ToggleButton from './components/Header/ToggleButton';
import TextHeader from './components/Header/TextHeader';
import Card from './components/Cards/Card';
import CardContainer from './components/Cards/CardContainer';

const Container = styled.main`
  font-family: 'Inter', sans-serif;
  font-size: 16px;

  /* Colors */
  --white: hsl(0, 0%, 100%);
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

const GridFrame = styled.main`
  /* Size */
  height: 90vh;
  width: 90vw;

  /* Grid */
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4,1fr);
  grid-template-rows: repeat(5, auto);
  /* grid-template-areas: "headerText headerText blank buttonToggle"
                       "cardFb cardTw cardIg cardYt"
                       "textOverview 1 2 3"
                       "smCardFb smCardFb smCardIg smCardIg"
                       "smCardTw smCardTw smCardYt smCardYt"; */

  grid-template-areas: "headerText headerText blank buttonToggle"
                       "cardFb cardTw cardIg cardYt"
                       "textOverview blank1 blank2 blank3"
                       "smCardFb smCardFb smCardIg smCardIg"
                       "smCardTw smCardTw smCardYt smCardYt";

  /* background: red; */
`;

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />
  };

  return (
    <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Container>
          <GridFrame>
            <TextHeader/>
            <ToggleButton theme={theme} toggleTheme={toggleTheme} />

            <CardContainer/>
          </GridFrame>
        </Container>
    </ThemeProvider>
  );
}

export default App;
