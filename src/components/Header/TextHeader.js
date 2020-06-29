import React from 'react';
import styled from 'styled-components';

const HeaderFrame = styled.header`
    grid-area: ${(props) => props.gridArea};
    margin: 0;
    height: 100%;
    /* background: red; */
    h1, h4 {
      margin: 0;
    }
    h4 {
      color: var(--Desaturated-Blue-Text);
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