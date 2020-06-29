import React from "react";
import styled from "styled-components";

const SmCardFrame = styled.article`
  grid-area: ${(props) => props.gridArea};
  background: var(--Dark-Desaturated-Blue-Card-BG);
  border-radius: 10px;
  padding: 20px;
  .textAndIcon {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
        color: var(--Desaturated-Blue-Text);
        font-weight: 700;
        margin: 0;
    }
  }
  .NumberAndArrow {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    p {
        font-size: 2rem;
        font-weight: 700;
        /* margin-top: 0; */
    }
    .arrowAndPercentage {
        display: flex;
        align-items: center;
        p {
            color: ${(props) => props.colorArrow};
            font-size: 1rem;
            margin-left: 5px;
        }
    }
  }
`;

const SmCard = ({
  gridArea,
  actionText,
  logoBrand,
  numberText,
  arrowIcon,
  percentage,
  colorArrow
}) => {
  return (
    <SmCardFrame
     gridArea={gridArea}
     colorArrow={colorArrow}
    >
      <div className="textAndIcon">
        <p>{actionText}</p>
        <img src={logoBrand} alt="" />
      </div>
      <div className="NumberAndArrow">
        <p>{numberText}</p>
        <div className="arrowAndPercentage">
            <img src={arrowIcon} alt="" />
            <p>
              <small>{percentage}%</small>
            </p>
        </div>
      </div>
    </SmCardFrame>
  );
};

export default SmCard;
