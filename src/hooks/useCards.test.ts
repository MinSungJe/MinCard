import { renderHook, waitFor } from '@testing-library/react';
import useCards from './useCards';

describe('useProducts', () => {
  describe('상품 목록 조회', () => {
    it('상품 목록을 조회한다.', async () => {
      const { result } = renderHook(() => useCards());

      await waitFor(() => {
        expect(result.current.products).toHaveLength(20);
      });
    });
  });
});
