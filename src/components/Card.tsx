import React, { useState } from 'react';
import styled from 'styled-components';

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
  filter: opacity(0);
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.4) 10%, transparent 50%);
  pointer-events: none; /* 마우스 이벤트 차단 */
  transition: all 0.05s;
`;

const CardEpicOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
      90deg,
      transparent 10%,
      rgba(7, 100, 152, 1) 11%,
      rgba(72, 121, 169, 1) 12%,
      rgba(140, 148, 188, 1) 13%,
      rgba(208, 176, 191, 1) 14%,
      rgba(249, 217, 209, 1) 15%,
      transparent 16%
    ),
    linear-gradient(
      90deg,
      transparent 30%,
      rgba(7, 100, 152, 1) 31%,
      rgba(72, 121, 169, 1) 32%,
      rgba(140, 148, 188, 1) 33%,
      rgba(208, 176, 191, 1) 34%,
      rgba(249, 217, 209, 1) 35%,
      transparent 36%
    ),
    linear-gradient(
      90deg,
      transparent 50%,
      rgba(7, 100, 152, 1) 51%,
      rgba(72, 121, 169, 1) 52%,
      rgba(140, 148, 188, 1) 53%,
      rgba(208, 176, 191, 1) 54%,
      rgba(249, 217, 209, 1) 55%,
      transparent 56%
    ),
    linear-gradient(
      90deg,
      transparent 70%,
      rgba(7, 100, 152, 1) 71%,
      rgba(72, 121, 169, 1) 72%,
      rgba(140, 148, 188, 1) 73%,
      rgba(208, 176, 191, 1) 74%,
      rgba(249, 217, 209, 1) 75%,
      transparent 76%
    ),
    linear-gradient(
      90deg,
      transparent 90%,
      rgba(7, 100, 152, 1) 91%,
      rgba(72, 121, 169, 1) 92%,
      rgba(140, 148, 188, 1) 93%,
      rgba(208, 176, 191, 1) 94%,
      rgba(249, 217, 209, 1) 95%,
      transparent 96%
    ),
    linear-gradient(
      180deg,
      transparent 10%,
      rgba(7, 100, 152, 1) 11%,
      rgba(72, 121, 169, 1) 12%,
      rgba(140, 148, 188, 1) 13%,
      rgba(208, 176, 191, 1) 14%,
      rgba(249, 217, 209, 1) 15%,
      transparent 16%
    ),
    linear-gradient(
      180deg,
      transparent 30%,
      rgba(7, 100, 152, 1) 31%,
      rgba(72, 121, 169, 1) 32%,
      rgba(140, 148, 188, 1) 33%,
      rgba(208, 176, 191, 1) 34%,
      rgba(249, 217, 209, 1) 35%,
      transparent 36%
    ),
    linear-gradient(
      180deg,
      transparent 50%,
      rgba(7, 100, 152, 1) 51%,
      rgba(72, 121, 169, 1) 52%,
      rgba(140, 148, 188, 1) 53%,
      rgba(208, 176, 191, 1) 54%,
      rgba(249, 217, 209, 1) 55%,
      transparent 56%
    ),
    linear-gradient(
      180deg,
      transparent 70%,
      rgba(7, 100, 152, 1) 71%,
      rgba(72, 121, 169, 1) 72%,
      rgba(140, 148, 188, 1) 73%,
      rgba(208, 176, 191, 1) 74%,
      rgba(249, 217, 209, 1) 75%,
      transparent 76%
    ),
    linear-gradient(
      180deg,
      transparent 90%,
      rgba(7, 100, 152, 1) 91%,
      rgba(72, 121, 169, 1) 92%,
      rgba(140, 148, 188, 1) 93%,
      rgba(208, 176, 191, 1) 94%,
      rgba(249, 217, 209, 1) 95%,
      transparent 96%
    );
  background-size: 200% 150%;
  background-position: 100%;
  filter: brightness(1.8) opacity(0);
  mix-blend-mode: color-dodge;
  pointer-events: none; /* 마우스 이벤트 차단 */
`;

const CardRareOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
      105deg,
      transparent 25%,
      rgba(255, 248, 113, 0.8) 30%,
      rgba(166, 106, 255, 0.6) 35%,
      transparent 40%
    ),
    linear-gradient(
      105deg,
      transparent 60%,
      rgba(225, 219, 112, 0.8) 65%,
      rgba(132, 50, 255, 0.6) 70%,
      transparent 75%
    );
  background-size: 200% 150%;
  background-position: 100%;
  filter: brightness(1.5) opacity(0);
  mix-blend-mode: color-dodge;
  pointer-events: none; /* 마우스 이벤트 차단 */
`;

const CardContent = styled.div`
  width: 250px;
  height: 420px;
  background-size: cover;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
`;

interface CardProps {
  src: string;
  rarity: string;
}

const Card = ({ src, rarity }: CardProps) => {
  const [cardStyle, setCardStyle] = useState({});
  const [lightOverlayStyle, setLightOverlayStyle] = useState({});
  const [rareOverlayStyle, setRareOverlayStyle] = useState({});
  const [epicOverlayStyle, setEpicOverlayStyle] = useState({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    const rotateX = (-1 / 42) * y + 5;
    const rotateY = (1 / 25) * x - 5;
    const posX = x - 125;
    const posY = y - 210;
    const rarePos = 100 - (x / 3 + -y / 5);
    const epicPosX = 100 - x / 7;
    const epicPosY = 100 + y / 10;
    const epicOpacityX = (1 / 15625) * (x - 125) * (x - 125) * 0.45 + 0.05;
    const epicOpacityY = (1 / 44100) * (y - 210) * (y - 210) * 0.45 + 0.05;

    setCardStyle({
      transform: `perspective(300px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    });

    setLightOverlayStyle({
      filter: 'opacity(1)',
      transform: `translateX(${posX}px) translateY(${posY}px)`,
    });

    setRareOverlayStyle({
      filter: 'opacity(0.7)',
      backgroundPosition: `${rarePos}%`,
    });

    setEpicOverlayStyle({
      filter: `opacity(${epicOpacityX + epicOpacityY})`,
      backgroundPosition: `${epicPosX}% ${epicPosY}%`,
    });
  };

  const handleMouseOut = () => {
    setCardStyle({
      transform: 'rotateX(0deg) rotateY(0deg)',
    });

    setLightOverlayStyle({
      filter: 'opacity(0)',
    });

    setRareOverlayStyle({
      filter: 'opacity(0)',
      backgroundPosition: `100%`,
    });

    setEpicOverlayStyle({
      filter: 'opacity(0)',
      backgroundPosition: `100%`,
    });
  };

  return (
    <CardContainer style={cardStyle} onMouseMove={handleMouseMove} onMouseOut={handleMouseOut}>
      {rarity === 'epic' ? <CardEpicOverlay style={epicOverlayStyle} /> : null}
      {rarity === 'epic' || rarity === 'rare' ? <CardRareOverlay style={rareOverlayStyle} /> : null}
      <CardLightOverlay style={lightOverlayStyle} />
      <CardContent style={{ backgroundImage: `url(${src})` }} />
    </CardContainer>
  );
};

export default Card;
