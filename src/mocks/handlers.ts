// API 요청을 처리할 핸들러 파일
import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('http://example.com', () => {
    return HttpResponse.json();
  }),
];
