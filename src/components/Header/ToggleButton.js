import React from 'react'
import { func, string } from 'prop-types';
import styled from 'styled-components';

const ToggleContainer = styled.button`
  grid-area: buttonToggle;
  position: relative;
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.gradient};
  width: 8rem;
  height: 3.5rem;
  margin: 0 auto;
  border-radius: 30px;
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  cursor: pointer;
`;


const ToggleButton = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';

  return (
    <ToggleContainer lightTheme={isLight} onClick={toggleTheme} >
    </ToggleContainer>
  );
};

ToggleButton.propTypes = {
  toggleTheme: func.isRequired,
  theme: string.isRequired,
}

export default ToggleButton;
