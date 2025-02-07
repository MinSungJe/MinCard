// API 요청을 처리할 핸들러 파일
import { http, HttpResponse } from 'msw';
import cards from './cards.json';
import { CARDS_ENDPOINT } from '../api/endpoints';

export const handlers = [
  http.get(CARDS_ENDPOINT, () => {
    return HttpResponse.json(cards);
  }),
];
