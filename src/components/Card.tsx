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

const CardLightOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.4) 10%, transparent 50%);
  pointer-events: none; /* 마우스 이벤트 차단 */
  transition: all 0.1s;
`;

const CardRareOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(105deg, transparent 40%, rgba(225, 219, 112, 0.8) 45%, rgba(132, 50, 255, 0.6) 50%, transparent 54%);
  background-size: 150% 150%;
  background-position: 100%;
  filter: brightness(1.5) opacity(0.5);
  mix-blend-mode: color-dodge;
  pointer-events: none; /* 마우스 이벤트 차단 */
`;

const CardContent = styled.div`
  width: 250px;
  height: 420px;
  background-size: cover;
  background-image: url(${CardImage});
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
`;

interface CardProps {
  rarity: string
}

const Card = ({rarity}: CardProps) => {
  const [cardStyle, setCardStyle] = useState({});
  const [lightOverlayStyle, setLightOverlayStyle] = useState({});
  const [rareOverlayStyle, setRareOverlayStyle] = useState({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    const rotateX = (-1 / 42) * y + 5;
    const rotateY = (1 / 25) * x - 5;
    const posX = x - 125
    const posY = y - 210
    const rarePos = 100 - (x/3 + -y/5)

    setCardStyle({
      transform: `perspective(300px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    });

    setLightOverlayStyle({
      display: 'block',
      transform: `translateX(${posX}px) translateY(${posY}px)`,
    })

    setRareOverlayStyle({
      filter: 'opacity(0.7)',
      backgroundPosition: `${rarePos}%`,
    })
  };

  const handleMouseOut = () => {
    setCardStyle({
      transform: 'rotateX(0deg) rotateY(0deg)',
    });

    setLightOverlayStyle({
      transform: `translateX(0px) translateY(0px)`,
    })

    setRareOverlayStyle({
      filter: 'opacity(0.5)',
      backgroundPosition: `100%`,
    })
  };

  return (
    <CardContainer style={cardStyle} onMouseMove={handleMouseMove} onMouseOut={handleMouseOut}>
      {rarity === 'rare' ? <CardRareOverlay style={rareOverlayStyle} /> : null}
      <CardLightOverlay style={lightOverlayStyle} />
      <CardContent />
    </CardContainer>
  );
};

export default Card;
