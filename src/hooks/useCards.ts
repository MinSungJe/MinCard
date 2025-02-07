import { useState, useEffect } from 'react';
import { CARDS_ENDPOINT } from '../api/endpoints';

interface Card {
  src: string;
  rarity: string;
}

interface UseCardsResult {
  products: Card[];
  loading: boolean;
  error: unknown;
}

export default function useCards(): UseCardsResult {
  const [products, setProducts] = useState<Card[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(CARDS_ENDPOINT);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
}
