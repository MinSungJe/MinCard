import React, { useState } from 'react';
import styled from 'styled-components';
import CardImage from '../assets/images/card/01_bang.png';

const CardContainer = styled.div`
  position: relative;
  width: 250px;
  height: 390px;
  transition: 0.1s transform;
`;

const CardOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const CardContent = styled.div`
  width: 250px;
  height: 390px;
  background-size: cover;
  background-image: url(${CardImage});
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
`;

const Card = () => {
  const [cardStyle, setCardStyle] = useState({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    const rotateX = (-1 / 39) * y + 5;
    const rotateY = (1 / 25) * x - 5;

    setCardStyle({
      style: cardStyle,
      transform: `perspective(300px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    });
  };

  const handleMouseOut = () => {
    setCardStyle({
      style: cardStyle,
      transform: 'rotateX(0deg) rotateY(0deg)',
    });
  };

  return (
    <CardContainer style={cardStyle} onMouseMove={handleMouseMove} onMouseOut={handleMouseOut}>
      <CardOverlay />
      <CardContent />
    </CardContainer>
  );
};

export default Card;
