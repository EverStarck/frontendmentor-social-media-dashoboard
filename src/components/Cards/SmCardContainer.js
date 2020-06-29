import React from "react";
import SmCard from "./SmCard";

import iconDown from "../../assets/images/icon-down.svg";
import iconUp from "../../assets/images/icon-up.svg";
import iconFacebook from "../../assets/images/icon-facebook.svg";
import iconTwitter from "../../assets/images/icon-twitter.svg";
import iconInstagram from "../../assets/images/icon-instagram.svg";
import iconYoutube from "../../assets/images/icon-youtube.svg";

const SmCardContainer = () => {
  return (
    <>
      <SmCard
        gridArea="smCardFb"
        actionText="Page Views"
        logoBrand={iconFacebook}
        numberText="87"
        arrowIcon={iconUp}
        percentage="3"
        colorArrow="var(--Lime-Green);"
      />
      <SmCard
        gridArea="smCardFb2"
        actionText="Likes"
        logoBrand={iconFacebook}
        numberText="52"
        arrowIcon={iconDown}
        percentage="2"
        colorArrow="var(--Bright-Red);"
      />
      <SmCard
        gridArea="smCardIg"
        actionText="Likes"
        logoBrand={iconInstagram}
        numberText="5462"
        arrowIcon={iconUp}
        percentage="2257"
        colorArrow="var(--Lime-Green);"
      />
      <SmCard
        gridArea="smCardIg2"
        actionText="Profile Views"
        logoBrand={iconInstagram}
        numberText="52k"
        arrowIcon={iconUp}
        percentage="1375"
        colorArrow="var(--Lime-Green);"
      />
      <SmCard
        gridArea="smCardTw"
        actionText="Retweets"
        logoBrand={iconTwitter}
        numberText="117"
        arrowIcon={iconUp}
        percentage="303"
        colorArrow="var(--Lime-Green);"
      />
      <SmCard
        gridArea="smCardTw2"
        actionText="Likes"
        logoBrand={iconTwitter}
        numberText="507"
        arrowIcon={iconUp}
        percentage="553"
        colorArrow="var(--Lime-Green);"
      />
      <SmCard
        gridArea="smCardYt"
        actionText="Likes"
        logoBrand={iconYoutube}
        numberText="107"
        arrowIcon={iconDown}
        percentage="19"
        colorArrow="var(--Bright-Red);"
      />
      <SmCard
        gridArea="smCardYt2"
        actionText="Top Views"
        logoBrand={iconYoutube}
        numberText="1407"
        arrowIcon={iconDown}
        percentage="12"
        colorArrow="var(--Bright-Red);"
      />
    </>
  );
};

export default SmCardContainer;
