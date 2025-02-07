import React from "react";
import styled from "styled-components";

const CardFrame = styled.article`
  grid-area: ${(props) => props.gridArea};
  background: var(--Dark-Desaturated-Blue-Card-BG);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  background: ${({ theme }) => theme.cardBg};
  &:hover {
    filter : brightness(120%);
  }
  .imgName {
    color: var(--Desaturated-Blue-Text);
    font-weight: 700;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    p {
      display: inline-block;
      margin-left: 10px;
      color: ${({ theme }) => theme.textColor};
    }
  }
  .followersFrame {
    /* text-align: center; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .followersNumber {
      color: ${({ theme }) => theme.text};
      font-size: 5rem;
      font-weight: 700;
      margin: 0;
      display: block;
    }
    p {
      display: block;
      color: ${({ theme }) => theme.textColor};
      letter-spacing: 5px;
    }
  }
  .arrowFrame {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      margin-top: 2px;
    }
    p {
      color: ${(props) => props.colorArrow};
      font-weight: 700;
      margin-left: 5px;
    }
  }
  &:before {
    content: "";
    background: ${(props) => props.barColor};
    display: block;
    position: absolute;
    height: 4px;
    right: 0;
    left: 0;
    top: 0;
  }
  @media screen and (max-width:375px) {
    padding: 10px 0;
    margin: 10px 0;
  }
`;

const Card = ({
  gridArea,
  imgBrand,
  nameBrand,
  followersNumber,
  arrowIcon,
  todayNumber,
  barColor,
  colorArrow
}) => {
  return (
    <CardFrame
      gridArea={gridArea}
      imgBrand={imgBrand}
      followersNumber={followersNumber}
      barColor={barColor}
      colorArrow={colorArrow}
    >
      <div className="imgName">
        <img src={imgBrand} alt="" />
        <p>
          <small>{nameBrand}</small>
        </p>
      </div>
      <div className="followersFrame">
        <p className="followersNumber">{followersNumber}</p>
        <p>FOLLOWERS</p>
      </div>
      <div className="arrowFrame">
        <img src={arrowIcon} alt="" />
        <p>
          <small>{todayNumber} Today</small>
        </p>
      </div>
    </CardFrame>
  );
};

export default Card;
