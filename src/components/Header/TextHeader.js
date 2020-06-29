import React from 'react';
import styled from 'styled-components';

const HeaderFrame = styled.header`
    grid-area: headerText;
`;

const TextHeader = () => {
  return (
    <HeaderFrame>
      <h1>Social Media Dashboard</h1>
      <br />
      <h4>Total Followers: 23,004</h4>
    </HeaderFrame>
  );
};

export default TextHeader;