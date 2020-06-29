import React from 'react';
import Card from './Card';


import iconDown from '../../assets/images/icon-down.svg';
import iconUp from '../../assets/images/icon-up.svg';
import iconFacebook from '../../assets/images/icon-facebook.svg';
import iconTwitter from '../../assets/images/icon-twitter.svg';
import iconInstagram from '../../assets/images/icon-instagram.svg';
import iconYoutube from '../../assets/images/icon-youtube.svg';


const CardContainer = () => {
    return (
      <>
        <Card
         gridArea="cardFb"
         imgBrand={iconFacebook}
         followersNumber='1987'
         arrowIcon={iconUp}
         todayNumber='12'/>
        <Card
         gridArea="cardTw"
         imgBrand={iconTwitter}
         followersNumber='1044'
         arrowIcon={iconUp}
         todayNumber='99'/>
        <Card
         gridArea="cardIg"
         imgBrand={iconInstagram}
         followersNumber='11k'
         arrowIcon={iconUp}
         todayNumber='1099'/>
        <Card
         gridArea="cardYt"
         imgBrand={iconYoutube}
         followersNumber='8239'
         arrowIcon={iconDown}
         todayNumber='144'/>
      </>
    );
}

export default CardContainer;