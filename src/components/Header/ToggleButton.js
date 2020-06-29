import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";

const ButtonContainer = styled.div`
  grid-area: buttonToggle;
  display: flex;
  align-items: center;
  justify-content: end;
  p {
    font-weight: 700;
    margin-right: 10px;
    color: ${({ theme }) => theme.textColor};
  }
  input {
    appearance: none;
    /* -webkit-tap-highlight-color: transparent; */
    cursor: pointer;
    height: 30px;
    width: 60px;
    border-radius: 16px;
    display: inline-block;
    position: relative;
    margin: 0;
    background: linear-gradient(to right, hsl(210, 78%, 56%),  hsl(146, 68%, 55%));
    transition: all 0.2s ease;
    &:after {
      content: "";
      position: absolute;
      top: 3px;
      left: 5px;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: var(--Dark-Desaturated-Blue-Card-BG);
      box-shadow: 0 1px 2px rgba(44, 44, 44, 0.2);
      transition: all 0.2s cubic-bezier(0.5, 0.1, 0.75, 1.35);
    }
    &:focus {
      outline: 0;
    }
    &:checked {
      &:after {
        background: var(--Light-Grayish-Blue-Card-BG);
        transform: translatex(26px);
      }
    }
  }
  @media screen and (max-width: 540px) {
    justify-content: space-between;
    position: relative;
    &::after {
      content: "";
      top: 0px;
      position: absolute;
      width: 90vw;
      background: var(--Desaturated-Blue-Text);
      height: 1px;
    }
  }
`;

const ToggleButton = ({ theme, toggleTheme }) => {
  const isLight = theme === "light";

  return (
    <ButtonContainer>
      <p>
        <small>Dark Mode</small>
      </p>
      <input
        type="checkbox"
        lightTheme={isLight}
        onClick={toggleTheme}
      />
      {/* <button lightTheme={isLight} onClick={toggleTheme}></button> */}
    </ButtonContainer>
  );
};

ToggleButton.propTypes = {
  toggleTheme: func.isRequired,
  theme: string.isRequired,
};

export default ToggleButton;
