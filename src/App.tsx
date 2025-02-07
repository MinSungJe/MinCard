import styled from 'styled-components';
import './App.css';
import useCards from './hooks/useCards';
import CardList from './components/CardList';

const Container = styled.div`
  max-width: 1080px;
  padding: 20px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

function App() {
  const { cards, loading, error } = useCards();

  return (
    <Container>
      <Title>민카드</Title>
      {error ? '에러남' : loading ? '로딩중' : <CardList cards={cards} />}
    </Container>
  );
}

export default App;
