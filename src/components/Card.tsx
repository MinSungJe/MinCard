import React, { useState } from 'react';
import styled from 'styled-components';
import CardImage from '../assets/images/card/Magician.jpg';

const CardContainer = styled.div`
  position: relative;
  width: 250px;
  height: 420px;
  border: 1px solid #030303;
  border-radius: 10px;
  transition: 0.1s transform;
  overflow: hidden;
`;

const CardOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.4) 10%, transparent 50%);
  pointer-events: none; /* 마우스 이벤트 차단 */
  transition: all 0.1s;
`;

const CardContent = styled.div`
  width: 250px;
  height: 420px;
  background-size: cover;
  background-image: url(${CardImage});
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
`;

const Card = () => {
  const [cardStyle, setCardStyle] = useState({});
  const [overlayStyle, setOverlayStyle] = useState({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    const rotateX = (-1 / 42) * y + 5;
    const rotateY = (1 / 25) * x - 5;
    const posX = x - 125
    const posY = y - 210

    setCardStyle({
      transform: `perspective(300px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    });

    setOverlayStyle({
      display: 'block',
      transform: `translateX(${posX}px) translateY(${posY}px)`,
    })
  };

  const handleMouseOut = () => {
    setCardStyle({
      transform: 'rotateX(0deg) rotateY(0deg)',
    });

    setOverlayStyle({
      transform: `translateX(0px) translateY(0px)`,
    })
  };

  return (
    <CardContainer style={cardStyle} onMouseMove={handleMouseMove} onMouseOut={handleMouseOut}>
      <CardOverlay style={overlayStyle} />
      <CardContent />
    </CardContainer>
  );
};

export default Card;
