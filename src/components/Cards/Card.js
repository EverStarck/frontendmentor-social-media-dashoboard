import React from 'react';
import styled from 'styled-components';

const CardFrame = styled.article`
    grid-area: ${(props) => props.gridArea};
`;

const Card = ({gridArea, imgBrand,followersNumber,arrowIcon,todayNumber}) => {
    return (
        <CardFrame
         gridArea={gridArea}
         imgBrand={imgBrand}
         followersNumber={followersNumber}>
            <img src={imgBrand} alt=""/>
            <p>{followersNumber}</p>
            <img src={arrowIcon} alt=""/>
            <p><small>{todayNumber}</small> Today</p>
         </CardFrame>
    );
}

export default Card;