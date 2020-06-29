import React from 'react';
import styled from 'styled-components';

const HeaderFrame = styled.header`
    grid-area: ${(props) => props.gridArea};
    margin: 0;
    height: 100%;
    /* background: red; */
    h1, h4 {
      color: ${({ theme }) => theme.text};
      margin: 0;
    }
    h4 {
      color: ${({ theme }) => theme.textColor};
    }
    @media screen and (max-width: 420px) {
      h1 {
        font-size: 1.7rem;
      }
    }
`;

const TextHeader = ({textInfo,h4, gridArea}) => {
  return (
    <HeaderFrame
     gridArea={gridArea}
    >
      <h1>{textInfo}</h1>
      <br />
      <h4>{h4}</h4>
    </HeaderFrame>
  );
};

export default TextHeader;