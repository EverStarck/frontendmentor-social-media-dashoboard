import React from "react";
import Card from "./Card";

import iconDown from "../../assets/images/icon-down.svg";
import iconUp from "../../assets/images/icon-up.svg";
import iconFacebook from "../../assets/images/icon-facebook.svg";
import iconTwitter from "../../assets/images/icon-twitter.svg";
import iconInstagram from "../../assets/images/icon-instagram.svg";
import iconYoutube from "../../assets/images/icon-youtube.svg";

const CardContainer = () => {
  return (
    <>
      <Card
        gridArea="cardFb"
        barColor="var(--Facebook);"
        imgBrand={iconFacebook}
        nameBrand="@nathanf"
        followersNumber="1987"
        arrowIcon={iconUp}
        todayNumber="12"
        colorArrow="var(--Lime-Green);"
      />
      <Card
        gridArea="cardTw"
        barColor="var(--Twitter);"
        imgBrand={iconTwitter}
        nameBrand="@nathanf"
        followersNumber="1044"
        arrowIcon={iconUp}
        todayNumber="99"
        colorArrow="var(--Lime-Green);"
      />
      <Card
        gridArea="cardIg"
        barColor="var(--Instagram);"
        imgBrand={iconInstagram}
        nameBrand="@realnathanf"
        followersNumber="11k"
        arrowIcon={iconUp}
        todayNumber="1099"
        colorArrow="var(--Lime-Green);"
      />
      <Card
        gridArea="cardYt"
        barColor="var(--YouTube);"
        imgBrand={iconYoutube}
        nameBrand="@Nathan F."
        followersNumber="8239"
        arrowIcon={iconDown}
        todayNumber="144"
        colorArrow="var(--Bright-Red);"
      />
    </>
  );
};

export default CardContainer;
