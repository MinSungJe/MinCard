import React, { useState } from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 220px;
  height: 310px;
  transition: 0.1s transform;
`;

const CardContent = styled.div`
  width: 220px;
  height: 310px;
  background-color: #ddd;
  background-size: cover;
`;

const Card = () => {
  const [style, setStyle] = useState({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    const rotateX = (-2 / 29) * y + 10;
    const rotateY = (1 / 10) * x - 10;

    setStyle({
      style,
      transform: `perspective(300px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    });
  };

  const handleMouseOut = () => {
    setStyle({
      style,
      transform: 'rotateX(0deg) rotateY(0deg)',
    });
  };

  return (
    <CardContainer style={style} onMouseMove={handleMouseMove} onMouseOut={handleMouseOut}>
      <CardContent />
    </CardContainer>
  );
};

export default Card;
