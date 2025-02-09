import styled from 'styled-components';
import Card from './Card';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
`;

const CardContainer = styled.div`
  > * {
    margin-bottom: 10px;
  }
`;

const NameTitle = styled.p`
  font-size: 1.3rem;
  text-align: center;
  margin-bottom: 10px;
  font-weight: bold;
`;

const EpicMark = styled.p`
  font-size: 1.2rem;
  text-align: center;
  padding: 2px 5px;
  border-radius: 5px;
  color: white;
  background: #ec2d2d;
`;

const RareMark = styled.p`
  font-size: 1.2rem;
  text-align: center;
  padding: 2px 5px;
  border-radius: 5px;
  color: white;
  background: #44cf6e;
`;

const NormalMark = styled.p`
  font-size: 1.2rem;
  text-align: center;
  padding: 0px 5px;
  border-radius: 5px;
  color: white;
  background: #aaa;
`;

interface CardListProps {
  cards: Card[];
}

export default function CardList({ cards }: CardListProps) {
  return (
    <Container>
      {cards.map(({ name, imageURL, rarity }, i) => {
        return (
          <CardContainer>
            <NameTitle>{name}</NameTitle>
            <Card key={i} src={imageURL} rarity={rarity} />
            {rarity === 'epic' ? (
              <EpicMark>에픽</EpicMark>
            ) : rarity === 'rare' ? (
              <RareMark>레어</RareMark>
            ) : (
              <NormalMark>노말</NormalMark>
            )}
          </CardContainer>
        );
      })}
    </Container>
  );
}
