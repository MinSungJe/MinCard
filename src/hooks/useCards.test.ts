import { server } from '../mocks/server';
import { http, HttpResponse } from 'msw';
import { renderHook, waitFor } from '@testing-library/react';
import useCards from './useCards';
import { CARDS_ENDPOINT } from '../api/endpoints';

describe('useCards', () => {
  describe('카드 목록 조회', () => {
    it('카드 목록을 조회한다.', async () => {
      const { result } = renderHook(() => useCards());

      await waitFor(() => {
        expect(result.current.products).toHaveLength(5);
      });
    });

    it('카드 목록 조회 중 로딩 상태', () => {
      const { result } = renderHook(() => useCards());

      expect(result.current.loading).toBe(true);
    });

    it('카드 목록 조회 중 에러 상태', async () => {
      // 해당 엔드포인트에 대한 GET 요청이 500 에러를 반환하도록 설정
      server.use(
        http.get(CARDS_ENDPOINT, () => {
          return new HttpResponse(null, { status: 500 });
        })
      );

      const { result } = renderHook(() => useCards());

      await waitFor(() => {
        expect(result.current.products).toEqual([]);
        expect(result.current.loading).toBe(false);
        expect(result.current.error).toBeTruthy();
      });
    });
  });
});
