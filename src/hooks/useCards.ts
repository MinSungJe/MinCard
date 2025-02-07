import { useState, useEffect } from 'react';
import { CARDS_ENDPOINT } from '../api/endpoints';

interface UseCardsResult {
  cards: Card[];
  loading: boolean;
  error: unknown;
}

export default function useCards(): UseCardsResult {
  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(CARDS_ENDPOINT);
        const data = await response.json();
        setCards(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { cards, loading, error };
}
